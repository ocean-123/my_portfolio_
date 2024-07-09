import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Components/contact/contact.component';
import { ResumeComponent } from './Components/resume/resume.component';
import { StudyComponent } from './Components/study/study.component';
import { AboutComponent } from './Components/about/about.component';
import { WorkComponent } from './Components/work/work.component';
import { ProjectsComponent } from './Components/projects/projects.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'study', component: StudyComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent },
  { path: 'projects', component: ProjectsComponent },

  // { path: '', redirectTo: '/contact', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
