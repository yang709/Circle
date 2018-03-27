import { Injectable, Type } from '@angular/core';
import { LoggerService} from './logger.service';
import { User } from '../_models/user';
@Injectable()
export class BackendService {
  USERS: any[] = [];
  constructor(private logger: LoggerService) {}
  getAll(type: Type<any>): PromiseLike<any[]> {
      if ( type === User ) {
        // TODO get user info from database
        return Promise.resolve<User[]>(this.USERS);
      }
      const err = new Error('Cannot get object of this type');
      this.logger.error(err);
      throw err;
  }

}
