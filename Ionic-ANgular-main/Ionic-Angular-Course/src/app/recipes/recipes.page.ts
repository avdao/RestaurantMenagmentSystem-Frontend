import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component,
   DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Recipe } from './recipe.model';
import { Category } from './category-model';
import { RecipesService } from './recipes.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { HostListener } from '@angular/core';
import { delay, map,  tap } from 'rxjs/operators';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage {

  public  recipes: Recipe[];
public recipe: any;
public allRecipes: Recipe[];

  public ccc: any[];
  public recipesByTitle:any[];

title: '';



constructor(private recipeService: RecipesService,private activatedRoute: ActivatedRoute) { }
@HostListener('window:submit', ['$event'])
onSubmit() {
  this.refreshList();
}
@HostListener('window:click', ['$event'])
onClick(){
  this.refreshList();
}

   refreshList(){


      this.recipeService.getAllRecipes().subscribe(res => {
        this.ccc = res;
        this.allRecipes=res;
        console.log(res);
      });


   }

   searchTitle() {
    this.recipesByTitle = [];

    console.log(this.title);
    this.allRecipes.forEach(recipe => {
      if(recipe.title.toLocaleLowerCase().includes(this.title.toLocaleLowerCase())){
        this.recipesByTitle.push(recipe);
        console.log(recipe)
      }

    this.ccc = this.recipesByTitle;
  })}
 /* ngOnInit(): void {
this.refreshList();
//this.ionViewDidEnter();
  }
*/
ionViewWillEnter() {

 this.refreshList();


}


 }
