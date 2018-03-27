import { Component, OnInit, Input, Output, EventEmitter, NgZone } from '@angular/core';
import { User, Mission } from '../../../_models/index';
import { Router } from '@angular/router';
import { UserService, MissionService, InvWaitTabService } from '../../../_services/index';

@Component({
  selector: 'app-invited-tab',
  templateUrl: './invited-tab.component.html',
  styleUrls: ['./invited-tab.component.css']
})
export class InvitedTabComponent implements OnInit {
  currentMission: Mission;
  acceptors = [];
  // @Output() getMissionChange = new EventEmitter<Mission>();
  constructor(private router: Router,
              private missionService: MissionService,
              private userService: UserService,
              private invWaitTabService: InvWaitTabService,
              private zone: NgZone) {
    this.currentMission = new Mission();
    this.invWaitTabService.waitTab$.subscribe(
      updatedAcceptors => {
        console.log(updatedAcceptors);
        this.acceptors = updatedAcceptors;
    });
  }
  ngOnInit() {

    this.reloadAll();
    console.log(this.currentMission);
  }
  reloadAll() {
    this.acceptors = [];
    this.currentMission = JSON.parse(localStorage.getItem('currentMission'));
    const temp = [];
    for (let userId of this.currentMission.acceptors) {
      this.userService.getById(userId).subscribe(
        res => {
          temp.push(res);
        }
      );
    }
    this.acceptors = temp;
    const updatedWait = [];
    for (let userId of this.currentMission.candidates) {
      this.userService.getById(userId).subscribe(
        res => {
          updatedWait.push(res);
        }
      );
    }
    this.invWaitTabService.inInvTab(updatedWait);
  }
  onMissionChange(mission) {
    setTimeout( () => {
      this.reloadAll();
    }, 500);
  }

}
