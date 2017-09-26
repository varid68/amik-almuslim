import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RestApiProvider {

  constructor(public http: Http) {}

  getNews(){
    return this.http.get('https://knaggy-make.000webhostapp.com/public/amik')
      .map(this.extract);
  }

   private extract (res:Response){
    let body = res.json();

    return body || {};
  }

}
