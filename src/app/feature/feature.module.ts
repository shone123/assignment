import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpServiceService } from "../documentation/services/http-service.service";



@NgModule({
  declarations: [CardComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class FeatureModule { }
