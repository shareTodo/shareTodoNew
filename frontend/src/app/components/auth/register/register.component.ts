import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, AbstractControl, ValidatorFn, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitting: boolean;

  constructor(private fb: FormBuilder, private http:HttpClient) {}

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
    this.submitting = false;
  }

  /** Confirmed password should the same as the original one */
  areEqual(group: FormGroup) {
    var isValid = group.value["password"] === group.value["confirmedPassword"];
    return isValid? null: {"areEqual": "password should be the same"};
  }

  signup(signupForm) {
    this.submitting = true;
    this.registerForm.disable();
    let formInfo = signupForm.value;
    let signupInfo = {"email": formInfo.email,
                      "username": formInfo.username,
                      "password": formInfo.passwords.password,
                      "gender": formInfo.gender,
                      "isPublic": formInfo.isPublic === true};

    this.http.post('api/user', signupInfo).subscribe(
      data => {
        console.log(data);
        this.registerForm.enable();
      },
      err => {
        console.log(err);
    });
  }

}
