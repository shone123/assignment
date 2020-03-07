import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './documentation/intro/intro.component';
import { GuideComponent } from './documentation/guide/guide.component';
import { ReferenceComponent } from './documentation/reference/reference.component';
import { CardComponent } from './feature/components/card/card.component';


const appRoutes: Routes = [
  { path: 'documentation', component: CardComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'reference', component: ReferenceComponent }
  
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
