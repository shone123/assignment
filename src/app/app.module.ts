
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './feature/components/header/header.component';
import { FooterComponent } from './feature/components/footer/footer.component';
import { CardComponent } from './feature/components/card/card.component';

import { IntroComponent } from './documentation/intro/intro.component';
import { GuideComponent } from './documentation/guide/guide.component';
import { ReferenceComponent } from './documentation/reference/reference.component';
import { HttpServiceService } from "./documentation/services/http-service.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,    
    IntroComponent,
    GuideComponent,
    ReferenceComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MatCardModule,
    AppRoutingModule
      
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }







