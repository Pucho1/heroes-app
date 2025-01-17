import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map, Observable, of, tap } from 'rxjs';

import { User } from '../interfaces/user.interfaces';
import { environment } from '../../../envairoments/enviroments';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _user?: User;

  constructor( private http: HttpClient ) { };

  login( password: string, email: string ): Observable<boolean> {

    // return this.http.post<boolean>(`${this.baseUrl}/user`, {password, email}).pipe(

    return this.http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap( (dataUser: User) =>  localStorage.setItem('token', dataUser.id.toString())),
        tap( (dataUser: User) =>  this._user = dataUser),
        map( (dataUser: User) => dataUser.id ? true : false )
      );
  };

  logout(): void {
    this._user = undefined;
    localStorage.clear();
  };

  /**
   * Comprueba si tengo algun usuario auteticdo revisando el localStore
   * Si hubieran un token almacenado se vuelve a pedir los datos al back
   * @returns true o false
   */
  checkLoginValidity(): Observable<boolean> {

    if( !localStorage.getItem('token') ) { return of(false) };

    const token = localStorage.getItem('token');

    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
      tap( (dataUser: User) => this._user = dataUser  ),
      map( (dataUser: User) =>  !!dataUser ),
      catchError( error => of(false))
    );
  };

  get user(): User|undefined {
    if( !this._user ) return undefined;

    return structuredClone(this._user);
  };

};
