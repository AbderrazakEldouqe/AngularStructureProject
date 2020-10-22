import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from '../_shared/layout/layout.component';
import {DashboardEcommerceComponent} from './dashboard/components/dashboard-ecommerce/dashboard-ecommerce.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'task',
    loadChildren: () => import('./task/task.module').then(m => m.TaskModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
