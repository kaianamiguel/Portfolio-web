import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { BtnPrimaryComponent } from '../../shared/btn-primary/btn-primary.component';
import { MainMeComponent } from 'src/app/shared/main-me/main-me.component';
import { MainAnimationComponent } from 'src/app/shared/main-animation/main-animation.component';
import { HttpClientModule } from '@angular/common/http';
import { MainAboutComponent } from 'src/app/shared/main-about/main-about.component';
import { MainProjectsComponent } from 'src/app/shared/main-projects/main-projects.component';
import { ProjectComponent } from 'src/app/shared/project/project.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BtnPrimaryComponent,
    MainMeComponent,
    MainAnimationComponent,
    MainAboutComponent,
    MainProjectsComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    HomeComponent,
    HeaderComponent,
    BtnPrimaryComponent]
})
export class HomeModule { }
