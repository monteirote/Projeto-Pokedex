import { PokemonTypes } from "./pokemon-types";

export interface Pokemon {

  name: string;
  id: number;
  urlSprite: string;
  weight: number;
  types: PokemonTypes[];

}
