import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subbaner5Component } from './subbaner5.component';

describe('Subbaner5Component', () => {
  let component: Subbaner5Component;
  let fixture: ComponentFixture<Subbaner5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Subbaner5Component]
    });
    fixture = TestBed.createComponent(Subbaner5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
