import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subbaner3Component } from './subbaner3.component';

describe('Subbaner3Component', () => {
  let component: Subbaner3Component;
  let fixture: ComponentFixture<Subbaner3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Subbaner3Component]
    });
    fixture = TestBed.createComponent(Subbaner3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
