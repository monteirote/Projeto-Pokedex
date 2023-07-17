import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poke-toolbar',
  templateUrl: './poke-toolbar.component.html',
  styleUrls: ['./poke-toolbar.component.scss']
})
export class PokeToolbarComponent {

  constructor(private router: Router) {}

  iconUrl: string = "https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg";
  searchInput: string = '';

  onClick() {
    this.router.navigate(['/pokemon', this.searchInput]).then(() => window.location.reload());
    this.searchInput = '';
    window.location.reload();
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key == 'Enter') {
      this.onClick();
    }
  }

  onClickHomeButton() {
    this.router.navigate(['/pokemons'])
  }
}
