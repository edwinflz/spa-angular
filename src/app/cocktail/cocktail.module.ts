import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailRoutingModule } from './cocktail-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ClocktailComponent } from './containers/clocktail/clocktail.component';
import { ListCocktailsComponent } from './containers/list-cocktails/list-cocktails.component';
import { DetailCocktailComponent } from './containers/detail-cocktail/detail-cocktail.component';


@NgModule({
  declarations: [ClocktailComponent, ListCocktailsComponent, DetailCocktailComponent],
  imports: [
    CommonModule,
    CocktailRoutingModule,
    SharedModule
  ]
})
export class CocktailModule { }
