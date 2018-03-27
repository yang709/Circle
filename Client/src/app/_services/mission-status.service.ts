// Used to get the status of mission from status ID.

import { Injectable } from '@angular/core';

@Injectable()
export class MissionStatusService {
  status_table: string[] = ['REQUESTING', 'ONGOING', 'FINISHED', 'CASE CLOSED', 'FAILED', 'NO CONFIRM', 'EXPIRED', 'DELETED'];
  constructor() { }
  getStatus(index: number) {
    if (index === 233) {
      return 'DELETED';
    } else {
      return this.status_table[index];
    }
  }
}
