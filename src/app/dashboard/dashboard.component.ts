import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isCollapsed = true;
  visible: boolean = false;
  array = [1, 2, 3, 4];
  reinitTab = false;
  activeTab = 1;
  // tabs = ['Announcements', 'Events'];
  // currentTabindex = 0;

  imageUrls = [
    '/assets/Dashboard-assets/Events/reader.png',
    '/assets/Dashboard-assets/Events/iaapa.jpg',
    '/assets/Dashboard-assets/Events/event.jpg',
  ];

  constructor(private router: Router) {}

  setActiveTab(index: number) {
    this.activeTab = index;
  }

  eventChange(): void {
    this.reinitTab = true;
  }

  // changeTabindex(index: number) {
  //   // this.currentTabindex = index;
  // }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number } }) {
    // show sidebar when screen size meets specified criteria
    if (event.target.innerWidth <= 1023 && event.target.innerWidth >= 320) {
      this.isCollapsed = false;
    } else {
      this.isCollapsed = true;
    }
  }

  ngOnInit(): void {}
}
