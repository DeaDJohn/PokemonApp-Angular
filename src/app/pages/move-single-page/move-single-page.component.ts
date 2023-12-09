import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { PokeapiService } from '../../services/pokeapi.service';
import { Moves, Name } from 'src/app/interfaces/attack.interface';
import { EffectEntry } from '../../interfaces/attack.interface';

@Component({
  selector: 'app-move-single-page',
  templateUrl: './move-single-page.component.html',
  styleUrls: ['./move-single-page.component.scss']
})
export class MoveSinglePageComponent implements OnInit {

  public move?: Moves;
  public moveName? : Name;
  public effectEntry? : EffectEntry;
  public targetName? : string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private PokeapiService: PokeapiService,
  ) {}

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.PokeapiService.getMoveById( id )),
      )
      .subscribe( move => {
        if ( !move ) return this.router.navigateByUrl('');
        console.log(move)
        this.moveName = move.names.filter( this.filterByLanguage )[0]
        this.effectEntry = move.effect_entries[0];
        this.targetName = this.getTargetName(move.target.name)
        console.log(this.moveName )
        return this.move = move;
      })
  }

  filterByLanguage(obj: Name){
    if ("name" in obj.language &&  obj.language.name === "es" ) {
      return true;
    }
    return false;
  }

  getTargetName(target: string){
    switch (target) {
      case "selected-pokemon":
        return "Pokemon seleccionado"
      case "all-other-pokemon":
        return "Todos los pokemon menos el seleccionado"
      case "all-opponents":
        return "Todos los oponentes"
      case "user":
        return "Usuario"
      case "all-pokemon":
        return "Todos los pokemon"
      case "random-opponent":
        return "Oponente aleatorio"
      case "all-pokemon-but-user":
        return "Todos los pokemon menos el usuario"
      case "all-pokemon-but-selected":
        return "Todos los pokemon menos el seleccionado"
      case "all-pokemon-but-one":
        return "Todos los pokemon menos uno"
      default:
        return target;
    }
  }

}
