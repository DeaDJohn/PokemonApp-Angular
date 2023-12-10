import { Pokemon } from '../interfaces/pokemon.interface';

class Utils {
  static getAvaiblePokemonImg(pokemon: Pokemon){
    if (pokemon.sprites?.other?.dream_world?.front_default) {
      return pokemon.sprites.other.dream_world.front_default;
    } else {
      return pokemon.sprites.front_default;
    }
  }
}

export default Utils;
