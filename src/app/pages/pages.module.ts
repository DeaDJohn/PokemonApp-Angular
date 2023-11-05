import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { PokemonComponent } from '../components/pokemon/pokemon.component';
import { MovePageComponent } from './attack-page/move-page.component';
import { PokemonSinglePageComponent } from './pokemon-single-page/pokemon-single-page.component';
import { MoveSinglePageComponent } from './move-single-page/move-single-page.component';



@NgModule({
  declarations: [
    PokemonPageComponent,
    PokemonComponent,
    MovePageComponent,
    PokemonSinglePageComponent,
    MoveSinglePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PokemonPageComponent,
    PokemonComponent
  ]
})
export class PagesPokeModule { }
