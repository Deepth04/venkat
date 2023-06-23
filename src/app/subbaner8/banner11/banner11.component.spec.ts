import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Banner11Component } from './banner11.component';

describe('Banner11Component', () => {
  let component: Banner11Component;
  let fixture: ComponentFixture<Banner11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Banner11Component]
    });
    fixture = TestBed.createComponent(Banner11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
