import { Component, OnInit } from '@angular/core';

import { ActivatedRoute ,Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipes/recipe.model';
import { RecipesService } from '../recipes/recipes.service';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.page.html',
  styleUrls: ['./edit-recipe.page.scss'],
})
export class EditRecipePage implements OnInit {
  loadedRecipes: any;
title: string;
imageUrl: string;
ingredients: string;
ccc: any[];
kategorijaID: number;

  id: number;
  constructor(private activatedRoute: ActivatedRoute , private recipeService: RecipesService,
    private router: Router,private alertCtrl: AlertController) {}

    refreshList(){


      this.recipeService.getAllCategory().subscribe(res => {
        this.ccc = res;
        
        console.log(res);
      });
  
  
  
   }
  


    ngOnInit(): void {
      this.refreshList();
      this.activatedRoute.paramMap.subscribe(pM=>{
  if(!pM.has('id')){
    this.router.navigate(['/recipes']);
    return;

  }
  const  recipeID=pM.get('id');

this.id=+recipeID;

    this.recipeService.getRecipe(Number(recipeID)).subscribe(data=>{
  this.loadedRecipes=data;
  this.title=this.loadedRecipes?.title;
  this.imageUrl=this.loadedRecipes?.imageUrl;
  this.ingredients=this.loadedRecipes?.ingrediats;
  this.kategorijaID=this.loadedRecipes?.kategorijaId;


console.log('NAJVAZNIJI ID',this.kategorijaID);

    })
      });
    };

    onSubmit() {



console.log('Submit',this.id);
this.loadedRecipes.RecipeID=this.id;
this.loadedRecipes.title=this.title;
this.loadedRecipes.imageUrl=this.imageUrl;
this.loadedRecipes.ingrediats=this.ingredients;
this.loadedRecipes.kategorijaID=this.kategorijaID;
          this.recipeService.editRecipe(this.id,this.loadedRecipes).subscribe((obj12=>{

            //this.recipeService.getAllRecipes().subscribe(res => {});
            this.router.navigate(['/recipes']);
              console.log('OKE');
            }));
        }

  }
/*
const  recipeID=pM.get();
this.loadedRecipes=this.recipeService.getRecipe(recipeID);

    });

  }

  onSubmit() {



console.log(this.loadedRecipes.RecipeID,this.loadedRecipes.title,this.loadedRecipes.imageUrl,this.loadedRecipes.ingredients[0]);
    this.recipeService.editRecipe(this.loadedRecipes.RecipeID,
      this.loadedRecipes.title,this.loadedRecipes.imageUrl,this.loadedRecipes.ingredients);

    this.router.navigate(['/recipes']);
  }

}*/
