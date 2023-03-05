import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { loginUser } from 'src/app/models/loginUser';
import Swal from 'sweetalert2';


@Component({
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) {

  }
  loginUser: loginUser = {
    email: "mercadona@gmail.com",
    password: "mercadona"
  }

  submit () {
    if (this.loginUser.email ===  "mercadona@gmail.com" && this.loginUser.password ==="mercadona") {
      const token = "11111"
      localStorage.setItem('token', token);
      this.router.navigateByUrl('/tornillo');
    }else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las credenciales son incorrectas, intentalo de nuevo!',
      })
      this.router.navigateByUrl('/');

    }

  }
}
