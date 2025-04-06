import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { OverviewComponent } from './overview/overview.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

const routes: Routes = [{ path: '', component: ProfileComponent,
  children:[
    { path: '', component: OverviewComponent },
    // { path: 'newsletter', component: NewsletterComponent }
]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
