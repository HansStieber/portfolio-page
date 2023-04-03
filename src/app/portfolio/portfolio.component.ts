import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as AOS from 'aos';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  applications: any;
  url: string = '../../assets/jsons/applications.json';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    AOS.init();
    this.http.get(this.url).subscribe(res => {
      this.applications = res;
    });
  } 
}

