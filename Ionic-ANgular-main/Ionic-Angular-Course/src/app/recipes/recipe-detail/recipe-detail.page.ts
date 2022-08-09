import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { delay } from 'rxjs/operators';
import { ProductAddPage } from 'src/app/product-add/product-add.page';
import { ingredients } from '../Ingredients.mode';

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
  nn: string;
  niz:any=[];
  id: number;
  obj:ingredients;
  loadedRecipes3: any;
  namirnice: any=[]
  idSastojka:number;
  isModalOpen = false;
  uzmi:any=[];
  idPokusaj: number;
  iddd:number;
  idN:number
  editObj:ingredients;
  setOpen(isOpen: boolean,id: number) {
    this.isModalOpen = isOpen;
    this.idN=id
    this.getIng(id)
    
  }

  getAllN(){
    this.recipeService.getAllNamirnice().subscribe(res => {
      this.namirnice = res;
      
      console.log(this.namirnice);
    });

  }


  constructor(private activatedRoute: ActivatedRoute , private recipeService: RecipesService,
    private router: Router,private alertCtrl: AlertController) { }

  ngOnInit(): void {
    this.getAllN()
 
    console.log('ovoooo' ,this.iddd)

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
    this.ccc=[]
    this.uzmi=[]
console.log(data);
this.loadedRecipes=data;
this.ccc=this.loadedRecipes.ingredients;
this.getNamirnice();
console.log('ovoo gledass');

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
   
      this.niz.push(data)
      this.ccc23=data;
      this.idSastojka=this.ccc23?.idSastojka;
      this.nameIngredients=this.ccc23.fkNaziv;
      this.kolicina=this.ccc23.kolicina;

      console.log("@nameeofING",this.idSastojka)
      this.iddd=Number(this.nameIngredients)
      console.log(this.iddd,'fvssssssssssssss')
        });

  }

getNamirnice(){
 console.log(this.ccc.length)
 let obj: any;

for(let i=0;i<this.ccc.length;i++){
  for(let j=0;j<this.namirnice.length;j++){
  if(this.ccc[i].fkNaziv==this.namirnice[j].id){
    obj={
      id:this.ccc[i].id,
      fk:this.ccc[i].fkNaziv,
      naziv:this.namirnice[j].naziv,
      kolicina:this.ccc[i].kolicina

    }
    this.uzmi.push(obj)

    console.log(this.uzmi,"@uzmi")
  }
}

   


}}


  editSastojaka(idSastojka:number){
    console.log(idSastojka,'@vjrijrdwpv')
    const idZaUpdate=idSastojka;
    console.log(idZaUpdate)
    this.obj={
      id:this.idN,
      kolicina:parseInt(this.kolicina),
      recipesId:this.id,
      fkNaziv:parseInt(this.nameIngredients)
    }
      
      
      
  
 
this.editObj=this.obj
 console.log(this.idN)
    

this.recipeService.editSastojka(this.idN,this.obj).subscribe(obj=>{
   this.isModalOpen=false;
   this.recipeService.getRecipe(this.id).subscribe(data=>{
    console.log(data);
    this.ccc=[]
    this.uzmi=[]
    this.loadedRecipes=data;
    this.ccc=this.loadedRecipes.ingredients;
    this.getNamirnice()
    console.log(this.ccc);

  
    /*
        this.title=data.title;
        this.imageUrl=data.imageUrl;
        this.recipeId=data.recipeId;
    
    */
      });
   
  console.log('OKE');
}
 
  );


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
                  this.recipeService.getRecipe(this.id).subscribe(data=>{
                    this.ccc=[]
                    this.uzmi=[]

                    console.log(data);
                    this.loadedRecipes=data;
                    this.ccc=this.loadedRecipes.ingredients;
                    this.getNamirnice()
                    console.log(this.ccc);
                    /*
                        this.title=data.title;
                        this.imageUrl=data.imageUrl;
                        this.recipeId=data.recipeId;
                    
                    */
                      });
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







