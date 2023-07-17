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
    return this.httpClient.get<Pokemon>(`${this.API}/${name}`);
  }

  loadById(id: string) {
    return this.httpClient.get<Pokemon>(`${this.API}/${id}`);
  }

  listByPage(page: number) {
    return this.httpClient.get<PokemonList[]>(`${this.API}/page/${page}`);
  }

}
