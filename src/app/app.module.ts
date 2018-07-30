import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './/app-routing.module';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    DashboardComponent,
    MessagesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
