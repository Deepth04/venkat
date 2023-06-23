import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subbaner1Component } from './subbaner1.component';

describe('Subbaner1Component', () => {
  let component: Subbaner1Component;
  let fixture: ComponentFixture<Subbaner1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Subbaner1Component]
    });
    fixture = TestBed.createComponent(Subbaner1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
