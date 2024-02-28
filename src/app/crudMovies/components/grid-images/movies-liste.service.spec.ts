import { TestBed } from '@angular/core/testing';

import { MoviesListeService } from './movies-liste.service';

describe('MoviesListeService', () => {
  let service: MoviesListeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesListeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
