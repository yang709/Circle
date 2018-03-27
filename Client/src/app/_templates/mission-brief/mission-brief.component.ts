import { Component, OnInit, Inject, Input } from '@angular/core';
import { Mission } from '../../_models/index';
import { Router } from '@angular/router';
import { PassMissionService, DateDiffService } from '../../_services/index';


@Component({
  selector: 'app-mission-brief',
  templateUrl: './mission-brief.component.html',
  styleUrls: ['./mission-brief.component.css']
})
export class MissionBriefComponent implements OnInit {
  @Input() mission: Mission;
  status: String;
  duration: string;
  deleted: boolean;
  constructor(@Inject('missionStatus') private missionStatusService,
                private router: Router,
                private passMissionService: PassMissionService,
                private dateDiffService: DateDiffService) {
  }
  ngOnInit() {
    this.status = this.missionStatusService.getStatus(this.mission.status);
    this.dateDiff();
    this.deleted = (this.status === 'DELETED');
  }
  toDetail() {
    this.passMissionService.setMission(this.mission);
    this.router.navigate(['/missionDetail']);
  }
  dateDiff() {
    this.duration = this.dateDiffService.dateDiff(new Date(), new Date(this.mission.postDate));
  }
}
