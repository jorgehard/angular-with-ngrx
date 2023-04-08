import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeModule } from './home/home.module';



@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    HomeModule,
  ]
})
export class AdminModule { }
