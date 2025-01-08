import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroCardComponent } from './components/card-heroe.component';
import { HeroesImagesPipe } from './pipes/heroes-images.pipe';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { ConfirmDialogComponent } from './components/confirmDialog/confirmDialog.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    ListPageComponent,
    HeroCardComponent,
    HeroPageComponent,
    SearchPageComponent,
    NewPageComponent,
    ConfirmDialogComponent,

    //Pipes
    HeroesImagesPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HeroesRoutingModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
