import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SecuredUser} from "../../models/secured-user";
import {AuthenticationService} from "../../services/authentication/authentication.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private _currentUser: SecuredUser;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(value => this._currentUser = value);
  }

  ngOnInit() {
  }

  get currentUser(): SecuredUser {
    return this._currentUser;
  }

  public logout(): void {
    this.authenticationService.logout();
    this.router.navigateByUrl('/');
  }

  public getCurrentUser(): SecuredUser {
    return this._currentUser;
  }

}
