import { Component, Input } from '@angular/core';
import { PokemonImpl } from '../../models/pokemon-impl';

@Component({
  selector: 'app-pokemon-detailed-card',
  templateUrl: './pokemon-detailed-card.component.html',
  styleUrls: ['./pokemon-detailed-card.component.scss']
})
export class PokemonDetailedCardComponent {

  @Input() pokemonExibido!: PokemonImpl;

}
