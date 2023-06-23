import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nav11Component } from './nav11.component';

describe('Nav11Component', () => {
  let component: Nav11Component;
  let fixture: ComponentFixture<Nav11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Nav11Component]
    });
    fixture = TestBed.createComponent(Nav11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
