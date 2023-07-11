import { Component, Input } from '@angular/core';
import { PokemonList } from '../../models/pokemon-list';

@Component({
  selector: 'app-cardpokemon',
  templateUrl: './cardpokemon.component.html',
  styleUrls: ['./cardpokemon.component.scss']
})
export class CardPokemonComponent {

  @Input() shownPokemon!: PokemonList;




}
