import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkladistePage } from './skladiste.page';

const routes: Routes = [
  {
    path: '',
    component: SkladistePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkladistePageRoutingModule {}
