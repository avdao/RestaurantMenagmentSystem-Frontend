import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkladistePageRoutingModule } from './skladiste-routing.module';

import { SkladistePage } from './skladiste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkladistePageRoutingModule
  ],
  declarations: [SkladistePage]
})
export class SkladistePageModule {}
