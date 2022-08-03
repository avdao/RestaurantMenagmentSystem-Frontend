import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { delay } from 'rxjs/operators';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipes: Recipe;
  id: number;


  constructor(private activatedRoute: ActivatedRoute , private recipeService: RecipesService,
    private router: Router,private alertCtrl: AlertController) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(pM=>{
if(!pM.has('recipeID')){
  this.router.navigate(['/recipes']);
  return;

}
const  recipeID=pM.get('recipeID');

const id: number=+recipeID;
this.id=+recipeID
console.log(id);
  this.recipeService.getRecipe(id).subscribe(data=>{
console.log(data.title);
this.loadedRecipes=data;

console.log(this.loadedRecipes.title);
/*
    this.title=data.title;
    this.imageUrl=data.imageUrl;
    this.recipeId=data.recipeId;

*/
  });

    });

  }




        deleteRecipe() {
          this.alertCtrl.create({
            header: 'Are you sure?',
            message: 'Do you really want to delete the recipe?',
            buttons: [{
              text: 'Cancel',
              role: 'cancel'
            },
            {
              text: 'Delete',
              handler: () => {
                this.recipeService.deleteRecipes(this.id).subscribe((obj12=>{

                  //this.recipeService.getAllRecipes().subscribe(res => {});
                  this.router.navigate(['/recipes']);
                    console.log('OKE');
                  }));
              }
            }
          ]
        }).then(alertEl => {
          alertEl.present();
        });
        }
        editRecipe() {
          console.log('Ovo je id',this.id);
          this.router.navigate(['/edit/'+this.id]);
        }
      };







