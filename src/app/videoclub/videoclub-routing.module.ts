import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoclubPage } from './videoclub.page';

const routes: Routes = [
  {
    path: '',
  
    component: VideoclubPage
  },
  {path: 'detalle',loadChildren:'./detalle/detalle.module'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoclubPageRoutingModule {}
