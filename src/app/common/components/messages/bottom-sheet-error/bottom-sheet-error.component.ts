import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material";

@Component({
  selector: 'app-bottom-sheet-error',
  templateUrl: './bottom-sheet-error.component.html',
  styleUrls: ['./bottom-sheet-error.component.scss']
})
export class BottomSheetErrorComponent {

  constructor(
    private bottomSheetRef: MatBottomSheetRef<BottomSheetErrorComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: string
  ) { }

  public closeSnackbar(): void {
    this.bottomSheetRef.dismiss();
  }

}
