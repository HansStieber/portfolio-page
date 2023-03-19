import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input() explanation: any;
  @Input() img: any;
  @Input() title: any;
  @Input() language: any;
  @Input() web: any;
  @Input() git: any;
  @Input() indexImpair = false;
}