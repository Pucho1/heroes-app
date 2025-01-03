import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../../envairoments/enviroments';
import { Hero } from '../interfaces/interfaces.hero';

@Injectable({providedIn: 'root'})
export class HeroesService {

  constructor(private http: HttpClient) { }

  private baseURL = environment.baseUrl;

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseURL}/heroes`).pipe(
      map((resp) => {
        return resp;
      }),
      catchError((err) => of([])));
  };



  getHeroeDetails(id: string): Observable<Hero|undefined> {
    return this.http.get<Hero>(`${this.baseURL}/heroes/${id}`).pipe(
      map((resp) => {
        return resp;
      }),
      catchError( err => of(undefined)));
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
      catchError( err => of([])));
  };

};
