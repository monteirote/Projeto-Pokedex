import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPokemonComponent } from './cardpokemon.component';

describe('CardpokemonComponent', () => {
  let component: CardPokemonComponent;
  let fixture: ComponentFixture<CardPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPokemonComponent]
    });
    fixture = TestBed.createComponent(CardPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
