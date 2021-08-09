import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component'
import { AboutComponent } from 'src/app/components/about/about.component'
import { ProgramsComponent } from 'src/app/components/programs/programs.component'
import { OpportunitiesComponent } from 'src/app/components/opportunities/opportunities.component'
import { ProjectsComponent } from 'src/app/components/projects/projects.component'
import { TeamComponent } from 'src/app/components/team/team.component'
import { ContactComponent } from 'src/app/components/contact/contact.component'

const routes: Routes = [

   { path: '', component: HomeComponent },
   { path: 'about', component: AboutComponent },
   { path: 'programs', component: ProgramsComponent },
   { path: 'projects', component: ProjectsComponent },
   { path: 'opportunities', component: OpportunitiesComponent },
   { path: 'team', component: TeamComponent },
   { path: 'contact', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
