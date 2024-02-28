import { TestBed } from '@angular/core/testing';

import { PaginationServiceService } from './pagination-service.service';

describe('PaginationServiceService', () => {
  let service: PaginationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
