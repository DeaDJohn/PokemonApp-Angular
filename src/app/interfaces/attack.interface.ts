// Generated by https://quicktype.io

export interface Moves {
  id:                   number;
  name:                 string;
  accuracy:             number;
  effect_chance:        null;
  pp:                   number;
  priority:             number;
  power:                number;
  contest_combos:       ContestCombos;
  contest_type:         ContestType;
  contest_effect:       ContestEffect;
  damage_class:         ContestType;
  effect_entries:       EffectEntry[];
  effect_changes:       any[];
  generation:           ContestType;
  meta:                 Meta;
  names:                Name[];
  past_values:          any[];
  stat_changes:         any[];
  super_contest_effect: ContestEffect;
  target:               ContestType;
  type:                 ContestType;
  learned_by_pokemon:   ContestType[];
  flavor_text_entries:  FlavorTextEntry[];
}

export interface ContestCombos {
  normal: Normal;
  super:  Normal;
}

export interface Normal {
  use_before: ContestType[] | null;
  use_after:  null;
}

export interface ContestType {
  name: string;
  url:  string;
}

export interface ContestEffect {
  url: string;
}

export interface EffectEntry {
  effect:       string;
  short_effect: string;
  language:     ContestType;
}

export interface FlavorTextEntry {
  flavor_text:   string;
  language:      ContestType;
  version_group: ContestType;
}

export interface Meta {
  ailment:        ContestType;
  category:       ContestType;
  min_hits:       null;
  max_hits:       null;
  min_turns:      null;
  max_turns:      null;
  drain:          number;
  healing:        number;
  crit_rate:      number;
  ailment_chance: number;
  flinch_chance:  number;
  stat_chance:    number;
}

export interface Name {
  name:     string;
  language: ContestType;
}
