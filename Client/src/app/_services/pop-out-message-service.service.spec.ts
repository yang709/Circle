import { TestBed, inject } from '@angular/core/testing';

import { PopOutMessageServiceService } from './pop-out-message-service.service';

describe('PopOutMessageServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopOutMessageServiceService]
    });
  });

  it('should be created', inject([PopOutMessageServiceService], (service: PopOutMessageServiceService) => {
    expect(service).toBeTruthy();
  }));
});
