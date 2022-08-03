import { Component, OnInit } from '@angular/core';

import { ActivatedRoute ,Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { delay } from 'rxjs/operators';


import { RecipesService } from '../recipes/recipes.service';
@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.page.html',
  styleUrls: ['./category-detail.page.scss'],
})
export class CategoryDetailPage implements OnInit {
public id: number;
public cc: any[];
public filterByCategory:any[];
  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipesService,
    private router: Router,private alertCtrl: AlertController) { }


    refreshList2(){


      this.recipeService.getAllRecipes().subscribe(res => {
        this.cc = res;
        this.filterByCategoryId(this.id)
      
      });
    }
    

    filterByCategoryId(category: number){
      this.filterByCategory = [];
      console.log(this.cc)
      this.cc.forEach(recipe =>{
        if(recipe.kategorijaId === category){
          console.log(recipe.title)
          this.filterByCategory.push(recipe);
        }
      });
    console.log(" ovo ovdje gledaj:",this.filterByCategory)
      this.cc= this.filterByCategory;
    }
  ngOnInit() {
    
    this.activatedRoute.paramMap.subscribe(pM=>{
      if(!pM.has('id')){
        this.router.navigate(['/recipes']);
        return;
      
      }
      const  recipeID=pM.get('id');
      
      const id: number=+recipeID;
      this.id=+recipeID
    
      this.refreshList2()
     
        });
      
          };



  }


