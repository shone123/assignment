import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './components/intro/intro.component';
import { GuideComponent } from './components/guide/guide.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [IntroComponent, GuideComponent, ReferenceComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DocumentationModule { }
