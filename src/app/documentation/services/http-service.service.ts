import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { map} from 'rxjs/operators';
import {Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {


  constructor(private http:HttpClient) {

    }

    getApiList(): Observable<any> {
    	return this.http.get("assets/api.json");
  	};

}
