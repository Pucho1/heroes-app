import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Router, RouterStateSnapshot } from '@angular/router';
import { Route, UrlSegment } from '@angular/router';

import { Observable, tap } from 'rxjs';

import { AuthService } from '../services/auth.service';


/**
 * Si no existen datos de un useario autenticado devuelve falso y navega a login
 * @returns true o false
 */
  function CheckAuthStatus(): Observable<boolean> {
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);

    return authService.checkLoginValidity().pipe(
      tap((isAuthenticated) => {

        if (!isAuthenticated) {
          router.navigate(['/auth/login']);
        }

      })
    )
  }

  /**
   * Gestiona mediante una condicion si se puede acceder la ruta solicitada
   * se ejecuta despues del CanMatch y solo si este da true
   * @returns true o false
   */
  export const canActivateGuard: CanActivateFn = (  route: ActivatedRouteSnapshot,state: RouterStateSnapshot ) => {
    console.log('CanActivate');
    console.log({ route, state });

    return CheckAuthStatus();
  };

  /**
   * Gestiona si las rutas pueden conicidir o no
   * @returns true o false
   */
  export const canMatchGuard: CanMatchFn = ( route: Route,  segments: UrlSegment[] ) => {
    console.log('CanMatch');
    console.log({ route, segments });

    return true;
  };


