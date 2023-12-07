
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovesList, Result } from 'src/app/interfaces/movesList.interface';
import { PokeapiService } from 'src/app/services/pokeapi.service';


@Component({
  selector: 'app-move-page',
  templateUrl: './move-page.component.html',
  styles: [
  ]
})
export class MovePageComponent implements OnInit {
  public moves: Result[] = [];
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
    this.router.navigate(['/move'], { queryParams: { page: this.page } });
  }

  previousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadPage(this.page);
      this.router.navigate(['/move'], { queryParams: { page: this.page } });
    }
  }

  private loadPage(page: number): void {
    this.PokeapiService.getMoves(page)
    .subscribe((data)=> {
      this.moves = data.results; // Almacena los datos en la variable

      console.log(data)
    });
  }
}

