import { Component, OnInit } from '@angular/core';

import { AfterContentChecked, AfterViewChecked, AfterViewInit, 
  DoCheck, OnChanges, OnDestroy,  SimpleChanges } from '@angular/core';

import { RecipesService} from '../recipes/recipes.service'
import { ActivatedRoute ,Router} from '@angular/router';
import { HostListener } from '@angular/core';
import { delay, map,  tap } from 'rxjs/operators';
import { Namirnice } from '../recipes/Namirnice.Model';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { DatePipe } from '@angular/common';
import { IonDatetime } from '@ionic/angular';



@Component({
  selector: 'app-add-in-storage',
  templateUrl: './add-in-storage.page.html',
  styleUrls: ['./add-in-storage.page.scss'],
})
export class AddInStoragePage implements OnInit {
ccc:any[]
kolicina:number;
nameIngredients:number;
recipesForSent:any;
  constructor(private recipeService: RecipesService,private router: Router,private activatedRoute: ActivatedRoute) { }


  refreshList(){


    this.recipeService.getAllNamirnice().subscribe(res => {
      this.ccc = res;
      
      console.log(res);
    });


 }


 onSubmit(){

  const current = new Date();

current.setHours(0)

current.setMinutes(0)

current.setSeconds(0)

current.setMilliseconds(0)

const timestamp = new Timestamp('short',0)
  this.recipesForSent={
    
    fkNamirncie:this.nameIngredients,
   kolicina:(Number)(this.kolicina),
   
   
   
  }
  console.log(this.recipesForSent)
      
      
    
  
    this.recipeService.addSkladisteUlaz(this.recipesForSent).subscribe(res2=>{
      this.router.navigate([`/recipes/`]);

    });
 }
  ngOnInit() {
    this.refreshList()
  }

}
