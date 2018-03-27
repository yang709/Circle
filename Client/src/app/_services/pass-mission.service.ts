// Used to shared current mission from one component to the other.
import { Injectable } from '@angular/core';
import { Mission } from '../_models/mission';
@Injectable()
export class PassMissionService {
  private currentMission = new Mission();

  setMission(mission: Mission) {
    this.currentMission = mission;
  }
  getMission() {
    return this.currentMission;
  }

}
