import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  constructor(private http: Http) { }
  logIn(email: string, password: string) {
    return this.http.post('/users/authenticate', { email: email, password: password })
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        const user = response.json();
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      });
  }
  logOut() {
    localStorage.removeItem('currentUser');
  }
}
