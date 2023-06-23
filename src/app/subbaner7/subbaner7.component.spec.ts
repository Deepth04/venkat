import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subbaner7Component } from './subbaner7.component';

describe('Subbaner7Component', () => {
  let component: Subbaner7Component;
  let fixture: ComponentFixture<Subbaner7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Subbaner7Component]
    });
    fixture = TestBed.createComponent(Subbaner7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
