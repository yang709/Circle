import {Component, OnInit} from '@angular/core';
import {User, Mission} from '../../../../_models/index';
import {MissionService, UserService} from '../../../../_services/index';
@Component({
  selector: 'app-posted-tab',
  templateUrl: './posted-tab.component.html',
  styleUrls: ['./posted-tab.component.css']
})
export class PostedTabComponent implements OnInit {
  currentUser: User;
  postedMissions: Mission[] = [];

  constructor( private  missionService: MissionService,
                private userService: UserService) {
  }

  ngOnInit() {
    const userId = JSON.parse(localStorage.getItem('currentUser'))._id;
    this.userService.getById(userId).subscribe(
      res => {
        console.log(res);
        this.currentUser = res;
        this.getPostedMissions(this.currentUser);
      }
    );
  }
  getPostedMissions(user: User) {
    if ( typeof  user.postedMissions !== 'undefined' && user.postedMissions.length > 0) {
      for (const mission_id of user.postedMissions) {
        this.missionService.getById(mission_id).subscribe(
          res => {
            console.log(res);
            this.postedMissions.push(res);
          }
        );
      }
    }
  }

}
