import { HomeComponent } from './Components/home/home.component';
import { TeamComponent } from './Components/Team/team/team.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutComponent } from './Components/About/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './Components/Navbar/navbar/navbar.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"contactUs",component:ContactUsComponent},
  {path:"team",component:TeamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
