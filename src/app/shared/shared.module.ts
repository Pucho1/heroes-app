import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';



@NgModule({
  declarations: [
    Error404PageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ],
  exports: [
    Error404PageComponent
  ]
})
export class SharedModule { }
