import { Injectable } from '@angular/core';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { Recipe } from './recipe.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
 
private readonly api='https://localhost:44346/api/Recipes/';
private readonly categoryApi='https://localhost:44346/api/Category/';
private readonly ingApi='https://localhost:44346/api/Ingredients/';
private readonly mjApi='https://localhost:44346/api/MjerneJedinice/';
private readonly namirniceApi='https://localhost:44346/api/Namirnice/';
  constructor(private http: HttpClient) { }

  getAllRecipes(): Observable < any> {
    return this.http.get<any>(this.api);
  }
  getAllMjerneJedinice(): Observable < any> {
    return this.http.get<any>(this.mjApi);
  }

  getAllCategory():Observable <any>{
    return this.http.get<any>(this.categoryApi)
  }
  getAllNamirnice():Observable <any>{
    return this.http.get<any>(this.namirniceApi)
  }


  getRecipe(recipeID: number): Observable <any>{
    return this.http.get<any>(this.api+recipeID);
}

getIng(recipeID: number): Observable <any>{
  return this.http.get<any>(this.ingApi+recipeID);
}
getNamirnice(recipeID: number): Observable <any>{
  return this.http.get<any>(this.namirniceApi+recipeID);
}
editIng(id: number,data: any): Observable <any>{
  console.log('Na servicu',data);

  return this.http.put(this.ingApi+id,data);

};


findByTitle(title: string) {
  return this.http.get(`${this.api}?title=${title}`);
}
  deleteRecipes(recipeID: number){
 return this.http.delete(this.api + recipeID);
//this.recipes=this.recipes.filter(reci=> reci.RecipeID !==recipeID);


}

deleteING(recipeID: number){
  return this.http.delete(this.ingApi + recipeID);
 //this.recipes=this.recipes.filter(reci=> reci.RecipeID !==recipeID);
 
 
 }

addProduct(data: any): Observable <any> {
   
  return this.http.post(this.api, data);
 /* this.recipes.push(data);*/

}
addSastojak(data: any): Observable <any> {
   
  return this.http.post(this.namirniceApi, data);
 /* this.recipes.push(data);*/

}
addMjernaJedinica(data: any): Observable <any> {
   
  return this.http.post(this.mjApi, data);
 /* this.recipes.push(data);*/

}

addING(data:any): Observable <any> {
  return this.http.post(this.ingApi, data);
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
