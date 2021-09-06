import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { MisionComponent } from './components/mision/mision.component';
import { ResourcesComponent } from './components/resources/resources.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProgramsComponent,
    OpportunitiesComponent,
    ProjectsComponent,
    TeamComponent,
    ContactComponent,
    MisionComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
