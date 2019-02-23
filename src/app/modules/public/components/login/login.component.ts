import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SecuredUser} from "../../../../common/models/secured-user";
import {UserLogin} from "../../../../common/models/user-login";
import {MatBottomSheet, MatDialog} from "@angular/material";
import {LoginErrorComponent} from "../login-error/login-error.component";
import {first} from "rxjs/operators";
import {InProgressComponent} from "../in-progress/in-progress.component";
import {AuthenticationService} from "../../../../common/services/authentication/authentication.service";
import {ErrorMessageHelper} from "../../../../common/helpers/error-message-helper";
import {BottomSheetRefErrorComponent} from "../bottom-sheet-ref-error/bottom-sheet-ref-error.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // animations: [routerSlideTransition('right')],
  // host: {'[@routerSlideTransition]': ''}
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loginInvalid: boolean;
  public submitted: boolean;
  public hidePassword: boolean = true;
  public currentUser: SecuredUser;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private bottomSheet: MatBottomSheet,
    private authenticationService: AuthenticationService,
    private dialog: MatDialog,
  ) {
    this.authenticationService.currentUser.subscribe(value => this.currentUser = value);
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      // password: ['', [Validators.required, Validators.pattern(PasswordService.PasswordRegex)]]
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  public async submitUserLogin() {
    this.openInProgressDialog("Scanning for fakes...");
    this.submitted = true;

    if (this.loginForm.invalid) {
      this.loginInvalid = true;
      return;
    }

    let userLogin: UserLogin = {
      username: this.f.username.value,
      password: this.f.password.value,
    };

    await this.authenticationService.loginUser(userLogin)
      .pipe(first())
      .subscribe(
        data => {
          this.dialog.closeAll();
          console.log("Login successful for user " + this.currentUser.username);
          this.router.navigateByUrl('/').then(value => {
            console.log('routing to home');
          });
        },
        error => {
          this.dialog.closeAll();
          const errorResponse: string = ErrorMessageHelper.getErrorMessageResponse(error.error);
          this.bottomSheet.open(BottomSheetRefErrorComponent, {
            data: errorResponse
          });
        }
      );
  }

  private openInProgressDialog(message: string): void {
    this.dialog.open(InProgressComponent, {
      width: '250px',
      data: message
    });
  }

  public toggleHidePassword(): void {
    this.hidePassword = !this.hidePassword;
  }

  public onCancel(): void {
    this.router.navigateByUrl("/");
  }

  public testLoginError(): void {
    this.bottomSheet.open(LoginErrorComponent);
  }
}
