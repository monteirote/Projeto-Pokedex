import { Pokemon } from "./pokemon";

export class PokemonImpl implements Pokemon {

  constructor(
    public name: string,
    public pokedexNumber: number,
    public urlSprite: string,
    public weight: number
  ) {}

}
