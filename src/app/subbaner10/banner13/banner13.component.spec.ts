import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Banner13Component } from './banner13.component';

describe('Banner13Component', () => {
  let component: Banner13Component;
  let fixture: ComponentFixture<Banner13Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Banner13Component]
    });
    fixture = TestBed.createComponent(Banner13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
