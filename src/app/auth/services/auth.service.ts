import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {NotFoundError} from '../../_shared/exceptions/not-found-error';
import {BadInputError} from '../../_shared/exceptions/bad-input-error';
import {AppError} from '../../_shared/exceptions/app-error';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) {
  }

  login(data: { email: string, password: string }): Observable<object> {
    return this.http.post(`${environment.apiUrl}/auth/login`, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 404) {
      // return Observable.throw(new NotFoundError());
      return throwError(new NotFoundError(error));
    }
    if (error.status === 400) {
      // return Observable.throw(new BadInputError());
      return throwError(new BadInputError(error));
    }
    // return Observable.throw(new AppError());
    return throwError(new AppError(error));
  }

}
