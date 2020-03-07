import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { GuideComponent } from './guide/guide.component';
import { ReferenceComponent } from './reference/reference.component';



@NgModule({
  declarations: [IntroComponent, GuideComponent, ReferenceComponent],
  imports: [
    CommonModule
  ]
})
export class DocumentationModule { }
