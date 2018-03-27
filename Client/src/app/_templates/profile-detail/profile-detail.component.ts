import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { Router } from '@angular/router';
import { UserService } from '../../_services/user.service';
@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  user: User;
  currentUser: User;
  isMyContact: boolean;
  isMyBlock: boolean;
  constructor( private router: Router,
                private userService: UserService) { }
  ngOnInit() {
    this.isMyContact = false;
    this.isMyBlock = false;
    this.getUser();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.checkInContact();
    this.checkInBlock();
    console.log(this.currentUser);
    // localStorage.setItem('pass_user_profile', null);
  }
  getUser() {
    this.user = JSON.parse(localStorage.getItem('pass_user_profile'));
  }
  back() {
    const userSource = localStorage.getItem('userSource');
    if (userSource === 'missionList') {
      localStorage.setItem('userSource', 'contact');
      // console.log(localStorage.getItem('userSource'));
      this.router.navigate(['/candidates']);
    } else {
      this.router.navigate(['/myContacts']);
    }
  }
  checkInContact() {
    if (this.currentUser.contacts === null ||
      this.currentUser.contacts.length === 0 || this.currentUser.contacts.indexOf(this.user._id) < 0) {
      this.isMyContact = false;
    } else {
      this.isMyContact = true;
    }
  }
  checkInBlock() {
    if ( this.currentUser.blockedUsers === null ||
      this.currentUser.blockedUsers.length === 0 || this.currentUser.blockedUsers.indexOf(this.user._id) < 0) {
      this.isMyBlock = false;
    } else {
      this.isMyBlock = true;
    }
  }

  addContact() {
    if (this.currentUser.contacts === null || this.currentUser.contacts.length === 0) {
      this.currentUser.contacts = [];
    }
    this.currentUser.contacts.push(this.user._id);
    console.log('Add');
    console.log(this.currentUser);
    this.userService.update(this.currentUser).subscribe(
      (res) => {
        alert('You have added ' + this.user.nickname + ' as your contact.');
      }
    );
  }
  deleteContact() {
    const toRemoveIdx: number = this.currentUser.contacts.indexOf(this.user._id);
    console.log(toRemoveIdx);
    if (toRemoveIdx !== -1) {
      this.currentUser.contacts.splice(toRemoveIdx, 1);
    }
    this.userService.update(this.currentUser).subscribe(
      res => {
        this.router.navigate(['/myContacts']);
      }
    );
  }
  blockContact() {
    if (this.currentUser.blockedUsers === null || this.currentUser.blockedUsers.length === 0) {
      this.currentUser.blockedUsers = [];
    }
    this.currentUser.blockedUsers.push(this.user._id);
    this.deleteContact();
  }
}
