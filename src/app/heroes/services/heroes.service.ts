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
};
