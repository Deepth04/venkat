import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Banner25Component } from './banner25.component';

describe('Banner25Component', () => {
  let component: Banner25Component;
  let fixture: ComponentFixture<Banner25Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Banner25Component]
    });
    fixture = TestBed.createComponent(Banner25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
