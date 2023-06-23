import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nav50Component } from './nav50.component';

describe('Nav50Component', () => {
  let component: Nav50Component;
  let fixture: ComponentFixture<Nav50Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Nav50Component]
    });
    fixture = TestBed.createComponent(Nav50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
