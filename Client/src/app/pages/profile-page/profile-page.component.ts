import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService, AuthService, AlertService } from '../../_services/index';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  providers: [ AuthService ]
})

export class ProfilePageComponent implements OnInit {

  constructor(private userService:  UserService,
              private alertService: AlertService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

}
