import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJoiningComponent } from './new-joining.component';

describe('NewJoiningComponent', () => {
  let component: NewJoiningComponent;
  let fixture: ComponentFixture<NewJoiningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewJoiningComponent]
    });
    fixture = TestBed.createComponent(NewJoiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
