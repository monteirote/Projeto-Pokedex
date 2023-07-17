import { PokemonsService } from './../../services/pokemons.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../models/pokemon';
import { map } from 'rxjs';
import { PokemonImpl } from '../../models/pokemon-impl';

@Component({
  selector: 'app-singlepokemonpage',
  templateUrl: './singlepokemonpage.component.html',
  styleUrls: ['./singlepokemonpage.component.scss'],
})
export class SinglepokemonpageComponent implements OnInit {
  nomePokemon: string | null = '';
  pokemonExibido!: Pokemon;
  isLoading = true;
  erro = false;

  constructor(
    private route: ActivatedRoute,
    private PokemonService: PokemonsService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.nomePokemon = params.get('nome');
      if (!this.nomePokemon) {
        throw new Error();
      }
      this.PokemonService.loadById(this.nomePokemon)
        .pipe(
          map(
            (pokemonData) => {
              this.pokemonExibido = new PokemonImpl(
                  pokemonData.name,
                  pokemonData.id,
                  pokemonData.urlSprite,
                  pokemonData.weight,
                  pokemonData.types
                );
                console.log(this.pokemonExibido);
            }
          )
        )
        .subscribe(
          (pokemon) => {
            this.isLoading = false;
          },
          (error) => {
            this.erro = true;
            this.isLoading = false;
          }
        );
    });  }
  }

