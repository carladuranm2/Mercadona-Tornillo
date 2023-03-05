import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAccessGuard } from './guards/no-access.guard';
import {LoginModule} from './components/auth/login/login.module'

const routes: Routes = [
  {path:'',loadChildren:()=>import('./components/home/home.module').then(m=> m.HomeModule),data:{Animation:'left'}},
  { path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule), data: {animation: 'fadeIn'}},
  {path:'tornillo',loadChildren:()=>import('./components/tornillo/tornillo.module').then(m=> m.TornilloModule),data:{Animation:'left'}, canActivate:[NoAccessGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
