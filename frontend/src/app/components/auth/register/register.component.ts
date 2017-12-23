import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, AbstractControl, ValidatorFn, FormBuilder } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      username:['', Validators.required],
      passwords: this.fb.group({
        password: ['', Validators.required],
        confirmedPassword: ['', Validators.required]},
        {validator: this.areEqual}),
      gender: ['', Validators.required],
      isPublic: ''
    });
  }

  /** Confirmed password should the same as the original one */
  areEqual(group: FormGroup) {
    var isValid = group.value["password"] === group.value["confirmedPassword"];
    return isValid? null: {"areEqual": "password should be the same"};
  }

}
