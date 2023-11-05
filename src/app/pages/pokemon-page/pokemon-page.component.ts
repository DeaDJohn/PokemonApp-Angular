import { Component, OnInit } from '@angular/core';
import {PokeapiService} from '../../services/pokeapi.service';
import { Result, ResultAPIPokemonList } from 'src/app/interfaces/resultApi.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styles: [
  ]
})
export class PokemonPageComponent implements OnInit {

  public pokemons: Result[] = [];
  public totalPokemon: number = 0;
  public page:number = 1;

  constructor(private PokeapiService: PokeapiService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.page = Number(params['page']) || 1;
      this.loadPage(this.page);
    });
  }

  nextPage(): void {
    this.page++;
    this.loadPage(this.page);
    this.router.navigate(['/pokemon'], { queryParams: { page: this.page } });
  }

  previousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadPage(this.page);
      this.router.navigate(['/pokemon'], { queryParams: { page: this.page } });
    }
  }

  private loadPage(page: number): void {
    this.PokeapiService.getPokemons(page)
    .subscribe((data: ResultAPIPokemonList)=> {
      this.pokemons = data.results; // Almacena los datos en la variable
      this.totalPokemon = data.count;

      console.log(data)
    });
  }

}
