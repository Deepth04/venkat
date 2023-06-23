import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nav8Component } from './nav8.component';

describe('Nav8Component', () => {
  let component: Nav8Component;
  let fixture: ComponentFixture<Nav8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Nav8Component]
    });
    fixture = TestBed.createComponent(Nav8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
