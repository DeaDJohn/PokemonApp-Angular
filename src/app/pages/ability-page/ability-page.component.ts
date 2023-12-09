import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeapiService } from '../../services/pokeapi.service';
import { Ability, AbilityEffectEntry } from '../../interfaces/ability.interface';
import { switchMap } from 'rxjs';
import { Name } from 'src/app/interfaces/attack.interface';

@Component({
  selector: 'app-ability-page',
  templateUrl: './ability-page.component.html',
  styleUrls: ['./ability-page.component.css'],
})
export class AbilityPageComponent {
  public ability?: Ability;
  public effectEntry?: AbilityEffectEntry;
  public abilityName?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private PokeapiService: PokeapiService,
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.PokeapiService.getAbilityById(id)),
      )
      .subscribe(ability => {
        if (!ability) return this.router.navigateByUrl('');
        console.log(ability)

        this.abilityName = ability.names.filter(this.filterByLanguage)[0].name;
        console.log("🚀 ~ file: ability-page.component.ts:36 ~ AbilityPageComponent ~ ngOnInit ~ this.abilityName :", this.abilityName )
        this.effectEntry = ability.effect_entries.filter(this.FilterEntriesByLanguage)[0];
        console.log("🚀 ~ file: ability-page.component.ts:38 ~ AbilityPageComponent ~ ngOnInit ~ this.effectEntry :", this.effectEntry )
        return this.ability = ability;
      })
  }
  filterByLanguage(obj: Name) {
    if ("name" in obj.language && obj.language.name === "es") {
      return true;
    }
    return false;
  }

  FilterEntriesByLanguage(obj: AbilityEffectEntry) {
    if ("name" in obj.language && obj.language.name === "es") {
      return true;
    }else if ("name" in obj.language && obj.language.name === "en") {
      return true;
    }

    return false;
  }
}
