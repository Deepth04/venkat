import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincardsComponent } from './maincards.component';

describe('MaincardsComponent', () => {
  let component: MaincardsComponent;
  let fixture: ComponentFixture<MaincardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaincardsComponent]
    });
    fixture = TestBed.createComponent(MaincardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
