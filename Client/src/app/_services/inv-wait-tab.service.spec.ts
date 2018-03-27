import { TestBed, inject } from '@angular/core/testing';

import { InvWaitTabService } from './inv-wait-tab.service';

describe('InvWaitTabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvWaitTabService]
    });
  });

  it('should be created', inject([InvWaitTabService], (service: InvWaitTabService) => {
    expect(service).toBeTruthy();
  }));
});
