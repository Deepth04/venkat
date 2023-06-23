import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nav10Component } from './nav10.component';

describe('Nav10Component', () => {
  let component: Nav10Component;
  let fixture: ComponentFixture<Nav10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Nav10Component]
    });
    fixture = TestBed.createComponent(Nav10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
