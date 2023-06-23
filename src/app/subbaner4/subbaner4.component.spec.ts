import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subbaner4Component } from './subbaner4.component';

describe('Subbaner4Component', () => {
  let component: Subbaner4Component;
  let fixture: ComponentFixture<Subbaner4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Subbaner4Component]
    });
    fixture = TestBed.createComponent(Subbaner4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
