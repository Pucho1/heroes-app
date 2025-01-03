import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../interfaces/interfaces.hero';

@Component({
  selector: 'heroes-heroe-card',
  templateUrl: 'card-heroe.component.html'
})

export class HeroCardComponent implements OnInit {
  constructor() { }

  @Input()
  public hero!: Hero;

  ngOnInit() {
    if(!this.hero)throw new Error('Hero is required');
  }
}
