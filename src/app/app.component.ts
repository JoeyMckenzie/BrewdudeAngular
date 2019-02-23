import { Component } from '@angular/core';
import {routerSlideTransition} from "./common/animations/router-slide-transition";
import {SecuredUser} from "./common/models/secured-user";
import {Router} from "@angular/router";
import {AuthenticationService} from "./common/services/authentication/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  // private _currentUser: SecuredUser;
  //
  // constructor(
  //   private router: Router,
  //   private authenticationService: AuthenticationService
  // ) {
  //   this.authenticationService.currentUser.subscribe(value => this._currentUser = value);
  // }
  //
  // get currentUser(): SecuredUser {
  //   return this._currentUser;
  // }
  //
  // public logout(): void {
  //   this.authenticationService.logout();
  //   this.router.navigateByUrl('/');
  // }

}
