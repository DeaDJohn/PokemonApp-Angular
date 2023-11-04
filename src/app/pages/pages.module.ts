import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { PokemonComponent } from '../components/pokemon/pokemon.component';
import { AttackPageComponent } from './attack-page/attack-page.component';
import { PokemonSinglePageComponent } from './pokemon-single-page/pokemon-single-page.component';
import { AttackSinglePageComponent } from './attack-single-page/attack-single-page.component';



@NgModule({
  declarations: [
    PokemonPageComponent,
    PokemonComponent,
    AttackPageComponent,
    PokemonSinglePageComponent,
    AttackSinglePageComponent
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
