import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';
import { ResultAPIPokemonList } from '../interfaces/resultApi.interface';
import { Moves } from '../interfaces/attack.interface';
import { Evolution } from '../interfaces/evolution.interface';
import { PokemonSpecie } from '../interfaces/pokemonSpecie.interface';
import { MovesList } from '../interfaces/movesList.interface';



@Injectable({ providedIn: 'root' })
export class PokeapiService {

  private urlPokemon:string = 'https://pokeapi.co/api/v2/pokemon/';
  private urlMove:string = 'https://pokeapi.co/api/v2/move/';
  private urlEvolution:string = 'https://pokeapi.co/api/v2/evolution-chain/';
  private urlSpecies:string = 'https://pokeapi.co/api/v2/pokemon-species/';

  constructor(private httpClient: HttpClient) { }

  // Convert getPokemons function in a funtion to get paginations.
  // the api use this system to get the pagination ?limit=20&offset=20

  getPokemons(page: number = 1) : Observable<ResultAPIPokemonList>{
    const pageSize: number = 20;
    const offset = (page - 1) * pageSize;
    const urlApi = `${this.urlPokemon}?limit=${pageSize}&offset=${offset}`;
    return this.httpClient.get<ResultAPIPokemonList>(urlApi);
  }

  getMoves(page: number = 1) : Observable<MovesList>{
    const pageSize: number = 20;
    const offset = (page - 1) * pageSize;
    const urlApi = `${this.urlMove}?limit=${pageSize}&offset=${offset}`;
    return this.httpClient.get<MovesList>(urlApi);
  }

  getPokemonById(id:string) : Observable<Pokemon>{
    var urlApi = `${this.urlPokemon}${id}`;
    console.log(urlApi);
    return this.httpClient.get<Pokemon>(urlApi);
  }

  getSpeciesById(id:string) : Observable<PokemonSpecie>{
    var urlApi = `${this.urlSpecies}${id}`;
    console.log(urlApi);
    return this.httpClient.get<PokemonSpecie>(urlApi);
  }

  getMoveById(id:string) : Observable<Moves>{
    var urlApi = `${this.urlMove}${id}`;
    console.log(urlApi);
    return this.httpClient.get<Moves>(urlApi);
  }

  getEvolutionById(id:number) : Observable<Evolution>{
    var urlApi = `${this.urlEvolution}${id}`;
    console.log(urlApi);
    return this.httpClient.get<Evolution>(urlApi);
  }

}
