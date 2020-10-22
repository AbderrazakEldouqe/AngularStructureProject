import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from '../../_shared/layout/layout.component';
import {DashboardEcommerceComponent} from './components/dashboard-ecommerce/dashboard-ecommerce.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', component: DashboardEcommerceComponent},
      {path: 'dashboard', component: DashboardEcommerceComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
