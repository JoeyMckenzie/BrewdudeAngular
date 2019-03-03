import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SecuredUser } from "../../../../common/models/secured-user";
import { UserLogin } from "../../../../common/models/user-login";
import { first } from "rxjs/operators";
import { AuthenticationService } from "../../../../common/services/authentication/authentication.service";
import { MessageService } from "../../../../common/services/message/message.service";
import { ErrorMessageHelper } from "../../../../common/helpers/error-message-helper";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // animations: [routerSlideTransition('right')],
  // host: {'[@routerSlideTransition]': ''}
})
export class LoginComponent implements OnInit {

  /** Public Members **/
  public loginForm: FormGroup;
  public loginInvalid: boolean;
  public submitted: boolean;
  public hidePassword: boolean = true;
  public currentUser: SecuredUser;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private messageService: MessageService
  ) {
    this.authenticationService.currentUser.subscribe(value => this.currentUser = value);
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /** Convenience getter for form controls **/
  get formControls() {
    return this.loginForm.controls;
  }

  public async submitUserLogin() {
    this.messageService.openInProgressDialogMessage("Scanning for fakes...");
    this.submitted = true;

    if (this.loginForm.invalid) {
      this.loginInvalid = true;
      return;
    }

    let userLogin: UserLogin = {
      username: this.formControls.username.value,
      password: this.formControls.password.value,
    };

    await this.authenticationService.loginUser(userLogin)
      .pipe(first())
      .subscribe(
        data => {
          this.messageService.closeOpenMessages();
          this.router.navigateByUrl('/');
        },
        error => {
          this.messageService.closeOpenMessages();
          const errorMessage: string = ErrorMessageHelper.getErrorMessageResponse(error.error);
          this.messageService.openErrorMessage(errorMessage);
        }
      );
  }

  public toggleHidePassword(): void {
    this.hidePassword = !this.hidePassword;
  }

  public onCancel(): void {
    this.router.navigateByUrl("/");
  }

  public testLoginError(): void {
    this.messageService.openErrorMessage("... looks like something unexpected happened, try logging in again.");
  }
}
