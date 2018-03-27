import {Component, OnInit, Inject} from '@angular/core';
import {Mission, User} from '../../_models/index';
import {Router} from '@angular/router';
import {UserService, PassCurrentuserService, MissionService} from '../../_services/index';


@Component({
  selector: 'app-new-mission',
  templateUrl: './new-mission.component.html',
  styleUrls: ['./new-mission.component.css']
})
export class NewMissionComponent implements OnInit {
  currentUser: User;
  mission: Mission;
  loading: boolean;
  minDate: Date;
  maxDate: Date;
  today: Date;
  hf: number; // hour format, 12 or 24
  newMission_id: string;
  public urgencies = [
    {value: true, display: 'Urgent'},
    {value: false, display: 'No Rush'}
  ];

  constructor(@Inject('compDate') private dateService,
              private userService: UserService,
              private router: Router,
              private passCurrentUserService: PassCurrentuserService,
              private missionService: MissionService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.mission = new Mission();
    this.today = new Date();
    this.loading = false;
    this.hf = 24;
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setMonth(this.today.getMonth());
    this.maxDate.setFullYear(this.today.getFullYear() + 20); // Latest end date is 20 years later from now.
    this.mission.urgency = false;
    this.mission.maxAcceptor = 1;
    this.mission.postDate = this.today;
    this.mission.startDate = this.today;
    this.mission.endDate = this.today;
    this.mission.status = 0;
    if (typeof this.currentUser.postedMissions === 'undefined') {
      this.currentUser.postedMissions = new Array();
    }
    this.newMission_id = '';
  }

  checkDate(): boolean { // validate the date and add post date
    const dates = this.dateService.checkDate(this.mission.startDate, this.mission.endDate);
    this.mission.startDate = dates.smallerDate;
    this.mission.endDate = dates.biggerDate;
    return true;
  }

  submit(): void {
    this.loading = true;
    // setTimeout(() => {
    this.mission.posterId = this.currentUser._id;
    this.mission.posterNickname = this.currentUser.nickname;
    this.mission.candidates = new Array();
    this.mission.acceptors = new Array();
    this.mission.tags = new Array();
    this.mission.comments = new Array();
    this.missionService.create(this.mission)
      .subscribe(
        res => {
          this.newMission_id = res.text();
          this.currentUser.postedMissions.push(this.newMission_id);
          // update user on the back end.
          this.userService.update(this.currentUser).subscribe();
          // update current user in the service
          // console.log(this.currentUser);
          this.passCurrentUserService.setCurrentUser(this.currentUser);
          this.router.navigate(['/myMissions']);
        },
        error => {
          console.log('Error: ' + error);
        },
        function () {
          console.log('subscription is completed');
        }
      );
    // }, 1000);
  }
  restrictPayment(event) {
    this.restrictNumber(event, this.mission.payment, 0, this.currentUser.circleCoin);
  }
  restrictAcceptor(event) {
    this.restrictNumber(event, this.mission.maxAcceptor, 1, 1000);
  }
  restrictNumber(event, value, min, max) {
    if (value < min) {
      value = min;
    } else if (value > max) {
      value = max;
    }
  }
  backToHome(): void {
    this.router.navigate(['/home']);
  }

}
