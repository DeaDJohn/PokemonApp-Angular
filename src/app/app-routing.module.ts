import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { AttackPageComponent } from './pages/attack-page/attack-page.component';
import { PokemonSinglePageComponent } from './pages/pokemon-single-page/pokemon-single-page.component';
import { AttackSinglePageComponent } from './pages/attack-single-page/attack-single-page.component';

const routes: Routes = [
  { path: 'pokemon', component: PokemonPageComponent },
  { path: 'pokemon/:id', component: PokemonSinglePageComponent },

  { path: 'moves/:id', component: AttackSinglePageComponent },

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
