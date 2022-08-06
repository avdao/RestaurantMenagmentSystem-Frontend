import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NamirnicePage } from './namirnice.page';

const routes: Routes = [
  {
    path: '',
    component: NamirnicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NamirnicePageRoutingModule {}
