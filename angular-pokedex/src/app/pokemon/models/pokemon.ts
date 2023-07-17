import { PokemonTypes } from "./pokemon-types";

export interface Pokemon {

  name: string;
  id: string;
  urlSprite: string;
  weight: number;
  types: PokemonTypes[];

}
