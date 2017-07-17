import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  baseUrl = "http://ih-api.herokuapp.com"

  constructor(private myHttp: Http) { }


  getList() {
    let endPoint = "/characters"
    return this.myHttp.get(this.baseUrl+endPoint)
      .toPromise()
      .then(res => res.json());
  }

  getOne(id: number){
    let endPoint = "/characters/" + id;
    return this.myHttp.get(this.baseUrl+endPoint)
      .toPromise()
      .then(res => res.json());
  }

  createNew (newCharacter) {
    let endPoint = "/characters"
    return this.myHttp.post(this.baseUrl + endPoint, newCharacter )
      .toPromise()
      .then(res => res.json());

  }

  editOne (id, editted) {
    let endPoint = "/characters/" + id;
    return this.myHttp.patch(this.baseUrl + endPoint, editted)
      .toPromise()
      .then(res => res.json());
  }

  deleteOne (id: number) {
    let endPoint="/characters/" + id;
    this.myHttp.delete(this.baseUrl+endPoint)
      .toPromise()
      .then(()=>null);
  }

}
