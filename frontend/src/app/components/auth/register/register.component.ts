import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmedPassword: new FormControl('', [Validators.required, identicalPasswordValidator(this.registerForm.get('confirmedPassword').value)]),
    gender: new FormControl('', [Validators.required]),
    isPublic: new FormControl()
  });

  ngOnInit() {
    console.log(this.registerForm.get('confirmedPassword').value)
  }

}

/** Confirmed password should the same as the original one */
function identicalPasswordValidator(password: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const isIdentical = control.value === password;
    return isIdentical? null : {"IdenticalPassword": "password should be the same"};
  };
}
