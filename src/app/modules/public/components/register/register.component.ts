import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from "@angular/router";
import { SecuredUser } from "../../../../common/models/secured-user";
import { User } from "../../../../common/models/user";
import { Role } from "../../../../common/models/role";
import { ConfigurationService } from "../../../../common/services/configuration/configuration.service";
import { AuthenticationService } from "../../../../common/services/authentication/authentication.service";
import { ErrorMessageHelper } from "../../../../common/helpers/error-message-helper";
import { CustomValidatorService } from "../../../../common/services/custom-validator/custom-validator.service";
import { PublicConstants } from "../../../../common/constants/public.constants";
import { MessageService } from "../../../../common/services/message/message.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  // animations: [routerSlideTransition('left')],
  // host: {'[@routerSlideTransition]': ''}
})
export class RegisterComponent implements OnInit {

  /** Public Members **/
  public registrationForm: FormGroup;
  public registrationInvalid: boolean = false;
  public registrationError: boolean;
  public submitted: boolean = false;
  public hidePassword: boolean = true;
  public passwordConfirmation: string = "";
  public user: User;
  public securedUser: SecuredUser;

  /** Private Members **/
  private _error: Error;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private configurationService: ConfigurationService,
    private customValidatorService: CustomValidatorService,
    private messageService: MessageService
  ) { }

  /** Event Handlers **/
  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(PublicConstants.passwordRegex)]],
      passwordConfirmation: ['', Validators.required]
    }, {
      validator: this.customValidatorService.MustMatch('password', 'passwordConfirmation')
    });
  }

  /** Convenience getter for registration form controls **/
  get formControls() {
    return this.registrationForm.controls;
  }

  /** Private Methods **/
  private resetForm(): void {
    this.formControls['username'].reset();
    this.formControls['password'].reset();
    this.formControls['passwordConfirmation'].reset();
  }

  /** Public Methods **/
  public async submitUserRegistration() {
    this.messageService.openInProgressDialogMessage(PublicConstants.registrationInProgress);
    this.submitted = true;
    this.registrationError = false;

    if (this.registrationForm.invalid) {
      this.registrationInvalid = true;
      return;
    }

    let newUser: User = {
      firstName: this.formControls.firstName.value,
      lastName: this.formControls.lastName.value,
      email: this.formControls.email.value,
      username: this.formControls.username.value,
      password: this.formControls.password.value,
      role: Role.User
    };

    await this.authenticationService.registerUser(newUser)
      .subscribe(
        data => {
          this.securedUser = data;
          this.messageService.closeOpenMessages();
          this.messageService.openSuccessfulRegistrationDialogMessage(this.securedUser.username);
          this.router.navigateByUrl('/home');
        },
        error => {
          this.messageService.closeOpenMessages();
          this._error = error;
          const errorMessage: string = ErrorMessageHelper.getErrorMessageResponse(this._error.message);

          this.messageService.openErrorMessage(errorMessage);
        }
      );
  }

  public onCancel(): void {
    this.router.navigateByUrl("/");
  }

  public toggleHidePassword(): void {
    this.hidePassword = !this.hidePassword;
  }

  public testRegistrationError(): void {
    if (this.registrationError) {
      if (this.registrationError === true) {
        this.registrationError = false;
      }
    }
    this.registrationError = true;
    this.registrationForm.reset();
    this.messageService.openErrorMessage(PublicConstants.registrationSystemError);
  }

  public openInProgressDialog() {
    this.messageService.openInProgressDialogMessage(PublicConstants.registrationInProgress);
  }
}
