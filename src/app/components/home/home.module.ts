import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { HomePageTornillosComponent } from './components/home-page-tornillos/home-page-tornillos.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HomeComponent,
    HomePageTornillosComponent,
  ],
  imports: [
    HomeRoutingModule,
    SharedModule,
    MatIconModule,

  ]
})
export class HomeModule { }
