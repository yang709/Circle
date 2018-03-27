import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
@Injectable()
export class PassCurrentuserService {
  private currentUser: User;
  private subject: Subject<User> = new Subject<User>();
  constructor( private router: Router ) { }
  setCurrentUser(user: User) {
    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.subject.next(user);
  }
  getCurrentUser() {
    if ( this.currentUser === null || typeof this.currentUser === 'undefined' ) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.subject.next(this.currentUser);
    }
    return this.subject.asObservable();
  }
}
