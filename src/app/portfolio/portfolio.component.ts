import { Component } from '@angular/core';
import { Projects } from '../../models/projects.class';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  projects = new Projects();
  titles = this.projects.titels;
  explanations = this.projects.explanation;
  img = this.projects.img;
  language = this.projects.language;
  web=this.projects.web;
  git=this.projects.git;
}