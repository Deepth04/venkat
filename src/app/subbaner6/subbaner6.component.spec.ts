import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subbaner6Component } from './subbaner6.component';

describe('Subbaner6Component', () => {
  let component: Subbaner6Component;
  let fixture: ComponentFixture<Subbaner6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Subbaner6Component]
    });
    fixture = TestBed.createComponent(Subbaner6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
