import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CockTailFilter } from '@core/models/interfaces/cocktail-filter.interface';
import { CocktailService } from '@core/services/cocktail.service';
import { Cocktail } from '@core/models/model/cocktail.model';

@Component({
  selector: 'app-filter-cocktail',
  templateUrl: './filter-cocktail.component.html'
})
export class FilterCocktailComponent implements OnInit {

  @Input() showFilter;
  @Output() list: EventEmitter<Cocktail[]>;
  listCocktails: Cocktail[];
  filter: CockTailFilter;
  @Output() loadCocktails: EventEmitter<boolean>;
  spinner: boolean;


  constructor(private cocktailService: CocktailService) {
    this.init();
  }

  init() {
    this.filter = {
      searchBy: 'name',
      value: ''
    };
    this.listCocktails = [];
    this.list = new EventEmitter();
    this.loadCocktails = new EventEmitter();
    this.spinner = true;
  }

  ngOnInit(): void {
  }

  filterData() {

    this.loadCocktails.emit(false);
    this.spinner = false;

    this.cocktailService.getCocktailsFilter(this.filter)
      .subscribe(cocktails => {
        this.listCocktails = cocktails;
        this.sendList(this.listCocktails);
        this.loadCocktails.emit(true);
        //  console.log(cocktails);
      });
  }

  sendList(listCocktails) {
    this.spinner = true;
    this.list.emit(listCocktails);
  }

}
