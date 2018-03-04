import { Injectable } from '@angular/core';
import { Http,Response} from "@angular/http";

import 'rxjs/add/operator/map';﻿
import {Observable} from 'rxjs/Rx';
@Injectable()
export class DataService {

  constructor(private http : Http) { }
 private _url : string = "https://nn-ninja-783ef.firebaseio.com/.json"
// private _url : string = "assets/ninjas.json"
fetchData()
{
  return this.http.get(this._url).map(
    (response : Response) => response.json()
  );
}
}
