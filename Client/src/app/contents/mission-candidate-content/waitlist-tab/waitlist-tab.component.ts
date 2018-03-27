import { Component, OnInit, Input, NgZone, EventEmitter, Output } from '@angular/core';
import { User, Mission } from '../../../_models/index';
import { Router } from '@angular/router';
import { UserService, MissionService, InvWaitTabService } from '../../../_services/index';

@Component({
  selector: 'app-waitlist-tab',
  templateUrl: './waitlist-tab.component.html',
  styleUrls: ['./waitlist-tab.component.css']
})
export class WaitlistTabComponent implements OnInit {
  currentMission: Mission;
  candidates = [];
  // @Output() getMissionChange = new EventEmitter<Mission>();
  constructor(private router: Router,
              private missionService: MissionService,
              private userService: UserService,
              private invWaitTabService: InvWaitTabService,
              private zone: NgZone) {
    this.currentMission = new Mission();
    this.invWaitTabService.inviteTab$.subscribe(
      updatedCandidates => {
        console.log(updatedCandidates);
        this.candidates = updatedCandidates;
      });
  }
  ngOnInit() {

    this.reloadAll();
    console.log(this.currentMission);
  }
  reloadAll() {
    this.candidates = [];
    this.currentMission = JSON.parse(localStorage.getItem('currentMission'));
    const temp = [];
    for (let userId of this.currentMission.candidates) {
      this.userService.getById(userId).subscribe(
        res => {
          temp.push(res);
        }
      );
    }
    this.candidates = temp;
    const updatedInvited = [];
    for (let userId of this.currentMission.acceptors) {
      this.userService.getById(userId).subscribe(
        res => {
          updatedInvited.push(res);
          console.log(updatedInvited);
        }
      );
    }
    this.invWaitTabService.inWaitTab(updatedInvited);
    console.log(this.candidates);
  }
  onMissionChange(mission) {
    setTimeout( () => {
      this.reloadAll();
    }, 500);
  }
}
