import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NamirnicePageRoutingModule } from './namirnice-routing.module';

import { NamirnicePage } from './namirnice.page';
import { DodajNamirniceComponent } from '../dodaj-namirnice/dodaj-namirnice.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  
    
    IonicModule,
    NamirnicePageRoutingModule,
    
 
  ],
  declarations: [DodajNamirniceComponent,NamirnicePage]
})
export class NamirnicePageModule {}
