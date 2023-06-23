import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subbaner11Component } from './subbaner11.component';

describe('Subbaner11Component', () => {
  let component: Subbaner11Component;
  let fixture: ComponentFixture<Subbaner11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Subbaner11Component]
    });
    fixture = TestBed.createComponent(Subbaner11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
