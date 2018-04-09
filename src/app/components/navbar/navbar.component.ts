import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  status: boolean;
  firstname = 'prajol';
  lastname = 'namakusi';
  posts: object[];

  constructor() {
    console.log('navbar constructor started');
    this.getUserStatus();
    this.posts = [
      {title : 'post 1'},
      {title : 'post 2'},
      {title : 'post 3'},
      {title : 'post 4'},
      {title : 'post 5'}
    ];
  }

  getUserStatus() {
    // make api call for db dall to set the value
    this.status = true;
  }

  clickButton() {
    alert('say hello');
  }

}
