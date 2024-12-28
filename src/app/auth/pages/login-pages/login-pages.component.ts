import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'auth-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrl: './login-pages.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPagesComponent { }
