

import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component,
  DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { RecipesService } from '../recipes/recipes.service';
import { ActivatedRoute ,Router} from '@angular/router';
@Component({
  selector: 'app-skladiste',
  templateUrl: './skladiste.page.html',
  styleUrls: ['./skladiste.page.scss'],
})
export class SkladistePage implements OnInit {

  public ccc:any=[]
  constructor(private recipeService: RecipesService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }


  refreshList(){


    this.recipeService.getAllSkladiste().subscribe(res => {
      this.ccc = res;
      this.ccc.forEach(element => {
        this.recipeService.getNamirnice(element.fkNamirnice).subscribe(res2 =>
          {
            element.naziv=res2.naziv
           
          });
      });
      console.log(this.ccc)
   
      
    });
  }

    ionViewWillEnter() {

      this.refreshList();
    

 }

}
