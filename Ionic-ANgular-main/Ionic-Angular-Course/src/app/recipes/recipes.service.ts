import { Injectable } from '@angular/core';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { Recipe } from './recipe.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
 private  recipes: Recipe[]=[
    {
      RecipeID: 1,
      title: 'Schnizel',
      imageUrl: 'https://coolinarika.azureedge.net/images/_variations/5/1/512141062ef3c44856b7e63902ad1d67_header.jpg?v=2',
      ingredients: 'pork meat',
    },
    {
      RecipeID: 2,
      title: 'Spagheti',
      imageUrl: 'https://www.bing.com/th?id=AMMS_3c6c6ff98ab9622fa274747a271a804e&w=306&h=459&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.25&pid=16.1',
      ingredients: 'Pork Meat'
    }
  ];
private readonly api='https://localhost:44346/api/recipes/';
private readonly categoryApi='https://localhost:44346/api/Category/';
  constructor(private http: HttpClient) { }

  getAllRecipes(): Observable < any> {
    return this.http.get<any>(this.api);
  }

  getAllCategory():Observable <any>{
    return this.http.get<any>(this.categoryApi)
  }
  getRecipe(recipeID: number): Observable <any>{
    return this.http.get<any>(this.api+recipeID);
}

findByTitle(title: string) {
  return this.http.get(`${this.api}?title=${title}`);
}
  deleteRecipes(recipeID: number){
 return this.http.delete(this.api + recipeID);
//this.recipes=this.recipes.filter(reci=> reci.RecipeID !==recipeID);


}

addProduct(data: any): Observable <any> {
  return this.http.post(this.api, data);
 /* this.recipes.push(data);*/

}
editRecipe(id: number,data: any): Observable <any>{
  console.log('Na servicu',id);

  return this.http.put(this.api+id,data);
/*this.recipes.find(reci=> reci.RecipeID ===id).RecipeID=id;
this.recipes.find(reci=> reci.RecipeID ===id).title=title;
this.recipes.find(reci=> reci.RecipeID ===id).imageUrl=imageU;
this.recipes.find(reci=> reci.RecipeID===id).ingredients=ing;*/
};


};
