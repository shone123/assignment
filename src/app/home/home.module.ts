import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
//import { HeaderComponent } from '../shared/shared.module'
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    BrowserModule
    
  ]
})
export class HomeModule { }
