import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {SharedModule} from '../_shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { TaskModule } from './task/task.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    DashboardModule,
    TaskModule
  ]
})
export class AdminModule { }
