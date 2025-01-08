import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { filter, switchMap } from 'rxjs';

import { Hero, Publisher } from '../../interfaces/interfaces.hero';
import { HeroesService } from '../../services/heroes.service';
import { ConfirmDialogComponent } from '../../components/confirmDialog/confirmDialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.css'
})
export class NewPageComponent implements OnInit {

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
    alter_ego:   new FormControl<string>(''),
    superhero:  new FormControl<string>('', { nonNullable: false }),
    characters: new FormControl<string>(''),
    first_appearance: new FormControl<string>(''),
    publisher:  new FormControl<Publisher>(Publisher.DCComics),
    alt_img:    new FormControl<string>(''),
  });

  constructor(
    private heroesService: HeroesService,
    private ruter: Router,
    private activeRoute: ActivatedRoute,
    private snakBar: MatSnackBar,
    private dialogRef: MatDialog
  ) { }


  ngOnInit(): void {
    if ( !this.ruter.url.includes('edit') ) return;

    this.activeRoute.params.pipe(
      switchMap( ({id}) => this.heroesService.getHeroeDetails(id) ),
    ).subscribe(
      (hero) => {
        this.formNewHero.reset(hero);
      }
    )
  };

  /**
   * Method to get the current hero as a hero object
   * @returns Hero
   */
  get currentHero(): Hero {
    const hero: Hero = this.formNewHero.value as Hero;
    return hero;
  };

  /**
   * Method to save the hero
   */
  saveHero(): void {
    if (this.formNewHero.invalid) return;

    if(this.currentHero.id) {
      this.heroesService.updateHeroe(this.currentHero).subscribe(
        (hero) => this.openSnackBar(`Hero updated: ${hero.superhero}`)
      );
      return;
    };

    this.heroesService.addHeroes(this.currentHero).subscribe(
      (hero) => {
        this.openSnackBar(`Hero added: ${hero.superhero}`);
        this.ruter.navigate(['/heroes/edit', hero.id]);
      }
    );
  };

  deleteHero(): void {
    const dialogRef = this.dialogRef.open(ConfirmDialogComponent, {
      data: this.formNewHero.value,
    });

    dialogRef.afterClosed().pipe(
      filter((result: boolean) => result),
      switchMap(() => this.heroesService.deleteHeroe(this.currentHero.id)),
      filter((wasDeleted: boolean) => wasDeleted),
    ).subscribe(
      () => {
        this.openSnackBar(`Hero deleted: ${this.currentHero.superhero}`);
        this.ruter.navigate(['/heroes/list']);
      }
    );
  }

  openSnackBar(message: string): void {
    this.snakBar.open(message, 'Done', { duration: 2500 });
  };

};


