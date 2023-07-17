import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailedCardComponent } from './pokemon-detailed-card.component';

describe('PokemonDetailedCardComponent', () => {
  let component: PokemonDetailedCardComponent;
  let fixture: ComponentFixture<PokemonDetailedCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonDetailedCardComponent]
    });
    fixture = TestBed.createComponent(PokemonDetailedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
