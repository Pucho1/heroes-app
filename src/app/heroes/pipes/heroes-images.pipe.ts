import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/interfaces.hero';

@Pipe({
  name: 'heroesImages',
})
export class HeroesImagesPipe implements PipeTransform {

  transform(hero: Hero): string {
    if (!hero.id && !hero.alt_img) {
      return 'assets/no-image.png';
    } else if (hero.alt_img) {
      return hero.alt_img;
    } else {
      return `assets/heroes/${hero.id}.jpg`;
    }
  }

}
