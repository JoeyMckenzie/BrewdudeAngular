import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SecuredUser } from "../../models/secured-user";
import { UserLogin } from "../../models/user-login";
import { User } from "../../models/user";

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
export class UserService {

  private currentUserSubject: BehaviorSubject<SecuredUser>;
  public currentUser: Observable<SecuredUser>;

  constructor(private http: HttpClient) {
    console.log('test');
    this.currentUserSubject = new BehaviorSubject<SecuredUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    console.log(this.currentUserSubject);
    console.log(this.currentUser);
  }

  get currentUserValue(): SecuredUser {
    return this.currentUserSubject.value;
  }

  public registerUser(user: User): Observable<SecuredUser> {
    return this.http.post<SecuredUser>(REGISTER_BASE_URL, user, httpOptions);
  }

  public loginUser(userLogin: UserLogin): Observable<SecuredUser> {
    return this.http.post<SecuredUser>(LOGIN_BASE_URL, userLogin, httpOptions)
      .pipe(
        map(user => {
          if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
          }

          return user;
        })
      );
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(undefined);
  }
}
