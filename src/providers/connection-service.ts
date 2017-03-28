import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';

@Injectable()
export class ConnectionService {

  constructor(public http: Http) {
    console.log('Hello ConnectionService Provider');
  }

  getCep() : Promise<Response>{
  	return this.http.get("https://viacep.com.br/ws/89209015/json").toPromise();
  }
}
