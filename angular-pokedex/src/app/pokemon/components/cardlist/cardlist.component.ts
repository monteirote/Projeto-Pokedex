import { Pokemon } from './../../models/pokemon';
import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import * as pokemonList from '../../models/pokemon-list';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss']
})
export class CardListComponent implements OnInit{

  pokemonExibido!: Pokemon;
  pokemons!: pokemonList.PokemonList[];
  currentPage = 1;
  itemsPerPage = 100;

  constructor(private pokemonsService: PokemonsService) {
    this.loadPokemons();
  }

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.pokemonsService.listAll().subscribe(
      (pokemonLists: pokemonList.PokemonList[]) => {
        this.pokemons = pokemonLists;
        // console.log(this.pokemons)
      },
      (error: any) => {
        console.error('Error retrieving Pokémon list:', error);
      }
    );
  }









}
