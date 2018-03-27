import {Injectable} from '@angular/core';

@Injectable()
export class CompareDateService {
  constructor() {
  }
  public checkDate(d1, d2) {
    const now = new Date();
    if (typeof d1 === 'undefined' || d1.getTime() < now.getTime()) {
      d1 = now;
    } else {
      if (d1.getTime() === now.getTime() && (d1.getHours() < now.getHours()
        || d1.getHours() === now.getHours() && d1.getMinutes() < d2.getMinutes())) {
        d1 = now;
      }
    }
    if (typeof d2 === 'undefined' || d2.getTime() < d1.getTime()) {
      d2 = d1;
    } else {
      if (d2.getTime() === d1.getTime() && (d2.getHours() < d1.getHours()
        || d2.getHours() === d1.getHours() && d2.getMinutes() < d1.getMinutes())) {
        d2 = d1;
      }
    }
    return {
      smallerDate: d1,
      biggerDate : d2
    };
  }
}
