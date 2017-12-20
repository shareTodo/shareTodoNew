import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component';

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  entryComponents:[ LoginComponent ]
})
export class RegisterComponent implements OnInit {

  ngOnInit() {
  }

}
