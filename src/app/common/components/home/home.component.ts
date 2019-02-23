import { Component, OnInit } from '@angular/core';
import {SecuredUser} from "../../models/secured-user";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _currentUser: SecuredUser;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(value => this._currentUser = value);
  }

  get currentUser(): SecuredUser {
    return this._currentUser;
  }

  ngOnInit() {
  }

}
