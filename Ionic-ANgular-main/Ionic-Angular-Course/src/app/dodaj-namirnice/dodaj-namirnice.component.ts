import { Component, OnInit } from '@angular/core';
import { AfterContentChecked, AfterViewChecked, AfterViewInit, 
  DoCheck, OnChanges, OnDestroy,  SimpleChanges } from '@angular/core';

import { RecipesService} from '../recipes/recipes.service'
import { ActivatedRoute ,Router} from '@angular/router';
import { HostListener } from '@angular/core';
import { delay, map,  tap } from 'rxjs/operators';
import { NamirnicePage } from '../namirnice/namirnice.page';
@Component({
  selector: 'app-dodaj-namirnice',
  templateUrl: './dodaj-namirnice.component.html',
  styleUrls: ['./dodaj-namirnice.component.scss'],
})
export class DodajNamirniceComponent implements OnInit {
ccc:any=[]
nazivSastojka:''
category:number

  constructor(private recipeService: RecipesService, private namirnice: NamirnicePage,private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.refreshList()
  }

  refreshList(){


    this.recipeService.getAllMjerneJedinice().subscribe(res => {
      this.ccc = res;
      
      console.log(res);
    });
  
  
  }

  onSubmit(){
    const obj={

      naziv:this.nazivSastojka,
      mjernaJedinica:this.category,
      
      };
    this.recipeService.addSastojak(obj).subscribe(res2=>{
      this.namirnice.isModalOpen=false
      this.namirnice.refreshList()
    });
  }

}
