import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { RegisterComponent } from './Components/register/register.component';
import { OrgLoginComponent } from './componentsOrg/org-login/org-login.component';
import { OrgSignupComponent } from './componentsOrg/org-signup/org-signup.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './Components/main/main.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddExperienceComponent } from './components/add-experience/add-experience.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { Footer2Component } from './components/footer2/footer2.component';
import { AboutComponent } from './components/about/about.component';
import { AddeducationComponent } from './Components/addeducation/addeducation.component';
import { NotificationsComponent } from './Components/notifications/notifications.component';
import { MyNetworkComponent } from './Components/my-network/my-network.component';
import { RecommendationComponent } from './Components/my-network/recommendation/recommendation.component';
import { InvitationsComponent } from './Components/my-network/invitations/invitations.component';
import { FriendlistComponent } from './Components/my-network/friendlist/friendlist.component';
import { UserJobsComponent } from './Components/user-jobs/user-jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UserLoginComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    OrgLoginComponent,
    OrgSignupComponent,
    NavComponent,
    MainComponent,
    DashboardComponent,
    AddExperienceComponent,
    EditProfileComponent,
    CertificationsComponent,
    Footer2Component,
    AboutComponent,
    AddeducationComponent,
    NotificationsComponent,
    MyNetworkComponent,
    RecommendationComponent,
    InvitationsComponent,
    FriendlistComponent,
    UserJobsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
