import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {FooterComponent} from './footer/footer.component'
import {LoadingProgressComponent} from './loading-progress/loading-progress.component'



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoadingProgressComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    LoadingProgressComponent
  ]
})
export class SharedModule { }
