import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

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
  signOut(): void {
    this.router.navigateByUrl('/login');
  }

  // changeTabindex(index: number) {
  //   // this.currentTabindex = index;
  // }

  ngOnInit(): void {}

  navigate: any = {
    dashboard: true,
    employees: false,
    department: false,
    position: false,
    computers: false,
    appraisal: false,
    salary: false,
    timesheet: false,
    leave: false,
    expenses: false,
  };

  // redirectDashboard(): void {
  //   this.router.navigateByUrl('/dashboard');
  // }

  change(value: boolean): void {
    console.log(value);
  }

  // public select(navigate: string) {
  //   for (const key in this.navigate) {
  //     this.navigate[key] = false;
  //   }

  //   switch (navigate) {
  //     case 'dashboard': {
  //       //statements;
  //       this.navigate.dashboard = true;
  //       this.redirectDashboard();
  //       break;
  //     }
  //     case 'employees': {
  //       this.navigate.employees = true;
  //       break;
  //     }
  //     case 'department': {
  //       this.navigate.department = true;
  //       break;
  //     }
  //     case 'position': {
  //       this.navigate.position = true;
  //       break;
  //     }
  //     case 'computers': {
  //       this.navigate.computers = true;
  //       break;
  //     }
  //     case 'appraisal': {
  //       this.navigate.appraisal = true;
  //       break;
  //     }
  //     case 'salary': {
  //       this.navigate.salary = true;
  //       break;
  //     }
  //     case 'timesheet': {
  //       this.navigate.timesheet = true;
  //       break;
  //     }
  //     case 'leave': {
  //       this.navigate.leave = true;
  //       break;
  //     }
  //     case 'expenses': {
  //       this.navigate.expenses = true;
  //       break;
  //     }
  //   }
  // }
}
