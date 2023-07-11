import { Pokemon } from "./pokemon";
import { PokemonTypes } from "./pokemon-types";

export class PokemonImpl implements Pokemon {

  constructor(
    public name: string,
    public pokedexNumber: number,
    public urlSprite: string,
    public weight: number,
    public types: PokemonTypes[],
  ) {}

}
