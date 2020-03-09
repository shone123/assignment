import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import { HttpServiceService } from "../../../services/http-service.service";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

apilist: any = [];
introLink: string;
guideLink: string;
referenceLink: string;
showSpinner: boolean = true;
finished : boolean = false;
dataInitial: number = 0;
dataLength: number = 3;
scroll_data_start: number = 0

//apilist$: Observable<apilist>;
  constructor(private apilistservice: HttpServiceService) { }

  ngOnInit(): void {

	this.getAPIList(this.dataInitial);
  }
  
  getAPIList(limit) {
		this.apilistservice.getApiList().subscribe(
			(response) => {
			//if (response.status === 200) {
				//this.showSpinner = false;
				if (limit > 8) return;
				for( let i = limit; i< this.dataLength; i++ ) {

					this.apilist.push(response[i]);
				}
				setTimeout(()=>{
				this.showSpinner = false;
				},1000)
				
				this.apilist.forEach((items:any, index:any) =>{
					this.introLink = items.links.introUrl;
					this.guideLink = items.links.guideUrl;
					this.referenceLink = items.links.referenceUrl;
				}) 				
				console.log(this.apilist)
			//}
			//else
				//console.log(response.message);
			//}, (err) => {
			//console.log(err);
			}
	);
  }
  onScroll () {
	  console.log("scrolled");
	  this.showSpinner = true;
	  this.scroll_data_start = this.dataInitial;
	  this.dataLength = this.dataInitial =+ 4;
	  this.getAPIList(this.scroll_data_start);	  
  }

}
