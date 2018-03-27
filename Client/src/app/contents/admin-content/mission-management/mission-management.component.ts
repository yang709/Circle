import { Component, OnInit } from '@angular/core';
import { MissionService } from '../../../_services/index';
import { Mission } from '../../../_models/index';
@Component({
  selector: 'app-mission-management',
  templateUrl: './mission-management.component.html',
  styleUrls: ['./mission-management.component.css']
})
export class MissionManagementComponent implements OnInit {
  missions: Mission[] = [];
  constructor( private missionService: MissionService) { }

  ngOnInit() {
    this.loadAllMissions();
  }
  private loadAllMissions() {
   this.missionService.getAll().subscribe(missions => { this.missions = missions; });
  }
  /*
  deleteMission(_id: string) {
    this.missionService.delete(_id).subscribe(() => {
      this.loadAllMissions();
    });
  }*/
  deleteMission(mission: Mission) {
    mission.status = 233;
    this.missionService.update(mission).subscribe(() => {
      this.loadAllMissions();
    });
  }
}
