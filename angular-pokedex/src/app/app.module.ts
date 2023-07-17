import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PokemonsService } from './pokemon/services/pokemons.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { CardPokemonComponent } from './pokemon/components/cardpokemon/cardpokemon.component';
import { CardListComponent } from './pokemon/components/cardlist/cardlist.component';
import { PokeToolbarComponent } from './pokemon/components/poke-toolbar/poke-toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { PageControllerComponent } from './pokemon/components/page-controller/page-controller.component';
import { LoadingPokeballComponent } from './pokemon/components/loading-pokeball/loading-pokeball.component';
import { SinglepokemonpageComponent } from './pokemon/components/singlepokemonpage/singlepokemonpage.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ErrorAvisoComponent } from './pokemon/components/error-aviso/error-aviso.component';
import { SearchErrorComponent } from './pokemon/components/search-error/search-error.component';
import { PokemonDetailedCardComponent } from './pokemon/components/pokemon-detailed-card/pokemon-detailed-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardPokemonComponent,
    CardListComponent,
    PokeToolbarComponent,
    PageControllerComponent,
    LoadingPokeballComponent,
    SinglepokemonpageComponent,
    ErrorAvisoComponent,
    SearchErrorComponent,
    PokemonDetailedCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
  ],
  providers: [PokemonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
