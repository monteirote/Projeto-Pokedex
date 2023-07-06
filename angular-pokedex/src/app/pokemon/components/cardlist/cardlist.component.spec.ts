import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListComponent } from './cardlist.component';

describe('CardlistComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardListComponent]
    });
    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
