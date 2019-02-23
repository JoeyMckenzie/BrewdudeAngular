import { NgModule } from '@angular/core';
import {
  MatBottomSheetModule,
  MatButtonModule, MatButtonToggleModule,
  MatCardModule, MatDialogModule,
  MatFormFieldModule, MatGridListModule, MatIconModule,
  MatInputModule,
  MatListModule,
  MatOptionModule, MatProgressSpinnerModule,
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
    MatDialogModule,
    MatBottomSheetModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule
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
    MatDialogModule,
    MatBottomSheetModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule
  ]
})
export class MaterialModule { }
