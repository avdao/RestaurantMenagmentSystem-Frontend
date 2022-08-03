import { Component, OnInit } from '@angular/core';
import { Category } from '../recipes/category-model';
import { RecipesService } from '../recipes/recipes.service';
import { Router } from '@angular/router';
import { RecipesPage } from '../recipes/recipes.page';
@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
ccc:any[];
filterByCategory:any[];
cc:any[];
  constructor(private recipeService: RecipesService, private recipe: RecipesPage,private router: Router) { }

 

  refreshList(){


    this.recipeService.getAllCategory().subscribe(res => {
      this.ccc = res;
      
      console.log(res);
    });



 }

 refreshList2(){


  this.recipeService.getAllRecipes().subscribe(res => {
    this.cc = res;
    
    console.log(res);
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

 clicke(Category: number){
  this.filterByCategoryId(Category)
  
    console.log('Ovo je id',Category);
    this.router.navigate(['/category-detail/'+Category]);
  
  }

 
 
  ngOnInit() {
this.refreshList();
this.refreshList2();
  }



}
