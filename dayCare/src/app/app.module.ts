import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Components/About/about/about.component';
import { NavbarComponent } from './Components/Navbar/navbar/navbar.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { TeamComponent } from './Components/Team/team/team.component';
import { HomeComponent } from './Components/home/home.component';
import { MediaComponent } from './Components/media/media/media.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    ContactUsComponent,
    TeamComponent,
    HomeComponent,
    MediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
