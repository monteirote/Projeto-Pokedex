import { Component } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import * as pokemonList from '../../models/pokemon-list';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss']
})
export class CardListComponent {

  pokemons!: pokemonList.PokemonList[];
  currentPage = 1;
  isLoading = true;

  constructor(private pokemonsService: PokemonsService) {
    this.loadPokemons();
  }

  loadPokemons(): void {

    this.isLoading = true;

    this.pokemonsService.listByPage(this.currentPage).subscribe(
      (pokemonLists: pokemonList.PokemonList[]) => {
        this.pokemons = pokemonLists;
        this.pokemons.forEach((pokemon) => {
          pokemon.tipos = [];
          pokemon.types.forEach((type) => {
            pokemon.tipos.push(type.type.name);
            console.log(type.type.name)
          })
        })
        this.isLoading = false;
      },
      (error: any) => {
        console.error('Error retrieving Pokémon list:', error);
        this.isLoading = false;
      }
    );
  }

  nextPage(): void {
    if(this.isLoading) return;
    this.currentPage++;
    this.loadPokemons();
  }

  previousPage(): void {
    if(this.isLoading) return;
    this.currentPage--;
    this.loadPokemons();
  }
}







