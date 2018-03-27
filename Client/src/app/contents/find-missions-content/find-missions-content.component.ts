import { Component, OnInit } from '@angular/core';
import { Mission } from '../../_models/Mission';
import { MissionService } from '../../_services/index';
import { Router } from '@angular/router';
@Component({
  selector: 'app-find-missions-content',
  templateUrl: './find-missions-content.component.html',
  styleUrls: ['./find-missions-content.component.css']
})
export class FindMissionsContentComponent implements OnInit {
  searchTitleAndTags: string;
  searchRes: Mission[];
  constructor( private missionService: MissionService,
                private router: Router) {
  }
  ngOnInit() {
  }
  searchMissionByTitleAndTags () {
    this.missionService.getByTitleAndTags(this.searchTitleAndTags).subscribe(
      missions => {
        this.searchRes = missions;
      }
    );
  }
  backToHome() {
    this.router.navigate(['/home']);
  }
}
