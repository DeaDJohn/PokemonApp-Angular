import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { PokeapiService } from '../../services/pokeapi.service';
import { Moves, Name } from 'src/app/interfaces/attack.interface';

@Component({
  selector: 'app-attack-single-page',
  templateUrl: './attack-single-page.component.html',
  styleUrls: ['./attack-single-page.component.scss']
})
export class AttackSinglePageComponent implements OnInit {

  public move?: Moves;

  public moveName? : Name;

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
        console.log(this.moveName )
        return this.move = move;
      })
  }

  filterByLanguage(obj: Name){
    if ("name" in obj.language &&  obj.language.name === "es" ) {
      return true;
    } else {
      return false;
    }
  }

}
