import {Component, OnInit} from '@angular/core';
import {User, Mission} from '../../../../_models/index';
import {UserService, MissionService} from '../../../../_services/index';

@Component({
  selector: 'app-accepted-tab',
  templateUrl: './accepted-tab.component.html',
  styleUrls: ['./accepted-tab.component.css']
})
export class AcceptedTabComponent implements OnInit {
  currentUser: User;
  acceptedMissions: Mission[] = [];

  constructor(private  missionService: MissionService,
                private userService: UserService) {
  }

  ngOnInit() {
    const userId = JSON.parse(localStorage.getItem('currentUser'))._id;
    console.log(userId);
    this.userService.getById(userId).subscribe(
      res => {
        console.log(res);
        this.currentUser = res;
        this.getAcceptedMissions();
      }
    );
    // console.log(this.currentUser);
  }

  getAcceptedMissions() {
    console.log(this.currentUser);
    if ( this.currentUser !== null
      && typeof this.currentUser.acceptedMissions !== 'undefined'
      && this.currentUser.acceptedMissions.length > 0) {
      for (const mission_id of this.currentUser.acceptedMissions) {
        this.missionService.getById(mission_id).subscribe(
          res => {
            this.acceptedMissions.push(res);
          },
          err => {
          }
        );
      }
    }
  }
}
