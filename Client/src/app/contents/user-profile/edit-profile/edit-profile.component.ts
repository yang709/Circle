import {Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { UserService, AlertService, PassCurrentuserService } from '../../../_services/index';
import { User } from '../../../_models/index';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  currentUser: User;
  updatedUser = new User();
  newDate: Date;
  @Output() toRefresh = new EventEmitter<User>();
  @ViewChild('childModal') public childModal: ModalDirective;
  constructor(private userService: UserService,
              private alertService: AlertService,
              private passCurrentUserService: PassCurrentuserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.updatedUser = this.currentUser;
  }

  public showChildModal() {
    this.alertService.clearAlert(); // Clear alert when open the modal.
    this.childModal.show();
  }

  public hideChildModal() {
    this.childModal.hide();
  }
  save() {
    this.currentUser.birthday = this.newDate;
    this.updatedUser.birthday = this.newDate;
    this.userService.update(this.updatedUser)
      .subscribe(
        data => {
          this.alertService.success('Update profile successful', true) ;
          this.toRefresh.emit(this.updatedUser);
          this.passCurrentUserService.setCurrentUser(this.updatedUser);
          // this.loading = false;
          this.hideChildModal();
        },
        error => {
          this.alertService.error(error);
        });
  }

}
