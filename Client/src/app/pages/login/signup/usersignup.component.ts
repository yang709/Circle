import {Component, ViewChild, OnInit, OnDestroy} from '@angular/core';
import * as moment from 'moment';
import {UserService, AlertService, PopOutMessageServiceService} from '../../../_services/index';
import {User} from '../../../_models/index';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css'],
  providers: [UserService]
})
export class UsersignupComponent implements OnInit, OnDestroy {
  user: User;
  loading = false;
  alertBelong: boolean;
  today: string;
  validDate: boolean;
  minDate: Date;
  maxDate: Date;
  agreementChecked: boolean;
  confirmPassword = '';
  isHuman: boolean;
  signUpSuccess: boolean;
  signUpErr: string;
  @ViewChild('childModal') public childModal: ModalDirective;

  constructor(private userService: UserService,
              private alertService: AlertService,
              private popOutMessageService: PopOutMessageServiceService) {
    this.alertBelong = false;
    this.user = new User();
  }

  ngOnInit() {
    this.alertBelong = false;
    this.today = moment(new Date()).format('L');
    this.validDate = false;
    this.minDate = new Date('January 1, 1900');
    this.maxDate = new Date();
    this.agreementChecked = false;
    this.user = new User();
    this.user.birthday = new Date();
    this.isHuman = false;
    this.signUpSuccess = false;
    console.log(this.alertBelong);


  }
  ngOnDestroy() {
    this.alertBelong = false;
  }
  /*open(content) {
   this.modalRef = this.modalService.open(content, { windowClass: 'signUp-modal' });
   }*/
  public iamHuman(event) {
    this.isHuman = true;
  }
  public showChildModal() {
    this.alertBelong = false;
    this.childModal.show();
  }

  public hideChildModal() {
    this.alertBelong = false;
    this.signUpSuccess = false;
    this.user = new User();
    this.agreementChecked = false;
    this.confirmPassword = '';
    this.childModal.hide();

    // this.alertService.clearAlert(); // Clear alert when open the modal.
  }

  checkBirthday(): void {
    if (typeof this.user.birthday === 'undefined' || this.user.birthday === null) {
      this.validDate = false;
      console.log('here');
    } else {
      if (this.user.birthday.getTime() - new Date().getTime() > 0) {
        this.validDate = false;
        console.log('there');
      } else {
        this.validDate = true;
      }
    }
  }

  signUp() {
    // if (this.agreementChecked && this.isHuman)
    this.alertBelong = true;
    if (this.agreementChecked) {
      this.user.nickname = this.user.firstName;
      this.user.circleCoin = 100; // Plan to add a tutorial. After user finished it, 100 coins will be added. Here is just for test.
      this.loading = true;
      this.user.works = new Array();
      this.user.skills = new Array();
      this.user.acceptedMissions = new Array();
      this.user.postedMissions = new Array();
      this.user.historyMissions = new Array();
      this.user.contacts = new Array();
      this.user.blockedUsers = new Array();
      this.user.myPictures = new Array();
      this.checkBirthday();
      this.userService.create(this.user)
        .subscribe(
          data => {
            this.signUpSuccess = true;
            console.log('here');
            // this.alertService.success('Registration successful', true);
            this.loading = false;
            setTimeout(() => {
              this.hideChildModal();
            }, 1000);
          },
          error => {
            this.signUpErr = error;
            this.isHuman = false;
            // this.alertService.error(error);
            this.loading = false;
          });
    }
  }

}
