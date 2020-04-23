import { Component, OnInit } from '@angular/core';

import { CockTailFilter } from '@core/models/interfaces/cocktail-filter.interface';
import { CocktailService } from '@core/services/cocktail.service';
import { Cocktail } from '@core/models/model/cocktail.model';

@Component({
  selector: 'app-list-cocktails',
  templateUrl: './list-cocktails.component.html',
  styleUrls: ['./list-cocktails.component.css']
})
export class ListCocktailsComponent implements OnInit {

  showFilter: boolean;
  filter: CockTailFilter;
  listCocktails: Cocktail[];


  constructor(private cocktailService: CocktailService) {
    this.init();
  }

  ngOnInit(): void {
  }

  init() {
    this.showFilter = false;
    this.filter = {
      searchBy: 'name',
      value: ''
    };
    this.listCocktails = [];
  }

  filterData() {
    this.cocktailService.getCocktailsFilter(this.filter)
      .subscribe(cocktails => {
        this.listCocktails = cocktails;
      });
  }

}
