import { Pokemon } from './../models/pokemon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonList } from '../models/pokemon-list';


@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private readonly API = 'api/pokemon'

  constructor(private httpClient: HttpClient) {}


  loadByName(name: string) {
    return this.httpClient.get<Pokemon>(`${this.API}/${name}`).subscribe((pokemon: Pokemon) => {
      const myPokemon: Pokemon = {
        name: pokemon.name,
        pokedexNumber: pokemon.pokedexNumber,

      }
    });
  }

  loadById(id: number) {
    return this.httpClient.get<Pokemon>(`${this.API}/${id}`);
  }

  listByPage() {
    return this.httpClient.get<PokemonList[]>(`${this.API}/page/1`);
  }

}
