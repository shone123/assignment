
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
//import {MatProgressSpinnerModule} from '@angular/material'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'

import { HttpServiceService } from "./services/http-service.service";
import { SharedModule } from './shared/shared.module';
import { DocumentationLandingComponent } from './layout/documentation-landing/documentation-landing.component';
import { IntroComponent } from './api-list/components/intro/intro.component';
import { GuideComponent } from './api-list/components/guide/guide.component';
import { ReferenceComponent } from './api-list/components/reference/reference.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,    
      IntroComponent,
      GuideComponent,
      ReferenceComponent,
      DocumentationLandingComponent,
      HomeComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MatCardModule,
    AppRoutingModule,
    SharedModule,
    InfiniteScrollModule   
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }







