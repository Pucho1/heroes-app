import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Hero } from '../../interfaces/interfaces.hero';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent implements OnInit {

  public heroes: Hero[] = [];

  public selectedHeroe?: Hero;

  public searchControl = new FormControl<string>('');

  constructor( private heroeService: HeroesService ) {};


  optionSelected( event: MatAutocompleteSelectedEvent ): void {
    if( !event.option.value ) {
      this.selectedHeroe = undefined;
      return;
    }
    const hero: Hero = event.option.value;

    this.searchControl.setValue(hero.superhero);
    this.selectedHeroe = hero;
  };

  search(): void {
    if ( this.searchControl.value === '')  {return };

    const query: string = this.searchControl.value || '';

    this.heroeService.searchHeroes(query)
      .subscribe(heroes => {
        this.heroes = heroes
      });
  };

  ngOnInit(): void {
    this.searchControl.valueChanges.subscribe(() => this.search());
  };
};
