import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeToolbarComponent } from './poke-toolbar.component';

describe('PokeToolbarComponent', () => {
  let component: PokeToolbarComponent;
  let fixture: ComponentFixture<PokeToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeToolbarComponent]
    });
    fixture = TestBed.createComponent(PokeToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
