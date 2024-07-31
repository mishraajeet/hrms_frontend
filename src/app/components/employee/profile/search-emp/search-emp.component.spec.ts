import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmpComponent } from './search-emp.component';

describe('SearchEmpComponent', () => {
  let component: SearchEmpComponent;
  let fixture: ComponentFixture<SearchEmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchEmpComponent]
    });
    fixture = TestBed.createComponent(SearchEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
