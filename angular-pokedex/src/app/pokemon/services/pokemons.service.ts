import { Pokemon } from './../models/pokemon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonList } from '../models/pokemon-list';


@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private readonly API = 'api/pokemon'

  allPokemonArray: Pokemon[] = [];

  constructor(private httpClient: HttpClient) {}


  loadByName(name: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`${this.API}/${name}`);
  }

  loadById(id: number): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`${this.API}/${id}`);
  }

  listByPage() {
    return this.httpClient.get<PokemonList[]>(`${this.API}/page/1`);
  }

}
