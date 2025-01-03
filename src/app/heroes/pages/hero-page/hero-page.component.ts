import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/interfaces.hero';
import { delay, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css']
})

export class HeroPageComponent implements OnInit {

  hero: Hero| undefined;

  constructor(
    private heroeService: HeroesService,
    private activateRouter: ActivatedRoute,
    private router: Router,

  ) { };


  ngOnInit(): void {
    this.activateRouter.params.pipe(
      // delay(3000),
      switchMap( ({ id }) => this.heroeService.getHeroeDetails(id) )
    )
      .subscribe(hero => {
        console.log(hero);

        if(!hero) { return this.router.navigate(['/heroes/list']) }

        this.hero = hero;
        return;
      });
  };

  goBack(): void {
    this.router.navigateByUrl('heroes/list');
  };

};
