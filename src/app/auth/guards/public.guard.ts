import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Router, RouterStateSnapshot } from '@angular/router';
import { Route, UrlSegment } from '@angular/router';

import { map, Observable, tap } from 'rxjs';

import { AuthService } from '../services/auth.service';


/**
 * Si no existen datos de un useario autenticado devuelve falso y navega a login
 * @returns true o false
 */
  function CheckAuthStatus(): Observable<boolean> {

    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);

    return authService.checkLoginValidity().pipe(
      tap(( isAuthenticated ) => {
        if( isAuthenticated ) {
          router.navigate(['./'])
        }
      }),
      map( isAuthenticated => !isAuthenticated)
    )
  }

  /**
   * Gestiona mediante una condicion si se puede acceder la ruta solicitada
   * se ejecuta despues del CanMatch y solo si este da true
   * @returns true o false
   */
  export const canActivateGuardPublic: CanActivateFn = (  route: ActivatedRouteSnapshot,state: RouterStateSnapshot ) => {
    return CheckAuthStatus();
  };

  /**
   * Gestiona si las rutas pueden conicidir o no
   * @returns true o false
   */
  export const canMatchGuardPublic: CanMatchFn = ( route: Route,  segments: UrlSegment[] ) => {;
    return true;
  };


