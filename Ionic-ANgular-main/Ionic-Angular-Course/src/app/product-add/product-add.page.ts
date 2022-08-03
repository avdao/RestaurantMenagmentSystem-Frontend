import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipesService } from '../recipes/recipes.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';
import { delay, map,  tap } from 'rxjs/operators';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.page.html',
  styleUrls: ['./product-add.page.scss'],
})
export class ProductAddPage implements OnInit {
  loadedRecipes: Recipe;
  surveyForm: FormGroup;
ccc:any[]

  constructor(private recipeService: RecipesService,private router: Router,private formBuilder: FormBuilder
   ) {
    this.surveyForm = new FormGroup({
      recipeId: new FormControl(),
      recipeTitle:new FormControl(),
      recipeImageUrl:new FormControl(),
   
      category:new FormControl()
      });
    };

    refreshList(){


      this.recipeService.getAllCategory().subscribe(res => {
        this.ccc = res;
        console.log(res);
      });
  
  
   }

  ngOnInit() {
this.refreshList()
  }

  onSubmit(){
    console.log(this.surveyForm.value);
const obj={

title:this.surveyForm.value.recipeTitle,
imageUrl:this.surveyForm.value.recipeImageUrl,

kategorijaID:this.surveyForm.value.category

};
console.log(obj);
this.recipeService.addProduct(obj).subscribe(obj12=>{

//this.recipeService.getAllRecipes().subscribe(res => {});
this.router.navigate(['/recipes']);
  console.log('OKE');
});
  }
}

