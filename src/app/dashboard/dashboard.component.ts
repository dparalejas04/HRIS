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

  // sample: boolean = false;

  sample: any = {
    dashboard: true,
    employees: false,
  };

  public select(sample: string) {
    this.sample = !this.sample;

    switch (sample) {
      case 'dashboard': {
        alert();
        //statements;
        for (const key in this.sample) {
          this.sample[key] = false;
        }

        this.sample.dashboard = true;
        break;
      }
      default: {
        this.setAllValuesToFalse();
        this.sample.employees = true;
        break;
      }
    }
  }

  setAllValuesToFalse(): void {
    this.sample.dashboard = false;
  }
}
