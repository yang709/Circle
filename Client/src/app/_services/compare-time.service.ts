import { Injectable } from '@angular/core';

@Injectable()
export class CompareTimeService {

  constructor() {
  }

  public check_Ngtstruct_Time(t1) {
    const today = new Date();
    if (typeof t1 === 'undefined' || typeof t1.hour === 'undefined' || typeof t1.minute === 'undefined') {
      t1 = {hour: today.getHours(), minute: today.getMinutes()};
    }else {
      if (t1.hour < today.getHours() || (t1.hour === today.getHours() && t1.minute < today.getMinutes())) {
        t1 = {hour: today.getHours(), minute: today.getMinutes()};
      }
    }
    return t1;
  }
  public check_Ngtstruct_Ngtstruct(t1, t2) {
    const today = new Date();
    if (typeof t1 === 'undefined' || typeof t1.hour === 'undefined' || typeof t1.minute === 'undefined') {
      if (typeof t2 !== 'undefined' && typeof t2.hour !== 'undefined' && typeof t2.minute !== 'undefined' ) {
        t1 = {hour: t2.hour, minute: t2.minute};
      } else {
        t1 = {hour: today.getHours(), minute: today.getMinutes()};
      }
    } else {
      if (t1.hour < t2.hour || (t1.hour === t2.hour && t1.minute < t2.minute )) {
        t1 = {hour: t2.hour, minute: t2.minute};
      }
    }
    return t1;
  }
}
