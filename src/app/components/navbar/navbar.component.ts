import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  status: boolean;
  lastname = 'namakusi';

  constructor() {
    console.log('navbar constructor started');
    this.getUserStatus();

  }

  getUserStatus() {
    // make api call for db dall to set the value
    this.status = true;
  }

  clickButton() {
    alert('say hello');
  }

}
