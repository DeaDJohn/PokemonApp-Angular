import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { MovePageComponent } from './pages/attack-page/move-page.component';
import { PokemonSinglePageComponent } from './pages/pokemon-single-page/pokemon-single-page.component';
import { MoveSinglePageComponent } from './pages/move-single-page/move-single-page.component';
import { AbilitySinglePageComponent } from './pages/ability-single-page/ability-single-page.component';
import { AbilityPageComponent } from './pages/ability-page/ability-page.component';

const routes: Routes = [
  { path: 'pokemon', component: PokemonPageComponent },
  { path: 'pokemon/:id', component: PokemonSinglePageComponent },
  { path: 'move', component: MovePageComponent },
  { path: 'move/:id', component: MoveSinglePageComponent },
  { path: 'ability', component: AbilityPageComponent },
  { path: 'ability/:id', component: AbilitySinglePageComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
