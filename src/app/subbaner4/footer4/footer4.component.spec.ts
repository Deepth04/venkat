import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer4Component } from './footer4.component';

describe('Footer4Component', () => {
  let component: Footer4Component;
  let fixture: ComponentFixture<Footer4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Footer4Component]
    });
    fixture = TestBed.createComponent(Footer4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
