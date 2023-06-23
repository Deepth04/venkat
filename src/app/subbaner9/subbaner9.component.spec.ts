import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subbaner9Component } from './subbaner9.component';

describe('Subbaner9Component', () => {
  let component: Subbaner9Component;
  let fixture: ComponentFixture<Subbaner9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Subbaner9Component]
    });
    fixture = TestBed.createComponent(Subbaner9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
