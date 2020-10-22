import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../_shared/shared.module';
import { TaskRoutingModule } from './task-routing.module';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { FormAddEditTaskComponent } from './components/form-add-edit-task/form-add-edit-task.component';
import { TasksContainerComponent } from './components/tasks-container/tasks-container.component';


@NgModule({
  declarations: [ListTasksComponent, FormAddEditTaskComponent, TasksContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
