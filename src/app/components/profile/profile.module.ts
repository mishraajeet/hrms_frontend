import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { OverviewComponent } from './overview/overview.component';
import { NewsletterComponent } from './newsletter/newsletter.component';


@NgModule({
  declarations: [
    ProfileComponent,
    OverviewComponent,
    NewsletterComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
