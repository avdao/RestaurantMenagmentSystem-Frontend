import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddInStoragePage } from './add-in-storage.page';

const routes: Routes = [
  {
    path: '',
    component: AddInStoragePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddInStoragePageRoutingModule {}
