import { Component, OnInit } from '@angular/core';

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
        break;
      }
      case 'employees': {
        this.navigate.employees = true;
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

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  change(value: boolean): void {
    console.log(value);
  }

  signOut(): void {
    this.router.navigateByUrl('/login');
  }
}
