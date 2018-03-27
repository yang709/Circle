import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User, Mission } from '../../_models/index';
import { Router } from '@angular/router';
import { MissionService } from '../../_services/mission.service';

@Component({
    selector: 'app-profile-brief',
  templateUrl: './profile-brief.component.html',
  styleUrls: ['./profile-brief.component.css']
})
export class ProfileBriefComponent implements OnInit {
  @Input() user: User;
  @Input() relatedMission: Mission;
  @Input() invitedStatus: string;
  @Output() getMissionChange = new EventEmitter<Mission>();
  constructor(private router: Router,
              private missionService: MissionService) { }

  ngOnInit() {
  }
  toDetail() {
    localStorage.setItem('pass_user_profile', JSON.stringify(this.user));
    if (this.relatedMission !== null && (this.invitedStatus === 'waitList'
    || this.invitedStatus === 'invited')) {
      localStorage.setItem('userSource', 'missionList');
    }
    this.router.navigate(['/userDetail']);
  }

  addRemoveUserToMission () {
    if (this.invitedStatus === 'waitList') {
      const idx: number = this.relatedMission.acceptors.indexOf(this.user._id);
      if (idx === -1) {
        this.relatedMission.acceptors.push(this.user._id);
      }
      const index: number = this.relatedMission.candidates.indexOf(this.user._id);
      if (index !== -1) {
        this.relatedMission.candidates.splice(index, 1);
      }
    } else {
      const idx: number = this.relatedMission.candidates.indexOf(this.user._id);
      if (idx === -1) {
        this.relatedMission.candidates.push(this.user._id);
      }
      const index: number = this.relatedMission.acceptors.indexOf(this.user._id);
      if (index !== -1) {
        this.relatedMission.acceptors.splice(index, 1);
      }
    }
    this.missionService.update(this.relatedMission).subscribe(
      res => {
        this.getMissionChange.emit(this.relatedMission);
        localStorage.setItem('currentMission', JSON.stringify(this.relatedMission));
      }
    );
  }
}
