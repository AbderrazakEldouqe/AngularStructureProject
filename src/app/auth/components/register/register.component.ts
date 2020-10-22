import {Component, OnInit} from '@angular/core';
import {RegisterService} from '../../services/register.service';
import {ToastrService} from 'ngx-toastr';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AppError} from '../../../_shared/exceptions/app-error';
import {BadInputError} from '../../../_shared/exceptions/bad-input-error';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = null;
  errorsServer;

  constructor(private registerService: RegisterService,
              private toastr: ToastrService,
              private router: Router) {
    this.registerForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      cin: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)])

    }, {
      validators: this.password.bind(this)
    });
  }

  ngOnInit(): void {
  }

  register(): void {
    console.log(this.registerForm.value);
    this.errorsServer = null;
    this.registerService.register(this.registerForm.value)
      .subscribe(res => this.handleResponse(res),
        err => this.handleError(err));
  }

  handleResponse(data): void {
    this.toastr.success(
      `Bienvenu : ${this.registerForm.get('name').value}`,
      'Vous compte a éte bien crée !',
      {
        timeOut: 3000,
        positionClass: 'toast-bottom-left'
      }
    );
    this.router.navigateByUrl('/auth');
  }

  handleError(error: AppError): void {
    console.log(error);
    if (error instanceof BadInputError) {
      this.errorsServer = error.originalError.error.errors;
      console.log('errors: ', this.errorsServer);
      this.toastr.error(
        `Erreur `, // ${data.error.password ? data.error?.password : data.error?.message}
        'Merci de Vérifier votre donné saisie !',
        {
          timeOut: 3000,
          positionClass: 'toast-bottom-left'
        }
      );
    } else {
      // alert('error inattendue');
      this.errorsServer = error.originalError.error.errors;
      console.log('errors: ', this.errorsServer);
      this.toastr.error(
        ` `,
        'Error inattendue !',
        {
          timeOut: 3000,
          positionClass: 'toast-bottom-left'
        }
      );
    }

  }

  password(formGroup: FormGroup): void {
    const {value: password} = formGroup.get('password');
    const {value: confirmPassword} = formGroup.get('confirmPassword');
    // console.log(password, confirmPassword);
    // return password === confirmPassword ? null : {passwordNotMatch: true};
    return password === confirmPassword ? null : formGroup.get('confirmPassword').setErrors({confirmPasswordMatch: true});
  }
}
