import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPagesComponent,
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
