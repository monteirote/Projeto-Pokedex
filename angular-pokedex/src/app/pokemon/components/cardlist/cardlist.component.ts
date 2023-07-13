import { Component } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import * as pokemonList from '../../models/pokemon-list';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss']
})
export class CardListComponent {

  currentPage: number = 1;
  pokemons!: pokemonList.PokemonList[];
  isLoading = true;

  constructor(private pokemonsService: PokemonsService, private snackBar: MatSnackBar) {
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
    if(this.currentPage == 51) {
      this.openSnackbar("Essa já é a última página!");
      return;
    }
    this.currentPage++;
    this.loadPokemons();
  }

  previousPage(): void {
    if(this.isLoading) return;
    if(this.currentPage == 1) {
      this.openSnackbar("Essa já é a primeira página!");
      return;
    }
    this.currentPage--;
    this.loadPokemons();
  }

  firstPage() {
    if(this.isLoading) return;
    if(this.currentPage == 1) {
      this.openSnackbar("Essa já é a primeira página!");
      return;
    }
    this.currentPage = 1;
    this.loadPokemons();
  }

  lastPage() {
    if(this.isLoading) return;
    if(this.currentPage == 51) {
      this.openSnackbar("Essa já é a última página!");
      return;
    }
    this.currentPage = 51;
    this.loadPokemons();
  }

  openSnackbar(msg: string) {
    const snackBarRef = this.snackBar.open(msg, undefined, {
      duration: 5000,
      panelClass: 'custom-snackbar'
    });
    setTimeout(() => {
      snackBarRef.dismiss();
    }, 2000);

  }
}







