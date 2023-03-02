import { Component, OnInit } from '@angular/core';

import { EventsService } from '../events.service';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public isCollapsed: boolean;
  visible: boolean = false;

  constructor(private router: Router) {
    this.isCollapsed = true;

    EventsService.sidebarEvents.subscribe((res) => {
      this.isCollapsed = res;
    });
  }

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

  public select(navigate: string) {
    for (const key in this.navigate) {
      this.navigate[key] = false;
    }

    switch (navigate) {
      case 'dashboard': {
        //statements;
        this.navigate.dashboard = true;
        this.redirectDashboard();
        break;
      }
      case 'employees': {
        this.navigate.employees = true;
        this.redirectEmployees();
        break;
      }
      case 'department': {
        this.navigate.department = true;
        break;
      }
      case 'position': {
        this.navigate.position = true;
        break;
      }
      case 'computers': {
        this.navigate.computers = true;
        break;
      }
      case 'appraisal': {
        this.navigate.appraisal = true;
        break;
      }
      case 'salary': {
        this.navigate.salary = true;
        break;
      }
      case 'timesheet': {
        this.navigate.timesheet = true;
        break;
      }
      case 'leave': {
        this.navigate.leave = true;
        break;
      }
      case 'expenses': {
        this.navigate.expenses = true;
        break;
      }
    }
  }

  redirectDashboard(): void {
    this.router.navigateByUrl('/dashboard');
  }

  redirectEmployees(): void {
    this.router.navigateByUrl('/employees');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number } }) {
    // show sidebar when screen size meets specified criteria
    if (event.target.innerWidth <= 1023 && event.target.innerWidth >= 320) {
      this.isCollapsed = false;
    } else {
      this.isCollapsed = true;
    }
  }

  // toggleCollapsed(): void {
  //   this.isCollapsed = !this.isCollapsed;
  // }
}
