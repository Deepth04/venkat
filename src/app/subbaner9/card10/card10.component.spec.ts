import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card10Component } from './card10.component';

describe('Card10Component', () => {
  let component: Card10Component;
  let fixture: ComponentFixture<Card10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card10Component]
    });
    fixture = TestBed.createComponent(Card10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
