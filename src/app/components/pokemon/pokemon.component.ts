import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { Result } from 'src/app/interfaces/resultApi.interface';
import {PokeapiService} from '../../services/pokeapi.service';

@Component({
  selector: 'pokemon-item',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  public pokemon!: Pokemon | null;
  @Input()
  public pokemonResult : Result = { name: '', url: '' };


  constructor(private PokeapiService: PokeapiService) {}


  ngOnInit(): void {

    console.log(this.pokemonResult.name);
    this.PokeapiService.getPokemonById(this.pokemonResult.name)
    .subscribe((data)=> {
      this.pokemon = data; // Almacena los datos en la variable
      // Aquí puedes realizar cualquier otra lógica con los datos si es necesario
      console.log(data)
    });
  }



}
function subscribe(arg0: (data: Pokemon) => void) {
  throw new Error('Function not implemented.');
}

