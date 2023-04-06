import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';

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
  public selectedLanguage: string = 'en';
  public menuOpen: boolean = false;

  constructor(private router: Router, public translate: TranslateService) {
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


  translateSite(language: any) {
    this.selectedLanguage = language;
    this.translate.use(language);

    let name = (document.getElementById('name') as HTMLInputElement);
    let mail = (document.getElementById('mail') as HTMLInputElement);
    let message = (document.getElementById('message') as HTMLInputElement);

    if (language == 'en') {
      name.placeholder = 'Your name';
      mail.placeholder = 'Your email';
      message.placeholder = 'Your message';
    } else {
      name.placeholder = 'Dein Name';
      mail.placeholder = 'Deine Email Adresse';
      message.placeholder = 'Deine Nachricht an mich';
    }
  }


  @HostListener('window:scroll', ['$event'])


  /**
   * The function defines 4 sections with a value of YOffset which defines where the section begins. It the checks on which section the user is currently located.
   */
  scroll() {
    let startScreen: any = document.getElementById('start-screen')?.offsetTop;
    let aboutMe: any = document.getElementById('about-me')?.offsetTop;
    let mySkills: any = document.getElementById('my-skills')?.offsetTop;
    let portfolio: any = document.getElementById('portfolio')?.offsetTop;

    let section1: number = startScreen + window.innerHeight / 2;
    let section2: number = startScreen + aboutMe + window.innerHeight / 2;
    let section3: number = startScreen + aboutMe + mySkills - window.innerHeight / 2;
    let section4: number = startScreen + aboutMe + mySkills + portfolio - window.innerHeight;

    this.checkSection(section1, section2, section3, section4);
  }


  /**
   * The function checks on which section the user is currently located.
   */
  checkSection(section1: number, section2: number, section3: number, section4: number) {
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


  /**
   * The function scrolls to the demanded section.
   * 
   * @param id - The variable defines the selected section.
   */
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

