import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailRoutingModule } from './cocktail-routing.module';
import { SharedModule } from '../shared/shared.module';
import {NgxPaginationModule} from 'ngx-pagination';


import { ClocktailComponent } from './containers/clocktail/clocktail.component';
import { ListCocktailsComponent } from './containers/list-cocktails/list-cocktails.component';
import { DetailCocktailComponent } from './containers/detail-cocktail/detail-cocktail.component';
import { FilterCocktailComponent } from './components/filter-cocktail/filter-cocktail.component';


@NgModule({
  declarations: [ClocktailComponent, ListCocktailsComponent, DetailCocktailComponent, FilterCocktailComponent],
  imports: [
    CommonModule,
    CocktailRoutingModule,
    SharedModule,
    NgxPaginationModule,

  ]
})
export class CocktailModule { }
