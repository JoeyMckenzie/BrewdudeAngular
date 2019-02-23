import {Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {SecuredUser} from "../../../../common/models/secured-user";

@Component({
  selector: 'app-registration-success',
  templateUrl: './registration-success.component.html',
  styleUrls: ['./registration-success.component.scss']
})
export class RegistrationSuccessComponent {

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<RegistrationSuccessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SecuredUser
  ) { }

  public routeToHome(): void {
    this.dialogRef.close();
    this.router.navigateByUrl('/');
  }

  public routeToBeers(): void {
    this.dialogRef.close();
    this.router.navigateByUrl('/secure/beers');
  }

  public routeToBreweries(): void {
    this.dialogRef.close();
    this.router.navigateByUrl('/');
  }

}
