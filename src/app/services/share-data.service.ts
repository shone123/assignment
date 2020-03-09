import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private showSpinner:boolean = undefined;
  constructor() { }

    getData():boolean{
        return this.showSpinner;
    }
    setData(showSpinner:boolean){
      this.showSpinner = showSpinner;
    }

}
