import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotingdonorComponent } from './spotingdonor.component';

describe('SpotingdonorComponent', () => {
  let component: SpotingdonorComponent;
  let fixture: ComponentFixture<SpotingdonorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpotingdonorComponent]
    });
    fixture = TestBed.createComponent(SpotingdonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
