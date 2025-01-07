import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../../envairoments/enviroments';
import { Hero } from '../interfaces/interfaces.hero';

@Injectable({providedIn: 'root'})
export class HeroesService {

  constructor(private http: HttpClient) { }

  private baseURL = environment.baseUrl;

/**
 * Obtengo todos los heroes disponibles.
 * @returns Listado de heroes o un arry vacio si hubiese un error.
 */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseURL}/heroes`).pipe(
      map((resp) => {
        return resp;
      }),
      catchError(
        () => of([])
      ));
  };



  getHeroeDetails(id: string): Observable<Hero|undefined> {
    return this.http.get<Hero>(`${this.baseURL}/heroes/${id}`).pipe(
      map((resp) => {
        return resp;
      }),
      catchError(
        err => of(undefined)
      ));
  };


  searchHeroes(query: string ): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseURL}/heroes`,
    {params: {
      q: query,
      _limit: '6'
    }}
    ).pipe(
      map((resp) => {
        return resp;
      }),
      catchError(
        err => of([])
      ));
  };


  /**
   * Agrego un heroe.
   * @returns Heroe o un arry vacio si hubiese un error.
   */
  addHeroes(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.baseURL}/heroes`, hero).pipe(
      map((resp) => {
        return resp;
      }),
      catchError(
        () => of()
      )
    );
  };

  /**
   * Actualizo un heroe.
   * @returns Heroe con los datos actualizado.
   */
  updateHeroes(hero: Hero): Observable<Hero> {

    if (!hero.id) { throw new Error('El id del heroe es requerido'); }

    return this.http.patch<Hero>(`${this.baseURL}/heroes/${hero.id}`, hero).pipe(
      map((resp) => {
        return resp;
      }),
      catchError(
        () => of()
      )
    );
  };


  /**
   * Elimina un heroe.
   * @returns Boleano en funcion del resultado de la operacion.
   */
  deleteHeroes(id: string): Observable<boolean> {

    return this.http.delete<boolean>(`${this.baseURL}/heroes/${id}`).pipe(
      catchError((resp) => of(false)),
      map((resp) => true),
    )
  };
};
