import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsHubComponent } from './analytics-hub.component';

describe('AnalyticsHubComponent', () => {
  let component: AnalyticsHubComponent;
  let fixture: ComponentFixture<AnalyticsHubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyticsHubComponent]
    });
    fixture = TestBed.createComponent(AnalyticsHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
