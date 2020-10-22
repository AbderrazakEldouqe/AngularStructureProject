import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../_shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardEcommerceComponent } from './components/dashboard-ecommerce/dashboard-ecommerce.component';


@NgModule({
  declarations: [DashboardEcommerceComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
