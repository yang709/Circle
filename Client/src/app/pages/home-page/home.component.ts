import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/index';
import { UserService, AuthService, AlertService, PassCurrentuserService } from '../../_services/index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ UserService, AuthService ]
})

export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  nickname: '';
  profileUrl: string;
  loading = false;
  constructor(private userService:  UserService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router,
              private alertService: AlertService,
              private passCurrentUserService: PassCurrentuserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    // this.passCurrentUserService.setCurrentUser(this.currentUser);
    // console.log(this.currentUser);
  }

}




