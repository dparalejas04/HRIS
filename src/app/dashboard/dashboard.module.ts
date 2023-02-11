// import { NZ_CONFIG, NzConfig } from 'ng-zorro-antd/core/config';

import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, DashboardRoutingModule],
  // providers: [{ provide: NZ_CONFIG, useValue: ngZorroConfig }],
})
export class DashboardModule {}
