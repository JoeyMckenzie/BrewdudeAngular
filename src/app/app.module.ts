import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./modules/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { PublicModule } from "./modules/public/public.module";
import { HttpClientModule } from "@angular/common/http";
import { SecureModule } from "./modules/secure/secure.module";
import { NavbarComponent } from "./common/components/navbar/navbar.component";
import { HomeComponent } from "./common/components/home/home.component";
import { FooterComponent } from "./common/components/footer/footer.component";
import { AuthenticationService } from "./common/services/authentication/authentication.service";
import { ConfigurationService } from "./common/services/configuration/configuration.service";
import { AuthGuardService } from "./common/services/auth-guard/auth-guard.service";
import { BottomSheetErrorComponent } from "./common/components/messages/bottom-sheet-error/bottom-sheet-error.component";
import { DialogComponent } from "./common/components/messages/dialog/dialog.component";
import {MessageService} from "./common/services/message/message.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    BottomSheetErrorComponent,
    DialogComponent,
  ],
  entryComponents: [
    BottomSheetErrorComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    PublicModule,
    SecureModule,
    HttpClientModule
  ],
  providers: [
    AuthGuardService,
    AuthenticationService,
    ConfigurationService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
