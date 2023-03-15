import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PortfolioPageComponent,
    StartScreenComponent,
    AboutMeComponent,
    MySkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
