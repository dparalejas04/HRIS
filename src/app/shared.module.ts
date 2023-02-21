import * as AllIcons from '@ant-design/icons-angular/icons';

import { CommonModule, registerLocaleData } from '@angular/common';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { EmployeesModule } from './employees/employees.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IconDefinition } from '@ant-design/icons-angular';
import { IconsProviderModule } from './icons-provider.module';
import { LoginComponent } from './login/login.component';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { SidebarComponent } from './sidebar/sidebar.component';
import en from '@angular/common/locales/en';

registerLocaleData(en);

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    DemoNgZorroAntdModule,
  ],
  exports: [
    SidebarComponent,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    DemoNgZorroAntdModule,
  ],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
