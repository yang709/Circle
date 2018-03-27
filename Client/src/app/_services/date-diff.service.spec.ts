import { TestBed, inject } from '@angular/core/testing';

import { DateDiffService } from './date-diff.service';

describe('DateDiffService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateDiffService]
    });
  });

  it('should be created', inject([DateDiffService], (service: DateDiffService) => {
    expect(service).toBeTruthy();
  }));
});
