import { Component, OnInit } from '@angular/core';

import { AfterContentChecked, AfterViewChecked, AfterViewInit, 
  DoCheck, OnChanges, OnDestroy,  SimpleChanges } from '@angular/core';

import { RecipesService} from '../recipes/recipes.service'
import { ActivatedRoute ,Router} from '@angular/router';
import { HostListener } from '@angular/core';
import { delay, map,  tap } from 'rxjs/operators';
import { MjerneJedinice } from '../recipes/mjerneJedinice.model';
@Component({
  selector: 'app-mjerne-jedinice',
  templateUrl: './mjerne-jedinice.page.html',
  styleUrls: ['./mjerne-jedinice.page.scss'],
})
export class MjerneJedinicePage implements OnInit {
  
    public ccc: MjerneJedinice[];
    isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    
  }
 
  constructor(private recipeService: RecipesService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  refreshList(){


    this.recipeService.getAllMjerneJedinice().subscribe(res => {
      this.ccc = res;
      
      console.log(res);
    });


 }

 ionViewWillEnter() {

  this.refreshList();
 
 
 }

}
