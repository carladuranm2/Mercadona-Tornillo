import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { loginUser } from 'src/app/models/loginUser';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router){

  }
  loginUser: loginUser = {
    email: "",
    password: ""
  }

  submit(){
    this.router.navigateByUrl('/tornillo');
  }
}
