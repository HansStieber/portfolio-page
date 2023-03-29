import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('200ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class NavigationComponent {
  selectedMenuItem: string = '';
  public menuOpen: boolean = false;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (this.router.url === '/impressum') {
          this.selectedMenuItem = '';
        }
        if (this.router.url === '/') {
          setTimeout(() => {
            if (document.getElementById(this.selectedMenuItem)) {
              document.getElementById(this.selectedMenuItem)!.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
              });
            }
          }, 100);
        }
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  scroll() {
    let startScreen: any = document.getElementById('start-screen')?.offsetTop;
    let aboutMe: any = document.getElementById('about-me')?.offsetTop;
    let mySkills: any = document.getElementById('my-skills')?.offsetTop;
    let portfolio: any = document.getElementById('portfolio')?.offsetTop;

    let section1: any = startScreen + window.innerHeight / 2;
    let section2: any = startScreen + aboutMe + window.innerHeight / 2;
    let section3: any = startScreen + aboutMe + mySkills - window.innerHeight / 2;
    let section4: any = startScreen + aboutMe + mySkills + portfolio - window.innerHeight;

    if (window.pageYOffset < section1) {
      this.selectedMenuItem = '';
    }
    if (window.pageYOffset > section1) {
      this.selectedMenuItem = 'about-me';
    }
    if (window.pageYOffset > section2) {
      this.selectedMenuItem = 'my-skills';
    }
    if (window.pageYOffset > section3) {
      this.selectedMenuItem = 'portfolio';
    }
    if (window.pageYOffset > section4) {
      this.selectedMenuItem = '';
    }
  }

  async scrollToSection(id: string) {
    if (this.menuOpen == true) {
      this.menuOpen = false;
    }
    await this.router.navigate(['']);
    setTimeout(() => {
      this.selectedMenuItem = id;
    }, 90);
    document.getElementById(id)!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  openMenu() {
    this.menuOpen = true;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}

