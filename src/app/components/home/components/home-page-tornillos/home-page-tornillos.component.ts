import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-home-page-tornillos',
  templateUrl: './home-page-tornillos.component.html',
  styleUrls: ['./home-page-tornillos.component.scss']
})
export class HomePageTornillosComponent {
constructor(private router: Router){

}
  goToLogin(){
    this.router.navigate(['/login']);
  }
}
