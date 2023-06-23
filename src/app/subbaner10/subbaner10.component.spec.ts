import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subbaner10Component } from './subbaner10.component';

describe('Subbaner10Component', () => {
  let component: Subbaner10Component;
  let fixture: ComponentFixture<Subbaner10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Subbaner10Component]
    });
    fixture = TestBed.createComponent(Subbaner10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
