import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from '../heroes/pages/layout-page/layout-page.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginPagesComponent},
      {path: '**', redirectTo: 'login' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
