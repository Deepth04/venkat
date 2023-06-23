import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subbaner8Component } from './subbaner8.component';

describe('Subbaner8Component', () => {
  let component: Subbaner8Component;
  let fixture: ComponentFixture<Subbaner8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Subbaner8Component]
    });
    fixture = TestBed.createComponent(Subbaner8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
