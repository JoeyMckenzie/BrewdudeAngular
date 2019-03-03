import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { MaterialModule } from "../material.module";
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { LoginComponent } from './components/login/login.component';
import { RegistrationSuccessComponent } from "../../common/components/messages/registration-success/registration-success.component";
import { InProgressComponent } from "../../common/components/messages/in-progress/in-progress.component";

@NgModule({
  declarations: [
    PublicComponent,
    RegisterComponent,
    LoginComponent,
  ],
  entryComponents: [
    RegistrationSuccessComponent,
    InProgressComponent,
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
