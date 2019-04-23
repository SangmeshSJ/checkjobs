import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { RegisterComponent } from './Components/register/register.component';
import { OrgLoginComponent } from './componentsOrg/org-login/org-login.component';
import { OrgSignupComponent } from './componentsOrg/org-signup/org-signup.component';
import { MainComponent } from './Components/main/main.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddExperienceComponent } from './components/add-experience/add-experience.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AboutComponent } from './components/about/about.component';
import { AddeducationComponent } from './Components/addeducation/addeducation.component';
import { NotificationsComponent } from './Components/notifications/notifications.component';
import { MyNetworkComponent } from './Components/my-network/my-network.component';
import { UserJobsComponent } from './Components/user-jobs/user-jobs.component';

const routes: Routes = [
   {path:'',component:LandingPageComponent},
   {path:'landing',component:LandingPageComponent},
   {path:'userlogin',component:UserLoginComponent},
   {path:'signup',component:RegisterComponent},
   {path:'orglogin',component:OrgLoginComponent},
   {path:'orgsignup',component:OrgSignupComponent},
   {path:'home', component:MainComponent},
   {path:'dashboard', component:DashboardComponent},
   {path:'add-experience', component:AddExperienceComponent},
   {path:'certifications', component:CertificationsComponent},
   {path:'edit-profile', component:EditProfileComponent},
   {path:'about', component:AboutComponent},
  {path:'add-education', component:AddeducationComponent},
  {path:'notify', component:NotificationsComponent},
  {path:'userjobs', component:UserJobsComponent},
  {path:'mynetwork', component:MyNetworkComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
