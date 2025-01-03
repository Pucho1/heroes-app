import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroCardComponent } from './components/card-heroe.component';
import { HeroesImagesPipe } from './pipes/heroes-images.pipe';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    ListPageComponent,
    HeroCardComponent,
    HeroPageComponent,

    //Pipes
    HeroesImagesPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
