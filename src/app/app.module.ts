import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationPanelComponent } from './home/navigation-panel/navigation-panel.component';
import { HomeSectionComponent } from './home/home-section/home-section.component';
import { SkillsComponent } from './home/skills/skills.component';
import { ExperienceComponent } from './home/experience/experience.component';
import { FooterComponent } from './home/footer/footer.component';
import { HiglightsComponent } from './home/higlights/higlights.component';
import { EducationComponent } from './home/education/education.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';
import { ContactComponent } from './home/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationPanelComponent,
    HomeSectionComponent,
    SkillsComponent,
    ExperienceComponent,
    FooterComponent,
    HiglightsComponent,
    EducationComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
