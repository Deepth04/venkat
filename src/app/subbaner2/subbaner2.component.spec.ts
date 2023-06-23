import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subbaner2Component } from './subbaner2.component';

describe('Subbaner2Component', () => {
  let component: Subbaner2Component;
  let fixture: ComponentFixture<Subbaner2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Subbaner2Component]
    });
    fixture = TestBed.createComponent(Subbaner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
