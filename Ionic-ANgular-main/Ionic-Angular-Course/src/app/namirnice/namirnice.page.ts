import { Component, OnInit } from '@angular/core';

import { AfterContentChecked, AfterViewChecked, AfterViewInit, 
  DoCheck, OnChanges, OnDestroy,  SimpleChanges } from '@angular/core';

import { RecipesService} from '../recipes/recipes.service'
import { ActivatedRoute ,Router} from '@angular/router';
import { HostListener } from '@angular/core';
import { delay, map,  tap } from 'rxjs/operators';
import { Namirnice } from '../recipes/Namirnice.Model';
@Component({
  selector: 'app-namirnice',
  templateUrl: './namirnice.page.html',
  styleUrls: ['./namirnice.page.scss'],
})
export class NamirnicePage implements OnInit {
  public ccc: Namirnice[];
  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    
  }
  constructor(private recipeService: RecipesService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  refreshList(){


    this.recipeService.getAllNamirnice().subscribe(res => {
      this.ccc = res;
      
      console.log(res);
    });


 }

 ionViewWillEnter() {

  this.refreshList();
 
 
 }


}
