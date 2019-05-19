import { Component } from '@angular/core';
import { MercadoLibreApi } from '../Services/rest.mercadoLibre';
import { Categorie } from '../Model/Categorie';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  private meli: MercadoLibreApi;
  public allCategories: Categorie[];
  private categoriesChildren : Categorie[];
  private suggestedCategories : Categorie[];
public Categorie : Categorie;
  public categorieChildrenDiv : boolean = false;
  public suggestionCategoriesDiv : boolean = false;
  
  constructor(meliMla: MercadoLibreApi){
    this.meli = meliMla;
  }

  ngOnInit(){
    this.meli.getAllCategories().subscribe((res: Categorie[]) => {
      this.allCategories = res;
    }, (err) => alert(err) );
  }

  getCategories($event){
    this.meli.getCategories($event.detail.value).subscribe((res : Categorie) => {
      this.categoriesChildren = res.children_categories;
    }, (err) => alert(err) );
    this.categorieChildrenDiv = true;
  }

  getSuggestedCategories($event){
    this.meli.getSuggestedCategories($event.detail.value).subscribe((res : Categorie) => {
      this.suggestedCategories = res.path_from_root;
    })
    this.suggestionCategoriesDiv = true;
  }
}
