import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
@Injectable()
export class AuthGuard implements CanActivate {
  jwtHelper: JwtHelper = new JwtHelper();
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('currentUser')) {
      const currentUser = localStorage.getItem('currentUser');
      const token = JSON.parse(currentUser).token;
      if (!this.jwtHelper.isTokenExpired(token)) {
        return true; // Logged in and token is not expired
      }
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/logIn'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
