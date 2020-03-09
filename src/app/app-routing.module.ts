import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './api-list/components/intro/intro.component';
import { GuideComponent } from './api-list/components/guide/guide.component';
import { ReferenceComponent } from './api-list/components/reference/reference.component';
import { CardComponent } from './shared/components/card/card.component';


const appRoutes: Routes = [
  { path: '', component: CardComponent },
  { path: 'developer/documentation', component: CardComponent },
  { path: 'developer/en/api/dummy1/intro', component: IntroComponent },
  { path: 'developer/en/api/dummy1/guide', component: GuideComponent },
  { path: 'developer/en/api/dummy1/reference', component: ReferenceComponent }
  
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
