import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from "@angular/router";
import { PasswordService } from "../../../../common/services/password/password.service";
import { SecuredUser } from "../../../../common/models/secured-user";
import { User } from "../../../../common/models/user";
import { CustomValidators } from "../../../../common/helpers/custom-validators";
import {MatBottomSheet, MatDialog} from "@angular/material";
import {RegistrationSuccessComponent} from "../registration-success/registration-success.component";
import {RegistrationErrorComponent} from "../registration-error/registration-error.component";
import {Role} from "../../../../common/models/role";
import {InProgressComponent} from "../in-progress/in-progress.component";
import {ConfigurationService} from "../../../../common/services/configuration/configuration.service";
import {AuthenticationService} from "../../../../common/services/authentication/authentication.service";
import {ErrorMessageHelper} from "../../../../common/helpers/error-message-helper";
import {BottomSheetRefErrorComponent} from "../bottom-sheet-ref-error/bottom-sheet-ref-error.component";
import {routerSlideTransition} from "../../../../common/animations/router-slide-transition";
import {CustomValidatorService} from "../../../../common/services/custom-validator/custom-validator.service";
import {PublicConstants} from "../../../../common/constants/public.constants";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  // animations: [routerSlideTransition('left')],
  // host: {'[@routerSlideTransition]': ''}
})
export class RegisterComponent implements OnInit {


  // User fields
  public registrationForm: FormGroup;
  public formReady: boolean = false;
  public registrationInvalid: boolean = false;
  public registrationError: boolean;
  public submitted: boolean = false;
  public hidePassword: boolean = true;
  public passwordConfirmation: string = "";
  public registrationInProgress: boolean = false;

  public user: User;
  public securedUser: SecuredUser;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private configurationService: ConfigurationService,
    private customValidatorService: CustomValidatorService,
    private dialog: MatDialog,
    private bottomSheet: MatBottomSheet,
  ) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(PublicConstants.PASSWORD_REGEX)]],
      passwordConfirmation: ['', Validators.required]
    }, {
      validator: this.customValidatorService.MustMatch('password', 'passwordConfirmation')
    });
  }

  get f() {
    return this.registrationForm.controls;
  }

  public async submitUserRegistration() {
    this.openInProgressDialog("Checking with the bartenders...");
    this.submitted = true;
    this.registrationError = false;

    if (this.registrationForm.invalid) {
      this.registrationInvalid = true;
      return;
    }

    let newUser: User = {
      firstName: this.f.firstName.value,
      lastName: this.f.lastName.value,
      email: this.f.email.value,
      username: this.f.username.value,
      password: this.f.password.value,
      role: Role.User
    };

    await this.authenticationService.registerUser(newUser)
      .subscribe(
        data => {
          this.securedUser = data;
          this.dialog.closeAll();
          this.openDialog(this.securedUser.username);
          this.router.navigateByUrl('/home').then(value => {
            console.log('routing to home');
          })
        },
        error => {
          const errorMessage: string = ErrorMessageHelper.getErrorMessageResponse(error.error);
          this.registrationForm.reset();
          this.bottomSheet.open(BottomSheetRefErrorComponent, {
            data: errorMessage
          });
        }
      );
  }

  public openDialog(username: string): void {
    console.log(username);
    this.dialog.open(RegistrationSuccessComponent, {
      width: '250px',
      data: {
        username: username
      }
    });
  }

  private openInProgressDialog(message: string): void {
    this.dialog.open(InProgressComponent, {
      width: '250px',
      data: message
    });
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
    this.bottomSheet.open(RegistrationErrorComponent);
  }
}
