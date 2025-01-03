import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroCardComponent } from './components/card-heroe.component';
import { HeroesImagesPipe } from './pipes/heroes-images.pipe';


@NgModule({
  declarations: [
    LayoutPageComponent,
    ListPageComponent,
    HeroCardComponent,

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
