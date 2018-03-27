import {Component, OnInit} from '@angular/core';
import {User, Mission} from '../../../../_models/index';
import {UserService, MissionService} from '../../../../_services/index';

@Component({
  selector: 'app-history-tab',
  templateUrl: './history-tab.component.html',
  styleUrls: ['./history-tab.component.css']
})
export class HistoryTabComponent implements OnInit {
  currentUser: User;
  historyMissions: Mission[] = [];
  constructor(private  missionService: MissionService,
                private userService: UserService) { }

  ngOnInit() {
    const userId = JSON.parse(localStorage.getItem('currentUser'))._id;
    this.userService.getById(userId).subscribe(
      res => {
        console.log(res);
        this.currentUser = res;
        this.getHistoryMissions(this.currentUser);
      }
    );
  }
  getHistoryMissions(user: User) {
    if ( user.historyMissions !== null && typeof  user.historyMissions !== 'undefined' && user.historyMissions.length > 0) {
      for (const mission_id of user.historyMissions) {
        this.missionService.getById(mission_id).subscribe(
          res => {
            this.historyMissions.push(res);
          }
        );
      }
    }
  }
}
