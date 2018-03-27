import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { User } from '../../_models/index';
import { UserService, AuthService } from '../../_services/index';
import { ModalDirective } from 'ngx-bootstrap/modal';

import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [ UserService, AuthService ]
})

export class UserProfileComponent implements OnInit {
  currentUser: User;
  birthday: String;

  @ViewChild('childModal') public childModal: ModalDirective;

  constructor(private zone: NgZone,
                private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  ngOnInit() {
    this.birthday = moment(this.currentUser.birthday).format('L');
  }
  toRefresh(updatedUser: User) {
    this.currentUser = updatedUser;
    this.birthday = moment(this.currentUser.birthday).format('L');

  }
  backToHome() {
    this.router.navigate(['/home']);
  }


  /*public showChildModal() {
    this.childModal.show();
  }*
  /*
  public hideChildModal() {
    this.childModal.hide();
  }*/

}
