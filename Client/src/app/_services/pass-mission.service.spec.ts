import { TestBed, inject } from '@angular/core/testing';

import { PassMissionService } from './pass-mission.service';

describe('PassMissionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PassMissionService]
    });
  });

  it('should be created', inject([PassMissionService], (service: PassMissionService) => {
    expect(service).toBeTruthy();
  }));
});
