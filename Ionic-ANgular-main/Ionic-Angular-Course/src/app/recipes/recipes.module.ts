import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipesPageRoutingModule } from './recipes-routing.module';

import { RecipesPage } from './recipes.page';
import { CategoryPage } from '../category/category.page';
import { CategoryPageModule } from '../category/category.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipesPageRoutingModule,
    CategoryPageModule
  
  ],
  declarations: [RecipesPage]
})
export class RecipesPageModule {}
