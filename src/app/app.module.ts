import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ContactComponent } from './Components/contact/contact.component';
import { ResumeComponent } from './Components/resume/resume.component';
import { StudyComponent } from './Components/study/study.component';
import { AboutComponent } from './Components/about/about.component';
import { WorkComponent } from './Components/work/work.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BubblingTextDirective } from './bubbling-text.directive';
import {MatCardModule} from '@angular/material/card';
import { DraggableDirective } from './draggable.directive';
import { ProjectsComponent } from './Components/projects/projects.component';
import { StarBackgroundComponent } from './Animations/star-background/star-background.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ContactComponent,
    ResumeComponent,
    StudyComponent,
    AboutComponent,
    WorkComponent,
    BubblingTextDirective,
    DraggableDirective,
    ProjectsComponent,
    StarBackgroundComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
