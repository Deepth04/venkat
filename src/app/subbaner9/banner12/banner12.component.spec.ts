import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Banner12Component } from './banner12.component';

describe('Banner12Component', () => {
  let component: Banner12Component;
  let fixture: ComponentFixture<Banner12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Banner12Component]
    });
    fixture = TestBed.createComponent(Banner12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
