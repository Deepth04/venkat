import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nav5Component } from './nav5.component';

describe('Nav5Component', () => {
  let component: Nav5Component;
  let fixture: ComponentFixture<Nav5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Nav5Component]
    });
    fixture = TestBed.createComponent(Nav5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
