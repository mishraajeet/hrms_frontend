import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Steps6Component } from './steps6.component';

describe('Steps6Component', () => {
  let component: Steps6Component;
  let fixture: ComponentFixture<Steps6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Steps6Component]
    });
    fixture = TestBed.createComponent(Steps6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
