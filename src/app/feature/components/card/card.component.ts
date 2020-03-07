import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import { HttpServiceService } from "../../../documentation/services/http-service.service";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

apilist: any = [];
//apilist$: Observable<apilist>;
  constructor(private apilistservice: HttpServiceService) { }

  ngOnInit(): void {

  	this.apilistservice.getApiList().subscribe(
	      (response) => {
	        //if (response.status === 200) {
	          this.apilist = response;
	          console.log(this.apilist)
	        //}
	        //else
	          //console.log(response.message);
	      //}, (err) => {
	        //console.log(err);
	      }
    );
  }


    

}
