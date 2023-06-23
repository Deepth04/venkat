import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nav6Component } from './nav6.component';

describe('Nav6Component', () => {
  let component: Nav6Component;
  let fixture: ComponentFixture<Nav6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Nav6Component]
    });
    fixture = TestBed.createComponent(Nav6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
