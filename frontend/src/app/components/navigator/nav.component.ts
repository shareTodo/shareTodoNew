import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'nav-main',
    templateUrl: 'nav.component.html',
    styleUrls: ['./nav.component.css']
})

export class NavComponent {
  signedIn: boolean;

  constructor() {
    this.signedIn = false;
  }
}
