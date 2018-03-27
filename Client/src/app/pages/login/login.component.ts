import { Component, OnInit, Inject } from '@angular/core';
import { AlertService } from '../../_services/index';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../_models/index';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { UsersignupComponent } from '../signup/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = new User();
  loading = false;
  returnUrl: string;
  alertBelong = false;
  constructor(
    @Inject('auth') private authService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.authService.logOut();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  logIn() {
    this.loading = true;
    this.alertBelong = true;
    this.authService.logIn(this.user.email, this.user.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  openSignUp() {
    this.alertBelong = false;
  }

  forgetpwd() {
    console.log('forget pwd');
  }

}
