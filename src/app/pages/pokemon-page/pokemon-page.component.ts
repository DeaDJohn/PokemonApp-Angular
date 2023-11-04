import { Component, OnInit } from '@angular/core';
import {PokeapiService} from '../../services/pokeapi.service';
import { Result, ResultAPIPokemonList } from 'src/app/interfaces/resultApi.interface';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styles: [
  ]
})
export class PokemonPageComponent implements OnInit {

  public pokemons: Result[] = [];
  constructor(private PokeapiService: PokeapiService) {}

  ngOnInit(): void {
    this.PokeapiService.getPokemons()
    .subscribe((data: ResultAPIPokemonList)=> {
      this.pokemons = data.results; // Almacena los datos en la variable
      // Aquí puedes realizar cualquier otra lógica con los datos si es necesario
      console.log(data.results)
    });
  }

}
