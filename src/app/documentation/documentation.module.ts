import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { GuideComponent } from './guide/guide.component';
import { ReferenceComponent } from './reference/reference.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [IntroComponent, GuideComponent, ReferenceComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DocumentationModule { }
