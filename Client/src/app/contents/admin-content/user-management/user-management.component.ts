import { Component, OnInit } from '@angular/core';
import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  constructor( private userService: UserService ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
  }
  deleteUser(_id: string) {
    if (_id !== this.currentUser._id) {
      this.userService.delete(_id).subscribe(() => {
        this.loadAllUsers();
      });
    }
  }
  private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users; });
  }

}
