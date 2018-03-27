import {Component, OnInit} from '@angular/core';
import {Mission, User, Comment} from '../../_models/index';
import {UserService, MissionService, MissionStatusService, PassMissionService, DateDiffService} from '../../_services/index';
import {Router} from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.component.html',
  styleUrls: ['./mission-detail.component.css']
})
export class MissionDetailComponent implements OnInit {
  currentMission: Mission;
  currentUser: User;
  poster: User;
  duration: any;
  startDate: any;
  endDate: any;
  urgency: string;
  canAccept: boolean;
  missionStarted: boolean;
  isPoster: boolean;
  // isCandidate: boolean;
  // isAcceptor: boolean;
  statusDisplay: string;
  payment: string;
  myComment: string;
  constructor(private passMissionService: PassMissionService,
              private missionService: MissionService,
              private missionStatusService: MissionStatusService,
              private dateDiffService: DateDiffService,
              private userService: UserService,
              private router: Router) {
    this.poster = new User();
  }

  ngOnInit() {
    this.currentMission = this.passMissionService.getMission();
    if (typeof this.currentMission.title === 'undefined') {
      this.router.navigate(['/myMissions']);
    }
    this.canAccept = false;
    this.missionStarted = false;
    this.isPoster = false;
    // this.isCandidate = false;
    // this.isAcceptor = false;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.getPoster();
    this.duration = this.dateDiffService.dateDiff(new Date(), new Date(this.currentMission.postDate));
    this.startDate = moment(this.currentMission.startDate).format('L');
    this.endDate = moment(this.currentMission.endDate).format('L');
    if (this.currentMission.urgency) {
      this.urgency = 'Urgent';
    } else {
      this.urgency = 'No Rush';
    }
    if (typeof this.currentMission.payment === 'undefined' || this.currentMission.payment <= 0) {
      this.payment = 'No payment';
    } else {
      this.payment = '' + this.currentMission.payment + ' $';
    }
    if (typeof this.currentMission.comments === 'undefined') {
      this.currentMission.comments = [];
    }
    this.checkMissionStatus();
  }
  getPoster() {
    this.userService.getById(this.currentMission.posterId).subscribe(
      res => {
        this.poster = res;
      }
    );
  }
  toPosterProfile() {
    localStorage.setItem('pass_user_profile', JSON.stringify(this.poster));
    this.router.navigate(['/userDetail']);
  }
  toCandidateList() {
    localStorage.setItem('currentMission', JSON.stringify(this.currentMission));
    this.router.navigate(['/candidates']);
  }
  checkMissionStatus() { // check if the current user is the poster or already accepted or being a candidate.
    console.log((this.currentMission.acceptors));
    this.statusDisplay = this.missionStatusService.getStatus(this.currentMission.status);
    if (this.currentMission.status > 0) {
      this.missionStarted = true;
    } else {
      if (this.currentMission.posterId === this.currentUser._id) {
        this.isPoster = true;
      } else {
        if (this.currentMission.candidates !== null && typeof this.currentMission.candidates !== 'undefined'
          && this.currentMission.candidates.some(x => x === this.currentUser._id)) {
          // current user is on the candidate list, can no longer accept the mission.
        } else if (this.currentMission.acceptors !== null && typeof this.currentMission.acceptors !== 'undefined'
          && this.currentMission.acceptors.some(x => x === this.currentUser._id)) {
          // current user is on the acceptor list, display mission progress.
        } else {
          this.canAccept = true;
        }
      }
    }
    console.log(this.statusDisplay);
    console.log(this.missionStarted);
  }

  back() {
    this.router.navigate(['/home']);
  }

  acceptMission() {
    // if this.currentUser does not have this mission
    if (typeof this.currentUser.acceptedMissions === 'undefined') {
      this.currentUser.acceptedMissions = [];
    }
    if (typeof this.currentMission.candidates === 'undefined') {
      this.currentMission.candidates = [];
    }
    this.currentUser.acceptedMissions.push(this.currentMission._id);
    this.currentMission.candidates.push(this.currentUser._id);
    console.log(this.currentMission);
    console.log(this.currentUser);
    this.userService.update(this.currentUser).subscribe(
      res => {
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      }
    );
    this.missionService.update(this.currentMission).subscribe(
      res => {
        console.log(this.currentMission);
      }
    );
    this.router.navigate(['/home']);
  }


  submitComment() {
    const newComment = new Comment();
    newComment.content = this.myComment;
    newComment.postDate = new Date();
    newComment.posterId = this.currentUser._id;
    newComment.posterNickname = this.currentUser.nickname;
    newComment.missionId = this.currentMission._id;
    newComment.activity = true;
    this.currentMission.comments.push(newComment);
  }


  printInfo() {
    console.log(this.currentMission);
    console.log(this.currentUser);
    console.log(this.startDate);
    console.log(typeof this.currentMission.payment);
    console.log(this.currentMission.comments);
    // console.log(this.userService.getById(this.currentMission.posterId));
  }


}
