import { PokemonTypes } from "./pokemon-types";

export interface Pokemon {

  name: string;
  pokedexNumber: number;
  urlSprite: string;
  weight: number;
  types: PokemonTypes[];

}
