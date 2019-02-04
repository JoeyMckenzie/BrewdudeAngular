import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from "@angular/router";
import { ConfigurationService } from "../../../../common/services/configuration/configuration.service";
import { PasswordService } from "../../../../common/services/password/password.service";
import { SecuredUser } from "../../../../common/models/secured-user";
import { User } from "../../../../common/models/user";
import { UserService } from "../../../../common/services/user/user.service";
import { CustomValidators } from "../../../../common/helpers/custom-validators";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  // User fields
  public registrationForm: FormGroup;
  public formReady: boolean = false;
  public registrationInvalid: boolean = false;
  public submitted: boolean = false;
  public hidePassword: boolean = true;
  public passwordConfirmation: string = "";

  public user: User;
  public securedUser: SecuredUser;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private configurationService: ConfigurationService
  ) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(PasswordService.PasswordRegex)]],
      passwordConfirmation: ['', Validators.required]
    }, {
      validator: CustomValidators.MustMatch('password', 'passwordConfirmation')
    });
  }

  get f() {
    return this.registrationForm.controls;
  }

  public async submitUserRegistration() {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      this.registrationInvalid = true;
      return;
    }

    await this.userService.registerUser(this.user)
      .subscribe(
        data => {
          this.securedUser = data;
          localStorage.setItem('currentUser', this.securedUser.token);
          this.router.navigateByUrl('/home').then(value => {
            console.log('routing to home');
          })
        },
        error => {
          this.registrationInvalid = true
        }
      );
  }

  public onCancel(): void {
    this.router.navigateByUrl("/");
  }

  public toggleHidePassword(): void {
    this.hidePassword = !this.hidePassword;
  }
}
