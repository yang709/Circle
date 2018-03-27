// Used to calculate the duration between two dates, return xx days or xx hours or xx minutes
// return string
import { Injectable } from '@angular/core';
import * as moment from 'moment';
@Injectable()
export class DateDiffService {
  // please make sure d1 is later(bigger) than d2
  dateDiff(d1: Date, d2: Date): string {
    const diff = moment.duration(d1.getTime() - d2.getTime());
    if ( diff.asDays() >= 1) {
      return '' + Math.floor(diff.asDays()) + ' ' + 'day(s) ago';
    } else if ( diff.asHours() >= 1) {
      return '' + Math.floor(diff.asHours()) + ' ' + 'hour(s) ago';
    } else {
      return '' + Math.floor(diff.asMinutes()) + ' ' + 'minute(s) ago';
    }
  }

}
