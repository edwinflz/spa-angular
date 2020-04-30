import { Component, OnInit } from '@angular/core';

import { Cocktail } from '@core/models/model/cocktail.model';

@Component({
  selector: 'app-list-cocktails',
  templateUrl: './list-cocktails.component.html'
})
export class ListCocktailsComponent implements OnInit {

  showFilter: boolean;
  listCocktails: Cocktail[];
  loadCocktails: boolean;

  // Paginación
  public items: number;
  public page: number;

  constructor() {
    this.init();
  }

  ngOnInit(): void {
  }

  init() {
    this.showFilter = false;
    this.listCocktails = [];
    // Elementos a mostrar
    this.items = 12;
    // Pagina inicial
    this.page = 1;
    this.loadCocktails = true;
  }

  fetchCocktails(list: Cocktail[]) {
    this.listCocktails = list;
  }

  showLoadCocktails(loadCocktails: boolean){
      this.loadCocktails = loadCocktails;
  }



}
