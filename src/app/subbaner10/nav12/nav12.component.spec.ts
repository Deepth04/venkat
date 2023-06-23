import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nav12Component } from './nav12.component';

describe('Nav12Component', () => {
  let component: Nav12Component;
  let fixture: ComponentFixture<Nav12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Nav12Component]
    });
    fixture = TestBed.createComponent(Nav12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
