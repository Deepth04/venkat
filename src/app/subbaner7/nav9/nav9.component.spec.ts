import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nav9Component } from './nav9.component';

describe('Nav9Component', () => {
  let component: Nav9Component;
  let fixture: ComponentFixture<Nav9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Nav9Component]
    });
    fixture = TestBed.createComponent(Nav9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
