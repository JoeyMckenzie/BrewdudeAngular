import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { MaterialModule } from "../material.module";
import { RegisterComponent } from './components/register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { LoginComponent } from './components/login/login.component';
import { RegistrationSuccessComponent } from './components/registration-success/registration-success.component';
import { RegistrationErrorComponent } from './components/registration-error/registration-error.component';
import { LoginErrorComponent } from './components/login-error/login-error.component';
import { InProgressComponent } from './components/in-progress/in-progress.component';
import { BottomSheetRefErrorComponent } from './components/bottom-sheet-ref-error/bottom-sheet-ref-error.component';

@NgModule({
  declarations: [
    PublicComponent,
    RegisterComponent,
    LoginComponent,
    RegistrationSuccessComponent,
    RegistrationErrorComponent,
    LoginErrorComponent,
    InProgressComponent,
    BottomSheetRefErrorComponent
  ],
  entryComponents: [
    RegistrationSuccessComponent,
    RegistrationErrorComponent,
    LoginErrorComponent,
    InProgressComponent,
    BottomSheetRefErrorComponent
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
  ]
})
export class PublicModule { }
