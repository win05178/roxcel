import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: Http) { }
  server = '';

 public  post(url, params, callback = null) {
    const data = {data: params};
    const header = new Headers();
    header.append('Content-Type',  'application/x-www-form-urlencoded');
    const option = new RequestOptions(
      {
        headers : header
      }
    );
    this.http.post(url, data , option).subscribe((respone) => {
      try {
        const obj = respone.json();
        if (callback !== null) {
          callback(obj);
        }
      } catch (e) {


      }

    });
  }

}
