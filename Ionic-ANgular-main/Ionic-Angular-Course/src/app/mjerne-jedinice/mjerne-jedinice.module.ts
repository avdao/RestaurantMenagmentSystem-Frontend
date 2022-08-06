import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MjerneJedinicePageRoutingModule } from './mjerne-jedinice-routing.module';

import { MjerneJedinicePage } from './mjerne-jedinice.page';
import { DodajMjerneJediniceComponent } from '../dodaj-mjerne-jedinice/dodaj-mjerne-jedinice.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MjerneJedinicePageRoutingModule
  ],
  declarations: [DodajMjerneJediniceComponent,MjerneJedinicePage]
})
export class MjerneJedinicePageModule {}
