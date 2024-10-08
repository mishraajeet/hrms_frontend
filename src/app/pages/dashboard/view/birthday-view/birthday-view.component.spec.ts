import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayViewComponent } from './birthday-view.component';

describe('BirthdayViewComponent', () => {
  let component: BirthdayViewComponent;
  let fixture: ComponentFixture<BirthdayViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BirthdayViewComponent]
    });
    fixture = TestBed.createComponent(BirthdayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
