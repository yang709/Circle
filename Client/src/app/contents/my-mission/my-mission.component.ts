import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-mission',
  templateUrl: './my-mission.component.html',
  styleUrls: ['./my-mission.component.css']
})
export class MyMissionComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome(): void {
    console.log('return clicked');
    this.router.navigate(['/home']);
  }

}
