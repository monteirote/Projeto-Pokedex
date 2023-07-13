import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglepokemonpageComponent } from './singlepokemonpage.component';

describe('SinglepokemonpageComponent', () => {
  let component: SinglepokemonpageComponent;
  let fixture: ComponentFixture<SinglepokemonpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglepokemonpageComponent]
    });
    fixture = TestBed.createComponent(SinglepokemonpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
