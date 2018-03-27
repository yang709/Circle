import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, HomeComponent, ProfilePageComponent, MapPageComponent,
  NewmissionPageComponent, MymissionPageComponent, MissionDetailPageComponent,
  MessagePageComponent, MessageDetailPageComponent, AdminPageComponent,
  ContactPageComponent, UserDetailPageComponent, FindcontactsPageComponent, FindMissionsPageComponent,
 MissionCandidatePageComponent, NoticePageComponent} from './pages/index';
import { EditProfileComponent } from './contents/index';
import { AuthGuard } from './_guards/index';


export const routes: Routes = [
  { path: '',             component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home',         component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'logIn',        component: LoginComponent },
  { path: 'myProfile',    component: ProfilePageComponent },
  { path: 'editProfile',  component: EditProfileComponent },
  { path: 'map',          component: MapPageComponent },
  { path: 'newMission',   component: NewmissionPageComponent},
  { path: 'myMissions',   component: MymissionPageComponent},
  { path: 'missionDetail', component: MissionDetailPageComponent},
  { path: 'myMessages', component: MessagePageComponent },
  { path: 'myChat', component: MessageDetailPageComponent},
  { path: 'myContacts', component: ContactPageComponent},
  { path: 'userDetail', component: UserDetailPageComponent},
  { path: 'findContacts', component: FindcontactsPageComponent},
  { path: 'findMissions', component: FindMissionsPageComponent},
  { path: 'candidates', component: MissionCandidatePageComponent},
  { path: 'notice', component: NoticePageComponent},
    // admin page
  { path: 'authorizedDog', component: AdminPageComponent},
    // otherwise redirect to home
  { path: '**', redirectTo: '', pathMatch: 'full'}

];

export const routing = RouterModule.forRoot (routes, {useHash: true}); // without using hash, routing will be buggy.
