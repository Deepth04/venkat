import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nav7Component } from './nav7.component';

describe('Nav7Component', () => {
  let component: Nav7Component;
  let fixture: ComponentFixture<Nav7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Nav7Component]
    });
    fixture = TestBed.createComponent(Nav7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
