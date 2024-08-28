import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmpService } from './services/emp.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ClickTrackingDirective } from '../../src/app/directives/click-tracking.directive';
import { ClickTrackingService } from './services/click-tracking.service';
import { ClickReportComponent } from './click-report/click-report.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    ClickTrackingDirective,
    ClickReportComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [EmpService,ClickTrackingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
