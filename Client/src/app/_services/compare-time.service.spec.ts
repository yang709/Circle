import { TestBed, inject } from '@angular/core/testing';

import { CompareTimeService } from './compare-time.service';

describe('CompareTimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompareTimeService]
    });
  });

  it('should be created', inject([CompareTimeService], (service: CompareTimeService) => {
    expect(service).toBeTruthy();
  }));
});
