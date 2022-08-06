import { Component, OnInit } from '@angular/core';

import { AfterContentChecked, AfterViewChecked, AfterViewInit, 
  DoCheck, OnChanges, OnDestroy,  SimpleChanges } from '@angular/core';

import { RecipesService} from '../recipes/recipes.service'
import { ActivatedRoute ,Router} from '@angular/router';
import { HostListener } from '@angular/core';
import { delay, map,  tap } from 'rxjs/operators';
import { NamirnicePage } from '../namirnice/namirnice.page';
import { MjerneJedinicePage } from '../mjerne-jedinice/mjerne-jedinice.page';
@Component({
  selector: 'app-dodaj-mjerne-jedinice',
  templateUrl: './dodaj-mjerne-jedinice.component.html',
  styleUrls: ['./dodaj-mjerne-jedinice.component.scss'],
})
export class DodajMjerneJediniceComponent implements OnInit {
  ccc:any=[]
  nazivMjerneJedinice:''
  category:number
  constructor(private recipeService: RecipesService, private namirnice: MjerneJedinicePage,private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() {}




  onSubmit(){
    const obj={

      jedinica:this.nazivMjerneJedinice,
      jedinicaLong:this.category,
      
      };
    this.recipeService.addMjernaJedinica(obj).subscribe(res2=>{
      this.namirnice.isModalOpen=false
      this.namirnice.refreshList()
    });
  }

}
