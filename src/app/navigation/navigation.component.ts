import { Component } from '@angular/core';
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
        console.log(this.selectedMenuItem)
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
          }, 10);
        }
      }
    });
  }

  async scrollToSection(id: string) {
    this.selectedMenuItem = id;
    if (this.menuOpen == true) {
      this.menuOpen = false;
    }
    await this.router.navigate(['']);
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

