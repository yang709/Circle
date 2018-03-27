import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Mission } from '../_models/index';
@Injectable()
export class MissionService {
  constructor(private http: Http) { }
  getAll() {
    return this.http.get('/missions').map((response: Response) => response.json());
  }

  getByTitleAndTags (searchString: string) {
    return this.http.get( '/missions/find/' + searchString).map((response: Response) => response.json());
  }
  getById(_id: string) {
    return this.http.get('/missions/' + _id).map((response: Response) => response.json());
  }
  getByTitle(title: string) {
    return this.http.get('/missions/find/' + title).map((response: Response) => response.json());
  }
  create(mission: Mission) {
    return this.http.post('/missions/create', mission).map((response: Response) => response);
  }
  update(updatedMission: Mission) {
    return this.http.put('/missions/' + updatedMission._id, updatedMission);
  }
  // currently not plan to use this function.
  /*
  delete(_id: string) {
    return this.http.delete('/missions/' + _id);
  }*/
}
