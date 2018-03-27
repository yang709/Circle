import { Component, OnInit, NgZone } from '@angular/core';
import { User, Mission } from '../../_models/index';
import { Router } from '@angular/router';
import { UserService, MissionService } from '../../_services/index';
@Component({
  selector: 'app-mission-candidate-content',
  templateUrl: './mission-candidate-content.component.html',
  styleUrls: ['./mission-candidate-content.component.css']
})
export class MissionCandidateContentComponent implements OnInit {
  currentMission: Mission;
  candidates: User[];
  acceptors: User[];
  constructor(private router: Router,
              private missionService: MissionService,
              private userService: UserService,
              private zone: NgZone) {
  }

  ngOnInit() {
    this.candidates = [];
    this.acceptors = [];
    const currentMissionId = JSON.parse(localStorage.getItem('currentMission'))._id;
    this.getLatestMission(currentMissionId);
    this.currentMission = JSON.parse(localStorage.getItem('currentMission'));
    for (const userid of this.currentMission.candidates) {
      this.userService.getById(userid).subscribe(
        res => {
          // console.log(res);
          this.candidates.push(res);
        }
      );
    }
    for (const userid of this.currentMission.acceptors) {
      this.userService.getById(userid).subscribe(
        res => {
          // console.log(res);
          this.acceptors.push(res);
        }
      );
    }
  }
  getLatestMission(_id: string) {
    this.missionService.getById(_id).subscribe(
      res => {
        localStorage.setItem('currentMission', JSON.stringify(res));
      },
      err => {
        console.log('Cannot find this mission!');
      }
    );
  }

  backToHome() {
    this.router.navigate(['/home']);
  }



}
