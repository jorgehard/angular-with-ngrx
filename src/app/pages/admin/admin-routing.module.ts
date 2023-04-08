import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeContainerComponent } from './home/home.container';

const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
