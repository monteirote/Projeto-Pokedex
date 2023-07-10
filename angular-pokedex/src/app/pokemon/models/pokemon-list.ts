import { PokemonTypes } from "./pokemon-types";

export interface PokemonList {

  name: string;

  pkdxNumber: number;

  url: string;

  types: PokemonTypes[];

}
