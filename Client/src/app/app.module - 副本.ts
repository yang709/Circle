import { BrowserModule } from '@angular/platform-browser';
import { Component, ElementRef, NgModule, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { BaseRequestOptions, HttpModule, JsonpModule} from '@angular/http';
import { CalendarPageComponent, ContactPageComponent, HomeComponent, LoginComponent, MapPageComponent,
MessageDetailPageComponent, MessagePageComponent, MissionDetailPageComponent, MymissionPageComponent,
NewmissionPageComponent, ProfilePageComponent, UsersignupComponent} from './pages/index';
import { HomeContentComponent, MapContentComponent, MessageContentComponent, MyMissionComponent,
  NavBarComponent, NewMissionComponent, TopHeaderComponent, UserProfileComponent,
  EditProfileComponent, PostedTabComponent, AcceptedTabComponent, HistoryTabComponent} from './contents/index';
import { routing } from './app.route';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  AuthService, AlertService, UserService,
  CompareDateService,  MissionStatusService, PassMissionService, PassCurrentuserService,
  DateDiffService, MissionService} from './_services/index';
import { AppComponent } from './app.component';
import { AlertComponent } from './_directive/alert/alert.component';
import { AuthGuard } from './_guards/auth.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReversePipe } from './_pipes/orderbyReverse';

import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';

import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
import { InputTextareaModule, EditorModule, SharedModule, AccordionModule, CalendarModule } from 'primeng/primeng';

import { MissionDetailComponent } from './_templates/mission-detail/mission-detail.component';
import { MissionBriefComponent } from './_templates/mission-brief/mission-brief.component';
import { SlimScrollModule } from 'ng2-slimscroll';
import { RadioButtonModule, CheckboxModule } from 'primeng/primeng';
import { CommentTemplateComponent } from './_templates/comment-template/comment-template.component';
import { MessageBriefComponent } from './_templates/message-brief/message-brief.component';
import { MessageDetailComponent } from './_templates/message-detail/message-detail.component';
import { customHttpProvider } from './_helpers/index';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ContactsContentComponent } from './contents/contacts-content/contacts-content.component';
import { AdminContentComponent } from './contents/admin-content/admin-content.component';
import { MissionManagementComponent } from './contents/admin-content/mission-management/mission-management.component';
import { UserManagementComponent } from './contents/admin-content/user-management/user-management.component';
import { AdminManagementComponent } from './contents/admin-content/admin-management/admin-management.component';
import { ProfileBriefComponent } from './_templates/profile-brief/profile-brief.component';
import { ProfileDetailComponent } from './_templates/profile-detail/profile-detail.component';
import { UserDetailPageComponent } from './pages/user-detail-page/user-detail-page.component';
import { FindcontactsPageComponent } from './pages/findcontacts-page/findcontacts-page.component';
import { FindcontactContentComponent } from './contents/findcontact-content/findcontact-content.component';
import { ContactprofilePageComponent } from './pages/contactprofile-page/contactprofile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersignupComponent,
    AlertComponent,
    HomeComponent,
    UserProfileComponent,
    EditProfileComponent,
    NavBarComponent,
    HomeContentComponent,
    ProfilePageComponent,
    CalendarPageComponent,
    NewMissionComponent,
    MapPageComponent,
    MapContentComponent,
    ContactPageComponent,
    MessagePageComponent,
    NewmissionPageComponent,
    TopHeaderComponent,
    MymissionPageComponent,
    MyMissionComponent,
    PostedTabComponent,
    AcceptedTabComponent,
    HistoryTabComponent,
    MissionDetailComponent,
    MissionBriefComponent,
    MissionDetailPageComponent,
    CommentTemplateComponent,
    MessageDetailPageComponent,
    MessageBriefComponent,
    MessageDetailComponent,
    MessageContentComponent,
    AdminPageComponent,
    ContactsContentComponent,
    AdminContentComponent,
    MissionManagementComponent,
    UserManagementComponent,
    AdminManagementComponent,
    ReversePipe,
    ProfileBriefComponent,
    ProfileDetailComponent,
    UserDetailPageComponent,
    FindcontactsPageComponent,
    FindcontactContentComponent,
    ContactprofilePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot(),
    ModalModule.forRoot(),
    AgmCoreModule.forRoot({
      libraries: ['places']
    }),
    JsonpModule,
    ReactiveFormsModule,
    Angular2FontAwesomeModule,
    AccordionModule,
    InputTextareaModule,
    EditorModule,
    SharedModule,
    CalendarModule,
    BrowserAnimationsModule,
    SlimScrollModule,
    RadioButtonModule,
    CheckboxModule
  ],
  providers: [
    { provide: 'auth', useClass: AuthService},
    { provide: 'compDate', useClass: CompareDateService},
    { provide: 'missionStatus', useClass: MissionStatusService},
    DateDiffService,
    PassMissionService,
    PassCurrentuserService,
    AuthGuard,
    AlertService,
    UserService,
    customHttpProvider,
    BaseRequestOptions,
    MissionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
