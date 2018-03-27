import {Component, OnInit} from '@angular/core';
import {User} from '../../_models/index';
import {UserService} from '../../_services/index';
import {Router} from '@angular/router';
@Component({
  selector: 'app-contacts-content',
  templateUrl: './contacts-content.component.html',
  styleUrls: ['./contacts-content.component.css']
})
export class ContactsContentComponent implements OnInit {
  myContactsId = [];
  myContacts = [];
  currentUser: User;
  hasContacts: boolean;
  constructor(private userService: UserService,
                private  router: Router) {
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.myContactsId = this.currentUser.contacts;
    if ( typeof this.myContactsId === 'undefined' || this.myContactsId.length === 0) {
      this.hasContacts = false;
    } else {
      this.hasContacts = true;
      for (const contactId of this.myContactsId) {
        this.userService.getById(contactId).subscribe(
          res => {
            this.myContacts.push(res);
            console.log(this.myContacts);
          }
        );
      }

    }
  }
  toFindContacts() {
    this.router.navigate(['/findContacts']);
  }

  backToHome() {
    this.router.navigate(['/home']);
  }
  /*
   searchById() {
   this.userService.getById( this.searchId )
   .subscribe( (user) => {
   this.searchRes = user;
   } );
   this.searchRes = new User();
   }*/

}
