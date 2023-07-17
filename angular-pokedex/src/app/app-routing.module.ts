import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './pokemon/components/cardlist/cardlist.component';
import { SinglepokemonpageComponent } from './pokemon/components/singlepokemonpage/singlepokemonpage.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pokemons' },
  { path: 'pokemon', pathMatch: 'full', redirectTo: 'pokemons'},
  { path: 'pokemons', component: CardListComponent },
  { path: 'pokemon/:nome', component: SinglepokemonpageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
