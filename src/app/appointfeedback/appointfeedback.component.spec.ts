import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointfeedbackComponent } from './appointfeedback.component';

describe('AppointfeedbackComponent', () => {
  let component: AppointfeedbackComponent;
  let fixture: ComponentFixture<AppointfeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointfeedbackComponent]
    });
    fixture = TestBed.createComponent(AppointfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
