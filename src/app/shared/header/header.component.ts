import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  encapsulation:ViewEncapsulation.None,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input () inicioSesion: boolean = false;
  @Input () cerrarSesion: boolean = false;
  constructor(private router: Router){

  }

  navigateLogin(){
    this.router.navigateByUrl('/login');
  }

  logOut(){
    this.router.navigateByUrl('/');
  }
  backToHomePage(){
    this.router.navigateByUrl('/');
  }
}
