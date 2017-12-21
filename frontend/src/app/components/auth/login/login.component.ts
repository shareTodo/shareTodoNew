import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, AbstractControl, ValidatorFn } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RegisterComponent } from '../register/register.component';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  signup() : void {
    let dialogRef = this.dialog.open(RegisterComponent, {
      disableClose: true,
      height: '460px',
      width: '550px',
    });
  }

}

import {  } from '@angular/forms';
/** Confirmed password should the same as the original one */
export function identicalPasswordValidator(password: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const isIdentical = control.value === password;
    return isIdentical? null : {"IdenticalPassword": "password should be the same"};
  };
}
