import { Component } from '@angular/core';
import {MatBottomSheetRef} from "@angular/material";

@Component({
  selector: 'app-registration-error',
  templateUrl: './registration-error.component.html',
  styleUrls: ['./registration-error.component.scss']
})
export class RegistrationErrorComponent {

  constructor(
    private bottomSnackbar: MatBottomSheetRef<RegistrationErrorComponent>
  ) { }

  public closeSnackbar(): void {
    this.bottomSnackbar.dismiss();
  }

}
