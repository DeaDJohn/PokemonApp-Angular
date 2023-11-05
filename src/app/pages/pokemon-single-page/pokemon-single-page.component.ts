import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { PokeapiService } from '../../services/pokeapi.service';
import { forkJoin, of, switchMap } from 'rxjs';
import { Evolution } from 'src/app/interfaces/evolution.interface';
import { PokemonSpecie } from 'src/app/interfaces/pokemonSpecie.interface';


@Component({
  selector: 'app-pokemon-single-page',
  templateUrl: './pokemon-single-page.component.html',
  styleUrls: ['./pokemon-single-page.component.scss']
})
export class PokemonSinglePageComponent implements OnInit {

  public pokemon?: Pokemon;
  public evolution?:Evolution;
  public specie?:PokemonSpecie;
  public description:string = '';


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private PokeapiService: PokeapiService,
  ) {}

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.PokeapiService.getPokemonById( id )),
        switchMap((pokemon) => {
          if (!pokemon) {
            this.router.navigateByUrl('');
            return of(null);
          }
          this.pokemon = pokemon;
          return forkJoin({
            evolution: this.PokeapiService.getEvolutionById(this.pokemon.id),
            specie: this.PokeapiService.getSpeciesById(this.pokemon.name)
            // Agrega más llamadas según sea necesario
          });
        })
      )
      .subscribe((result) => {
        if (result) {
          const { evolution,specie} = result;
          specie.flavor_text_entries = specie.flavor_text_entries.filter(this.filterByLanguage);
          this.specie = specie;
          this.evolution = evolution;
          this.description = specie.flavor_text_entries[0].flavor_text;
          console.log('evolution:', evolution);
          console.log('specie:', specie);
          // Continúa manejando los datos según tus necesidades
        }
      });
  }

  filterByLanguage(obj: any){
    if ("name" in obj.language &&  obj.language.name === "es" ) {
      return true;
    } else {
      return false;
    }
  }
}
