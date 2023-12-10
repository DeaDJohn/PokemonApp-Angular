import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';
import { Ability } from '../interfaces/ability.interface';
import { ResultAPIPokemonList } from '../interfaces/resultApi.interface';
import { Moves } from '../interfaces/attack.interface';
import { Evolution } from '../interfaces/evolution.interface';
import { PokemonSpecie } from '../interfaces/pokemonSpecie.interface';
import { MovesList } from '../interfaces/movesList.interface';



@Injectable({ providedIn: 'root' })
export class PokeapiService {
  private cache = new Map<string, any>();

  private urlPokemon:string = 'https://pokeapi.co/api/v2/pokemon/';
  private urlMove:string = 'https://pokeapi.co/api/v2/move/';
  private urlEvolution:string = 'https://pokeapi.co/api/v2/evolution-chain/';
  private urlSpecies:string = 'https://pokeapi.co/api/v2/pokemon-species/';
  private urlAbility:string = 'https://pokeapi.co/api/v2/ability/';

  constructor(private httpClient: HttpClient) { }

  // Convert getPokemons function in a funtion to get paginations.
  // the api use this system to get the pagination ?limit=20&offset=20

  getPokemons(page: number = 1) : Observable<ResultAPIPokemonList>{
    const pageSize: number = 20;
    const offset = (page - 1) * pageSize;
    const urlApi = `${this.urlPokemon}?limit=${pageSize}&offset=${offset}`;
    const cachedResponse = this.cache.get(urlApi);
    if (cachedResponse) {
      return of(cachedResponse);
    } else {
      return this.httpClient.get<ResultAPIPokemonList>(urlApi).pipe(
        tap(response => this.cache.set(urlApi, response))
      );
    }
  }

  getMoves(page: number = 1) : Observable<MovesList>{
    const pageSize: number = 20;
    const offset = (page - 1) * pageSize;
    const urlApi = `${this.urlMove}?limit=${pageSize}&offset=${offset}`;
    const cachedResponse = this.cache.get(urlApi);
    if (cachedResponse) {
      return of(cachedResponse);
    } else {
      return this.httpClient.get<MovesList>(urlApi).pipe(
        tap(response => this.cache.set(urlApi, response))
      );
    }
  }
  getAbilities(page: number = 1) : Observable<MovesList>{
    const pageSize: number = 20;
    const offset = (page - 1) * pageSize;
    const urlApi = `${this.urlAbility}?limit=${pageSize}&offset=${offset}`;
    const cachedResponse = this.cache.get(urlApi);
    if (cachedResponse) {
      return of(cachedResponse);
    } else {
      return this.httpClient.get<MovesList>(urlApi).pipe(
        tap(response => this.cache.set(urlApi, response))
      );
    }
  }

  getPokemonById(id:string) : Observable<Pokemon>{
    var urlApi = `${this.urlPokemon}${id}`;
    //console.log(urlApi);
    const cachedResponse = this.cache.get(urlApi);
    console.log("🚀 ~ file: pokeapi.service.ts:74 ~ PokeapiService ~ getPokemonById ~ this.cache:", this.cache)
    if (cachedResponse) {
      return of(cachedResponse);
    } else {
      return this.httpClient.get<Pokemon>(urlApi).pipe(
        tap(response => this.cache.set(urlApi, response))
      );
    }
  }

  getSpeciesById(id:string) : Observable<PokemonSpecie>{
    var urlApi = `${this.urlSpecies}${id}`;
    console.log(urlApi);
    const cachedResponse = this.cache.get(urlApi);
    if (cachedResponse) {
      return of(cachedResponse);
    } else {
      return this.httpClient.get<PokemonSpecie>(urlApi).pipe(
        tap(response => this.cache.set(urlApi, response))
      );
    }
  }

  getMoveById(id:string) : Observable<Moves>{
    var urlApi = `${this.urlMove}${id}`;
    console.log(urlApi);
    const cachedResponse = this.cache.get(urlApi);
    if (cachedResponse) {
      return of(cachedResponse);
    } else {
      return this.httpClient.get<Moves>(urlApi).pipe(
        tap(response => this.cache.set(urlApi, response))
      );
    }
  }

  getEvolutionById(id:number) : Observable<Evolution>{
    var urlApi = `${this.urlEvolution}${id}`;
    console.log(urlApi);
    const cachedResponse = this.cache.get(urlApi);
    if (cachedResponse) {
      return of(cachedResponse);
    } else {
      return this.httpClient.get<Evolution>(urlApi).pipe(
        tap(response => this.cache.set(urlApi, response))
      );
    }
  }

  getAbilityById(id:string) : Observable<Ability>{
    console.log("🚀 ~ file: pokeapi.service.ts:67 ~ PokeapiService ~ getAbilityById ~ id:", id)
    var urlApi = `${this.urlAbility}${id}`;
    console.log(urlApi);
    const cachedResponse = this.cache.get(urlApi);
    if (cachedResponse) {
      return of(cachedResponse);
    } else {
      return this.httpClient.get<Ability>(urlApi).pipe(
        tap(response => this.cache.set(urlApi, response))
      );
    }
  }

}
