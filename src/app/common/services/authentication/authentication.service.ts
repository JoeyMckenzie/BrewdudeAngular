import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient , HttpHeaders} from "@angular/common/http";
import { SecuredUser } from "../../models/secured-user";
import { User } from "../../models/user";
import { UserLogin } from "../../models/user-login";
import { ConfigurationService } from "../configuration/configuration.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  /** Private Members **/
  private _currentUserSubject: BehaviorSubject<SecuredUser>;
  private readonly _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  /** Public Members **/
  public currentUser: Observable<SecuredUser>;

  constructor(
    private http: HttpClient,
    private configurationService: ConfigurationService
  ) {
    console.log(this.configurationService);
    this._currentUserSubject = new BehaviorSubject<SecuredUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this._currentUserSubject.asObservable();
  }

  /** Public Methods **/
  get currentUserSubject(): SecuredUser {
    return this._currentUserSubject.value;
  }

  set currentUserSubject(securedUser: SecuredUser) {
    this._currentUserSubject.next(securedUser);
  }

  get httpOptions(): {} {
    return this._httpOptions;
  }

  public registerUser(user: User): Observable<SecuredUser> {
    const baseUrl: string = this.configurationService.configuration.baseUrl;
    const registerEndpoint: string = baseUrl + this.configurationService.configuration.endpoints.register;
    return this.http.post<SecuredUser>(registerEndpoint, user, this.httpOptions)
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
    const baseUrl: string = this.configurationService.configuration.baseUrl;
    const loginEndpoint: string = baseUrl + this.configurationService.configuration.endpoints.login;
    return this.http.post<SecuredUser>(loginEndpoint, userLogin, this.httpOptions)
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
    this.currentUserSubject = undefined;
  }
}
