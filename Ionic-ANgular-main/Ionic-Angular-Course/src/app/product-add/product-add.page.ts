import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipesService } from '../recipes/recipes.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.page.html',
  styleUrls: ['./product-add.page.scss'],
})
export class ProductAddPage implements OnInit {
  loadedRecipes: any;
  surveyForm: FormGroup;
ccc:any[];
obj:any;
sastojci: any=[];
ccc1:any[];
isModalOpen = false;
zadnji:number;
obj123:any;
isEditPage: boolean;
pageTitle: string;
loadedRecipe: any;

idUrl:number;
      recipeTitle:string;
      recipeImageUrl:string;
      nameIngredients:string;
      kolicina:string

   
      category:number

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }



  constructor(private recipeService: RecipesService,private router: Router,
    
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
   ) {
   
    };


    addSastojci(){
    
      this.obj={
        kolicina:parseInt(this.kolicina),
        naziv: this.nameIngredients
         
          
          }
      console.log(this.obj)
this.sastojci.push(this.obj);


this.isModalOpen=false;

    }
    refreshList(){


      this.recipeService.getAllCategory().subscribe(res => {
        this.ccc = res;
        console.log(res);
       
      });
  
  
   }


  

  ngOnInit() {
this.refreshList();
this.activatedRoute.paramMap.subscribe(paraMap => {
  if(!paraMap.has('recipeId'))
  {
    //Add new recipe
    this.pageTitle = 'Add recipe';
    this.isEditPage = false;
    this.loadedRecipe = null;
  }
  else{
    //Edit existing recipe
    this.pageTitle = 'Edit recipe';
    this.isEditPage = true;
    const recipeId = paraMap.get('recipeId');
    this.recipeService.getRecipe(Number(recipeId)).subscribe((res) => {
      this.loadedRecipe = res;

      this.recipeTitle= this.loadedRecipe?.title;
      this.recipeImageUrl= this.loadedRecipe?.imageUrl;
      this.category=this.loadedRecipes.kategorijaID,
      this.sastojci = this.loadedRecipe?.ingredients;
    });
  }
});

  this.activatedRoute.paramMap.subscribe(paraMap => {
  if(!paraMap.has('id'))
  {
    //Add new recipe
    this.pageTitle = 'Add recipe';
    this.isEditPage = false;
    this.loadedRecipe = null;
  }
  else{
    //Edit existing recipe
    this.pageTitle = 'Edit recipe';
    this.isEditPage = true;
    const recipeId = paraMap.get('id');
    this.idUrl=+recipeId
    this.recipeService.getRecipe(Number(recipeId)).subscribe((res) => {
      this.loadedRecipe = res;

      this.recipeTitle = this.loadedRecipe?.title;
      this.recipeImageUrl = this.loadedRecipe?.imageUrl;
  
      this.sastojci = this.loadedRecipe?.ingredients;
    });
  }
});

}


  

 
  onSubmit(){
   console.log(this.sastojci)


   





/*
this.recipeService.addProduct(obj).subscribe(obj12=>{
this.router.navigate(['/recipes']);
console.log('Oke')
});*/


if(this.isEditPage){
  console.log(this.idUrl)

 
this.loadedRecipe.title=this.recipeTitle;
this.loadedRecipe.imageUrl=this.recipeImageUrl;
this.loadedRecipe.kategorijaID=this.category;
this.loadedRecipe.ingrediats=this.sastojci;

  this.recipeService.editRecipe(this.idUrl,this.loadedRecipe).subscribe(res2=>{
    this.router.navigate([`/recipes/`+this.idUrl]);
  });
}
else {
  const obj={

    title:this.recipeTitle,
    imageUrl:this.recipeImageUrl,
    kategorijaId:this.category,
    ingredients:this.sastojci
    
    };
  this.recipeService.addProduct(obj).subscribe(res2=>{
    this.router.navigate([`/recipes/`]);
  });
}
  }
}

