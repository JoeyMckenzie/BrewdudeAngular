import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PasswordService} from "../../../../common/services/password/password.service";
import {Router} from "@angular/router";
import {UserService} from "../../../../common/services/user/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loginInvalid: boolean;
  public submitted: boolean;
  public hidePassword: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(PasswordService.PasswordRegex)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  public async submitUserLogin() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      this.loginInvalid = true;
      return;
    }
  }

  public toggleHidePassword(): void {
    this.hidePassword = !this.hidePassword;
  }

  public onCancel(): void {
    this.router.navigateByUrl("/");
  }

}
