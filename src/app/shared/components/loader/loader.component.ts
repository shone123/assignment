import { Component, OnInit } from '@angular/core';
import { ShareDataService } from "../../../services/share-data.service";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  showSpinner: boolean = true;
  constructor(private share_service: ShareDataService) { }

  ngOnInit(): void {
      setTimeout(() => {
        this.showSpinner = this.share_service.getData();
      }, 1000);
  }

}
