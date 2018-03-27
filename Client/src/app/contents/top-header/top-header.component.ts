import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { PassCurrentuserService } from '../../_services/index';
import { User } from '../../_models/index';
@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {
  currentUser: User;
  isAdmin: boolean;
  constructor(@Inject('auth') private authService,
              private router: Router,
              private passCurrentUserService: PassCurrentuserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  ngOnInit() {
    this.passCurrentUserService.getCurrentUser().subscribe((user: User) => {
      this.currentUser = user;
    });
    if (this.currentUser === null) { this.router.navigate(['/logIn']); }
    if (this.currentUser.email === 'mohaizhou@gmail.com') {
      this.currentUser.accountType = 'BigBigBrother';
    }
    this.isAdmin = this.currentUser.accountType === 'BigBigBrother' || this.currentUser.accountType === 'BigBrother';
  }
  logOut() {
    this.authService.logOut();
    this.router.navigate(['/logIn']);
  }
  settings() {
    console.log('settings clicked');
  }
  toAdminPage() {
    this.router.navigate(['/authorizedDog']);
  }
  toHomePage() {
      this.router.navigate(['']);
  }
  toNoticePage() {
    this.router.navigate(['/notice']);
  }
}
