import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { User, Mission } from '../../_models/index';
import { UserService, MissionService } from '../../_services/index';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css'],
})
export class HomeContentComponent implements OnInit {
  searchRes: string;
  // This part is just for demo.
  missionsNearby: Mission[];
  currentUser: User;
  noteUpdated: boolean;
  editingNow: boolean;
  constructor(private router: Router,
              private missionService: MissionService,
              private userService: UserService) { }
  ngOnInit() {
    this.missionsNearby = [];
    this.loadAllMissions();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.noteUpdated = false;
    console.log(this.currentUser);
  }
  private loadAllMissions() {
   this.missionService.getAll().subscribe(missions => { this.missionsNearby = missions; });
  }
  createNewMission() {
    this.router.navigate(['/newMission']);
  }
  toMissionSearch() {
    this.router.navigate(['/findMissions']);
  }
  updateNote() {
    this.userService.update(this.currentUser).subscribe();
    this.noteUpdated = true;
    // console.log(this.currentUser);
    setTimeout(() => {
      this.noteUpdated = false;
    }, 1000);
  }
}
