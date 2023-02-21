import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
