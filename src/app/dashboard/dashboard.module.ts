// import { NZ_CONFIG, NzConfig } from 'ng-zorro-antd/core/config';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
  // providers: [{ provide: NZ_CONFIG, useValue: ngZorroConfig }],
})
export class DashboardModule {}
