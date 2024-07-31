import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAbsenceComponent } from './create-absence.component';

describe('CreateAbsenceComponent', () => {
  let component: CreateAbsenceComponent;
  let fixture: ComponentFixture<CreateAbsenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAbsenceComponent]
    });
    fixture = TestBed.createComponent(CreateAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
