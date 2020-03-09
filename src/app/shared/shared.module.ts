import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpServiceService } from "../services/http-service.service";
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';

import { NavComponent } from './components/nav/nav.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    AppRoutingModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    NavComponent,
    LoaderComponent
  ]

})
export class SharedModule { }
