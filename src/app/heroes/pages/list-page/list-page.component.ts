import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { Hero } from '../../../interfaces/interfaces.hero';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit{

  constructor( private heroeService: HeroesService ) { };

  heroes: Hero[] = [];

  ngOnInit(): void {
    this.heroeService.getHeroes()
      .subscribe(heroes => { this.heroes = heroes});
  };
};
