import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MjerneJedinicePage } from './mjerne-jedinice.page';

const routes: Routes = [
  {
    path: '',
    component: MjerneJedinicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MjerneJedinicePageRoutingModule {}
