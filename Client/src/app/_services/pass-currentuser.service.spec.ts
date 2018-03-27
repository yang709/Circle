import { TestBed, inject } from '@angular/core/testing';

import { PassCurrentuserService } from './pass-currentuser.service';

describe('PassCurrentuserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PassCurrentuserService]
    });
  });

  it('should be created', inject([PassCurrentuserService], (service: PassCurrentuserService) => {
    expect(service).toBeTruthy();
  }));
});
