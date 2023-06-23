import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nav13Component } from './nav13.component';

describe('Nav13Component', () => {
  let component: Nav13Component;
  let fixture: ComponentFixture<Nav13Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Nav13Component]
    });
    fixture = TestBed.createComponent(Nav13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
