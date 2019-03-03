import {Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {SecuredUser} from "../../../../common/models/secured-user";

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.scss']
})
export class InProgressComponent {

  private readonly _message: string;

  constructor(
    public dialogRef: MatDialogRef<InProgressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {
    this._message = data;
  }

  get message(): string {
    return this._message;
  }
}
