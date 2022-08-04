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
  ccc:any;
  ccc23:any;
  nameIngredients:string;
  kolicina:string;
  id: number;
  loadedRecipes3: any;
  idSastojka:number;
  isModalOpen = false;
  setOpen(isOpen: boolean,id: number) {
    this.isModalOpen = isOpen;
    this.getIng(id)
  }

  


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
console.log(data);
this.loadedRecipes=data;
this.ccc=this.loadedRecipes.ingredients;
console.log(this.ccc);
/*
    this.title=data.title;
    this.imageUrl=data.imageUrl;
    this.recipeId=data.recipeId;

*/
  });

    });

  }

  getIng(id:number){

    this.recipeService.getIng(id).subscribe(data=>{
      console.log(data);
      
      this.ccc23=data;
      this.idSastojka=this.ccc23.idSastojka;
      this.nameIngredients=this.ccc23.naziv
      this.kolicina=this.ccc23.kolicina
   
        });

  }

  editSastojaka(idSastojka:number){
    console.log(idSastojka)
    console.log(this.kolicina)
    const obj={
      kolicina:parseInt(this.kolicina),
      naziv:this.nameIngredients
    }
    console.log(obj)
    /*this.loadedRecipes3.kolicina=this.kolicina;
    this.loadedRecipes3.naziv=this.nameIngredients,*/
  
    

this.recipeService.editIng(idSastojka,obj).subscribe((obj12=>{
this.isModalOpen=false;
  //this.recipeService.getAllRecipes().subscribe(res => {});
  this.router.navigate(['/recipes']);
    console.log('OKE');
  }));

  };




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


        deleteIng(id:number) {
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
                this.recipeService.deleteING(id).subscribe((obj12=>{

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
          this.router.navigate(['product-add/edit/'+this.id]);
        }
      };







