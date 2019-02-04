import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { MaterialModule } from "../material.module";
import { RegisterComponent } from './components/register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { LoginComponent } from './components/login/login.component';
import {UserService} from "../../common/services/user/user.service";

@NgModule({
  declarations: [
    PublicComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserService
  ]
})
export class PublicModule { }
