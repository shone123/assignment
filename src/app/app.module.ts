
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
//import {MatProgressSpinnerModule} from '@angular/material'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'

import { IntroComponent } from './documentation/intro/intro.component';
import { GuideComponent } from './documentation/guide/guide.component';
import { ReferenceComponent } from './documentation/reference/reference.component';
import { HttpServiceService } from "./services/http-service.service";
import { SharedModule } from './shared/shared.module';
import { DocumentationLandingComponent } from './layout/documentation-landing/documentation-landing.component';


@NgModule({
  declarations: [
    AppComponent,    
    IntroComponent,
    GuideComponent,
    ReferenceComponent,
    DocumentationLandingComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MatCardModule,
    AppRoutingModule,
    SharedModule   
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }







