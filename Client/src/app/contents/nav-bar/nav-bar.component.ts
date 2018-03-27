import { Component, OnInit, Inject, ViewChild, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../_models/index';
import { UserService, AuthService, PassCurrentuserService } from '../../_services/index';
import { ModalDirective } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [ UserService, AuthService ]
})

export class NavBarComponent implements OnInit {
  currentUser: User;
  @ViewChild('childModal') public childModal: ModalDirective;
  constructor( private passCurrentuserService: PassCurrentuserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  ngOnInit() {
    this.passCurrentuserService.getCurrentUser().subscribe((user: User) => {
      this.currentUser = user;
    });
  }
}
