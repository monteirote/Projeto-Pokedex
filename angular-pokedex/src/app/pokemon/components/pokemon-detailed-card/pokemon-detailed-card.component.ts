import { Component, Input, OnInit } from '@angular/core';
import { PokemonImpl } from '../../models/pokemon-impl';

@Component({
  selector: 'app-pokemon-detailed-card',
  templateUrl: './pokemon-detailed-card.component.html',
  styleUrls: ['./pokemon-detailed-card.component.scss']
})
export class PokemonDetailedCardComponent implements OnInit {

  @Input() pokemonExibido!: PokemonImpl;

  templateUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  spriteShinyUrl!: string;
  mainImage!: string;
  numberToSprite!: string;

  constructor() {}

  ngOnInit(): void {
    this.spriteShinyUrl = this.templateUrl + "shiny/" + this.pokemonExibido.id.toString() + ".png";
    this.numberToSprite = this.pokemonExibido.id;
    if (this.numberToSprite.length < 2) {
      this.numberToSprite = "00" + this.pokemonExibido.id;
    } else if (this.numberToSprite.length < 3) {
      this.numberToSprite = "0" + this.pokemonExibido.id;
    }
    this.mainImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + this.numberToSprite + ".png";
  }

}
