import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isCollapsed = true;
  constructor() {}

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

    // switch (navigate) {
    //   case 'dashboard': {
    //     //statements;
    //     this.navigate.dashboard = true;
    //     break;
    //   }
    //   default: {
    //     this.navigate.employees = true;
    //     break;
    //   }
    // }

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
}
