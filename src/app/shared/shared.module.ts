import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpServiceService } from "../services/http-service.service";
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardComponent
  ]

})
export class SharedModule { }
