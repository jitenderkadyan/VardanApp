import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MurliPage } from './murli.page';

const routes: Routes = [
  {
    path: '',
    component: MurliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MurliPageRoutingModule {}
