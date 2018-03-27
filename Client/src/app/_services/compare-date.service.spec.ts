import { TestBed, inject } from '@angular/core/testing';

import { CompareDateService } from './compare-date.service';

describe('CompareDateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompareDateService]
    });
  });

  it('should be created', inject([CompareDateService], (service: CompareDateService) => {
    expect(service).toBeTruthy();
  }));
});
