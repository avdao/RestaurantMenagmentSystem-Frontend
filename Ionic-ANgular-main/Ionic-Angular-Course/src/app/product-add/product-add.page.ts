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
loadedRecipe: Recipe;
name:string;
sastojci2:any=[]
idUrl:number;
      recipeTitle:string;
      recipeImageUrl:string;
      nameIngredients:string;
      descriptions:string;
      kolicina:string;
      price:string;
      namirnice:any=[];
      recipeForSent:Recipe;


   
      category:number

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }



  constructor(private recipeService: RecipesService,private router: Router,
    
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
   ) {
   
    };


    refreshList(){


      this.recipeService.getAllCategory().subscribe(res => {
        this.ccc = res;
        console.log(res);
       
      });
  
  
   }

   getAllNamirnice(){
    this.recipeService.getAllNamirnice().subscribe(res => {
      this.namirnice = res;
      
      console.log(this.namirnice);
   })}
   getNamirnice(id:number){
    this.recipeService.getNamirnice(id).subscribe(res => {
      this.name=res.naziv;
      console.log(this.name)

      
      
   })}

   getZadnji(){
    let l;
    this.recipeService.getAllRecipes().subscribe(res => {
      l=res.length
      console.log(l-1)
console.log("GET ZADNJI",res[l-1].recipesId)
this.zadnji=res[l-1].recipesId+1;
console.log(this.zadnji)

    })
   
   }
   
   addSastojci(){

    this.recipeService.getNamirnice(parseInt(this.nameIngredients)).subscribe(res => {
      this.name=res.naziv;
      console.log(this.name)

      
    

    console.log(this.name)

    this.obj={
      kolicina:parseInt(this.kolicina),
      naziv: this.name,
      naziv3: this.nameIngredients
    
       
        
        }
        if(this.obj.kolicina<0){
          alert(
        "Kolicina manje od nule"
          )
        }else{
          console.log(this.obj)
          this.sastojci.push(this.obj);
          
          
          this.isModalOpen=false;
        }



  })


}

  ngOnInit() {
this.refreshList();
this.getAllNamirnice();
this.getZadnji();

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
      this.price=String(this.loadedRecipe?.price);
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
      this.price=String(this.loadedRecipe?.price);
      //this.sastojci = this.loadedRecipe?.ingredients;


      console.log("loaded recipe",this.loadedRecipe)
    });
  }
});

}


  priprema(){
    const a=[]

   

      
    console.log("OVAJ ZADNJI GLEDAJ",this.zadnji)
    for(let i=0;i<this.sastojci.length;i++){
      const obj={
        kolicina:this.sastojci[i].kolicina,
        
        fkNaziv:this.sastojci[i].naziv3
      }
      console.log(obj)
      this.sastojci2.push(obj)
    }
    
    
    


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

  this.priprema()
this.loadedRecipe.title=this.recipeTitle;
this.loadedRecipe.imageUrl=this.recipeImageUrl;
this.loadedRecipe.kategorijaID=this.category;
this.loadedRecipe.ingredients=this.sastojci2;
this.loadedRecipe.price=parseInt(this.price);

console.log(this.loadedRecipe)
  this.recipeService.editRecipe(this.idUrl,this.loadedRecipe).subscribe(res2=>{
    this.sastojci2=[]
    this.router.navigate([`/recipes/`+this.idUrl]);
   

  });

}
else {
  
this.priprema()
this.recipeForSent={
  RecipesID:0,
  title:this.recipeTitle,
  imageUrl: this.recipeImageUrl,
  kategorijaID: this.category,
  descriptions:this.descriptions,
  price: parseInt(this.price),
  ingredients: this.sastojci2
}
console.log(this.recipeForSent)
    
    
  

  this.recipeService.addProduct(this.recipeForSent).subscribe(res2=>{
    this.router.navigate([`/recipes/`]);
    this.sastojci2=[]
  });
}
  }
}

