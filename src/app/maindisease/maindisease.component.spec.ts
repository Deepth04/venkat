import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaindiseaseComponent } from './maindisease.component';

describe('MaindiseaseComponent', () => {
  let component: MaindiseaseComponent;
  let fixture: ComponentFixture<MaindiseaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaindiseaseComponent]
    });
    fixture = TestBed.createComponent(MaindiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
