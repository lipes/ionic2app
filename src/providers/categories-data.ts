import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoriesData {

  constructor(public http: Http) {
    
  }

  getCategories() : Promise<Response>{
    return this.http.get("http://localhost:3000/categories").toPromise();
  }

  getCategoriesDetail(id: any) : Promise<Response>{
    return this.http.get("http://localhost:3000/categories-detail/" + id).toPromise();
  }
}
