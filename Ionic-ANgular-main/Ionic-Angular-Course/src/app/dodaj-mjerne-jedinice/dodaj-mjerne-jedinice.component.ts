import { Component, OnInit } from '@angular/core';

import { AfterContentChecked, AfterViewChecked, AfterViewInit, 
  DoCheck, OnChanges, OnDestroy,  SimpleChanges } from '@angular/core';

import { RecipesService} from '../recipes/recipes.service'
import { ActivatedRoute ,Router} from '@angular/router';
import { HostListener } from '@angular/core';
import { delay, map,  tap } from 'rxjs/operators';
import { NamirnicePage } from '../namirnice/namirnice.page';
import { MjerneJedinicePage } from '../mjerne-jedinice/mjerne-jedinice.page';
import { MjerneJedinice } from '../recipes/mjerneJedinice.model';
@Component({
  selector: 'app-dodaj-mjerne-jedinice',
  templateUrl: './dodaj-mjerne-jedinice.component.html',
  styleUrls: ['./dodaj-mjerne-jedinice.component.scss'],
})
export class DodajMjerneJediniceComponent implements OnInit {
  ccc:any=[]
  nazivMjerneJedinice:''
  nazivMjerneJediniceLong:''
  obj:MjerneJedinice;
  constructor(private recipeService: RecipesService, private namirnice: MjerneJedinicePage,private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() {}




  onSubmit(){
    this.obj={
      id:0,
      jedinica:this.nazivMjerneJedinice,
      jedinicaLong:this.nazivMjerneJediniceLong,
      
      };
      console.log(this.obj)
    this.recipeService.addMjernaJedinica(this.obj).subscribe(res2=>{
      this.namirnice.isModalOpen=false
      this.namirnice.refreshList()
    });
  }

}
