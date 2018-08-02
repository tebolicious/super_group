import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from './user.service';
import { AppComponent } from '../app.component';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  user: User = new User();

  constructor(private router: Router, private userService: UserService, private appComponent: AppComponent) {

  }

  loginNow(): void {
    this.userService.loginNow(this.user)
        .subscribe( data => {
          if(data != null){
          this.appComponent.loginTitle = 'logout';
          alert("Logged in successfully.");
          this.router.navigate(['/videos']);
          }else{
          this.appComponent.loginTitle = 'login';
          alert("Incorrent username or password.");
          }
        });

  };
  logoutNow(): void {
  this.appComponent.loginTitle = 'login';
  };

}
