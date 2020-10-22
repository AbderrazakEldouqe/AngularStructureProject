import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../../_core/services/token.service';
import {AccountService} from '../../../_core/services/account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: null;
  public loggedIn = false;

  constructor(private tokenService: TokenService,
              private accountService: AccountService,
              private router: Router) {
  }


  ngOnInit(): void {
    this.accountService.authStatus.subscribe(res => {
      this.loggedIn = res;
      this.currentUser = this.tokenService.getInfos();
    });
  }

  logout(): void {
    this.tokenService.remove();
    this.accountService.changeStatus(false);
    this.router.navigateByUrl('/auth/login');
  }
}
