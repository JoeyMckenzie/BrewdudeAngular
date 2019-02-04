import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, MatGridListModule, MatIconModule,
  MatInputModule,
  MatListModule,
  MatOptionModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule
} from "@angular/material";

@NgModule({
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatOptionModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    MatGridListModule,
  ],
  exports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatOptionModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    MatGridListModule,
  ]
})
export class MaterialModule { }
