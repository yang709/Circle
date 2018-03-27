import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/index';
import { UserService } from '../../_services/index';
import { Router } from '@angular/router';
@Component({
  selector: 'app-findcontact-content',
  templateUrl: './findcontact-content.component.html',
  styleUrls: ['./findcontact-content.component.css']
})
export class FindcontactContentComponent implements OnInit {
  searchContacts: string;
  searchRes: User;
  searched: boolean;
  searchErr: boolean;
  searchMyself: boolean;
  currentUser: User;
  constructor(private userService: UserService,
              private  router: Router) { }
  ngOnInit() {
    this.searchRes = new User();
    this.searched = false;
    this.searchErr = false;
    this.searchMyself = false;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  searchContact() {
    this.userService.getByEmail(this.searchContacts)
      .subscribe(
        (user) => {
          if (typeof user._id === 'undefined') {
            this.searched = false;
            this.searchErr = true;
            this.searchMyself = false;
          } else if (user._id === this.currentUser._id) {
            this.searchMyself = true;
            this.searched = false;
          } else {
            this.searchMyself = false;
            this.searched = true;
            this.searchErr = false;
            this.searchRes = user;
            localStorage.setItem('contactSearch', JSON.stringify(this.searchRes));
          }
        },
        (err) => {
          console.log('User Search Error!');
          this.searchErr = true;
        }
      );
  }
  backToMyContact() {
    this.router.navigate(['/myContacts']);
  }
}
