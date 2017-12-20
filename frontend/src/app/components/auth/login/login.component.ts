import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RegisterComponent } from '../register/register.component'

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(public dialog: MatDialog) {

  }
  ngOnInit() {
  }

  signup() : void {
    let dialogRef = this.dialog.open(RegisterComponent, {
      height: '400px',
      width: '600px',
    });
  }

}
