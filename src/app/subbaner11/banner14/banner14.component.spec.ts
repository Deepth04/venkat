import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Banner14Component } from './banner14.component';

describe('Banner14Component', () => {
  let component: Banner14Component;
  let fixture: ComponentFixture<Banner14Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Banner14Component]
    });
    fixture = TestBed.createComponent(Banner14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
