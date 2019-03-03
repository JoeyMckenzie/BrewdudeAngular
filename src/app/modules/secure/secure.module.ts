import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { BeersComponent } from './components/beers/beers.component';
import { SecureRoutingModule } from "./secure-routing.module";

@NgModule({
  declarations: [
    SecureComponent,
    BeersComponent
  ],
  imports: [
    CommonModule,
    SecureRoutingModule
  ]
})
export class SecureModule { }
