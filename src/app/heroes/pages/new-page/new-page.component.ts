import { Component } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/interfaces.hero';
import { FormControl, FormGroup } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.css'
})
export class NewPageComponent {

  public publishers = [
    {
      id: 'DC Comics',
      value: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      value: 'Marvel - Comics'
    }
  ];

  // public formNewHero: FormGroup = new FormGroup({
    public formNewHero = new FormGroup({
    id:         new FormControl<string>(''),
    alterEgo:   new FormControl<string>(''),
    superhero:  new FormControl<string>('', { nonNullable: false }),
    characters: new FormControl<string>(''),
    firstAppearance: new FormControl<string>(''),
    publisher:  new FormControl<Publisher>(Publisher.DCComics),
    alt_img:    new FormControl<string>(''),
  });

  constructor(
    private heroesService: HeroesService,
  ) { };

  get currentHero(): Hero {
    const hero: Hero = this.formNewHero.value as Hero;
    return hero;
  };

  /**
   * Method to save the hero
   */
  saveHero(): void {

    if (this.formNewHero.invalid) return;

    this.heroesService.addHeroes(this.currentHero);

    this.heroesService.updateHeroes(this.currentHero);
  };
}
