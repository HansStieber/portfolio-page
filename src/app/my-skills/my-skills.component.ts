import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  ngOnInit(): void {
    AOS.init();
  }

  async scrollToSection(id: string) {
    document.getElementById(id)!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
}
