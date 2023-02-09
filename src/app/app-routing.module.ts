import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sidebar', component: SidebarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
