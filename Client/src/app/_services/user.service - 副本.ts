import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';

import {User, Mission} from '../_models/index';

@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  private url = 'https://localhost:5000';

  constructor(private http: Http) {
  }

  getAll() {
    return this.http.get('/users').map((response: Response) => response.json());
  }

  getById(_id: string) {
    return this.http.get('/users/' + _id).map((response: Response) => response.json());
  }

  getByEmail(email: string) {
    return this.http.get('/users/find/' + email).map((response: Response) => response.json());
  }
  create(user: User) {
    return this.http.post('/users/register', user);
  }
  update(user: User) {
    if (user && user.token) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    return this.http.put('/users/' + user._id, user);
  }
  delete(_id: string) {
    return this.http.delete('/users/' + _id);
  }
  addMission(user: User, newMission: Mission) {
    user.postedMissions.push(newMission);
    this.update(user);
  }
}
