import { Component, Input } from '@angular/core';
import { PokemonList } from '../../models/pokemon-list';

@Component({
  selector: 'app-cardpokemon',
  templateUrl: './cardpokemon.component.html',
  styleUrls: ['./cardpokemon.component.scss']
})
export class CardPokemonComponent {

  @Input() shownPokemon!: PokemonList;

  getDivColorClass(tipo: string | undefined): string {
        switch (tipo) {
          case 'bug':
            return 'div-color-bug';
          case 'dark':
            return 'div-color-dark';
          case 'dragon':
            return 'div-color-dragon';
          case 'electric':
            return 'div-color-electric';
          case 'fairy':
            return 'div-color-fairy';
          case 'fighting':
            return 'div-color-fighting';
          case 'fire':
            return 'div-color-fire';
          case 'flying':
            return 'div-color-flying';
          case 'ghost':
            return 'div-color-ghost';
          case 'grass':
            return 'div-color-grass';
          case 'ground':
            return 'div-color-ground';
          case 'ice':
            return 'div-color-ice';
          case 'normal':
            return 'div-color-normal';
          case 'poison':
            return 'div-color-poison';
          case 'psychic':
            return 'div-color-psychic';
          case 'rock':
            return 'div-color-rock';
          case 'steel':
            return 'div-color-steel';
          case 'water':
            return 'div-color-water';
          }
          return 'div-color-default';
      }
    }


