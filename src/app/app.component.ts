import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 5 test area';
  firstname = 'Prajol';
  lastname = 'Shakya';
  user = {username: '',
          password: ''
        };


  onSubmit(theForm: NgForm) {
    console.log(theForm.value.username);
    console.log(theForm.value.password);
    this.user.username = theForm.value.username;
    this.user.password = theForm.value.password;
    console.log(this.user.password);
  }
}
