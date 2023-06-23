import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbannerComponent } from './navbanner.component';

describe('NavbannerComponent', () => {
  let component: NavbannerComponent;
  let fixture: ComponentFixture<NavbannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbannerComponent]
    });
    fixture = TestBed.createComponent(NavbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
