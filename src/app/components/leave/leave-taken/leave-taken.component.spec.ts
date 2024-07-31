import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveTakenComponent } from './leave-taken.component';

describe('LeaveTakenComponent', () => {
  let component: LeaveTakenComponent;
  let fixture: ComponentFixture<LeaveTakenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveTakenComponent]
    });
    fixture = TestBed.createComponent(LeaveTakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
