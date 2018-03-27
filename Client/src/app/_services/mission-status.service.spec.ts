import { TestBed, inject } from '@angular/core/testing';

import { MissionStatusService } from './mission-status.service';

describe('MissionStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MissionStatusService]
    });
  });

  it('should be created', inject([MissionStatusService], (service: MissionStatusService) => {
    expect(service).toBeTruthy();
  }));
});
