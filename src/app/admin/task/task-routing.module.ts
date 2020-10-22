import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from '../../_shared/layout/layout.component';
import {DashboardEcommerceComponent} from '../dashboard/components/dashboard-ecommerce/dashboard-ecommerce.component';
import {TasksContainerComponent} from './components/tasks-container/tasks-container.component';
import {FormAddEditTaskComponent} from './components/form-add-edit-task/form-add-edit-task.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', component: TasksContainerComponent},
      {path: 'add', component: FormAddEditTaskComponent},
      {path: 'edit', component: FormAddEditTaskComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
