import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskComponent }      from './task/task.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { TaskListComponent }  from './task-list/task-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'task/:id', component: TaskComponent },
  { path: 'tasks', component: TaskListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}