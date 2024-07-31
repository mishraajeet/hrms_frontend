import { TestBed } from '@angular/core/testing';

import { EployeeService } from './eployee.service';

describe('EployeeService', () => {
  let service: EployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
