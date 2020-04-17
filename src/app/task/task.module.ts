import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';

import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './containers/task-list/task-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [TaskComponent, TaskListComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule
  ]
})
export class TaskModule { }
