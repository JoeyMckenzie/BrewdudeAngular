import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SecuredUser} from "../../models/secured-user";
import {User} from "../../models/user";
import {UserLogin} from "../../models/user-login";

const REGISTER_BASE_URL = "https://localhost:5001/api/user/register";
const LOGIN_BASE_URL = "https://localhost:5001/api/user/login";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _currentUserSubject: BehaviorSubject<SecuredUser>;
  public currentUser: Observable<SecuredUser>;

  constructor(private http: HttpClient) {
    this._currentUserSubject = new BehaviorSubject<SecuredUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this._currentUserSubject.asObservable();
  }

  get currentUserSubject(): SecuredUser {
    return this._currentUserSubject.value;
  }

  public registerUser(user: User): Observable<SecuredUser> {
    return this.http.post<SecuredUser>(REGISTER_BASE_URL, user, httpOptions)
      .pipe(
        map(user => {
          if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this._currentUserSubject.next(user);
          }

          return user;
        })
      );
  }

  public loginUser(userLogin: UserLogin): Observable<SecuredUser> {
    return this.http.post<SecuredUser>(LOGIN_BASE_URL, userLogin, httpOptions)
      .pipe(
        map(user => {
          if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this._currentUserSubject.next(user);
          }
          return user;
        })
      );
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
    this._currentUserSubject.next(undefined);
  }
}
