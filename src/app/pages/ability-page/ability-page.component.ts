import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeapiService } from '../../services/pokeapi.service';

import { Ability, AbilityEffectEntry } from '../../interfaces/ability.interface';
import { switchMap } from 'rxjs';
import { Name } from 'src/app/interfaces/attack.interface';
import { Result } from 'src/app/interfaces/resultApi.interface';

@Component({
  selector: 'app-ability-page',
  templateUrl: './ability-page.component.html',
  styleUrls: ['./ability-page.component.css'],
})
export class AbilityPageComponent {
  public ability: Result[] = [];
  public page: number = 1;

  constructor(private PokeapiService: PokeapiService, private router: Router, private route: ActivatedRoute) { }



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
    this.PokeapiService.getAbilities(page)
      .subscribe((data) => {
        this.ability = data.results; // Almacena los datos en la variable

        console.log(data)
      });
  }
}
