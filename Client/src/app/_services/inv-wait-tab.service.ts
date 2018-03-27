import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Mission, User } from '../_models/index';
@Injectable()
export class InvWaitTabService {

  // Observable string sources
  private inviteTabSource = new Subject<Array<User>>();
  private waitTabSource = new Subject<Array<User>>();

  // Observable string streams
  inviteTab$ = this.inviteTabSource.asObservable();
  waitTab$ = this.waitTabSource.asObservable();

  // Service message commands
  inInvTab(userList: Array<User>) {
    this.inviteTabSource.next(userList);
  }

  inWaitTab(userList: Array<User>) {
    this.waitTabSource.next(userList);
  }
}
