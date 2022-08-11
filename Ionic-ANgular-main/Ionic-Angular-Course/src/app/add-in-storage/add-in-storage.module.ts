import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddInStoragePageRoutingModule } from './add-in-storage-routing.module';

import { AddInStoragePage } from './add-in-storage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddInStoragePageRoutingModule
  ],
  declarations: [AddInStoragePage]
})
export class AddInStoragePageModule {}
