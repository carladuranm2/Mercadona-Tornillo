import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TornilloComponent } from './tornillo.component';

const routes: Routes = [
  { path: '', component: TornilloComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TornilloRoutingModule { }
