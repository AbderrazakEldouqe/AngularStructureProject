import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from '../../_core/models/user';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';
import {NotFoundError} from '../../_shared/exceptions/not-found-error';
import {BadInputError} from '../../_shared/exceptions/bad-input-error';
import {AppError} from '../../_shared/exceptions/app-error';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {
  }

  register(data: User): Observable<object> {
    console.log(data, 'ddd37');
    return this.http.post(`${environment.apiUrl}/auth/register`, data, {headers: {skip: 'true'}})
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
