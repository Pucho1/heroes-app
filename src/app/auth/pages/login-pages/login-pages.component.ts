import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'auth-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrl: './login-pages.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPagesComponent {


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  login(): void {
    this.authService.login( 'password', 'email' ).subscribe(
      (res: boolean) => {
        if( !res ){
          console.log('Error login');
          return
        }

        this.router.navigate(['/']);

      }
    );
  }
}
