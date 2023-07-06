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





@NgModule({
  declarations: [
    AppComponent,
    CardPokemonComponent,
    CardListComponent,
    PokeToolbarComponent,
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
  ],
  providers: [PokemonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
