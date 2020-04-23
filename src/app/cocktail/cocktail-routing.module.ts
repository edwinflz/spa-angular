import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClocktailComponent } from './containers/clocktail/clocktail.component';
import { ListCocktailsComponent } from './containers/list-cocktails/list-cocktails.component';
import { DetailCocktailComponent } from './containers/detail-cocktail/detail-cocktail.component';


const routes: Routes = [
  {
    path: '',
    component: ClocktailComponent,
    children: [
      {
        path: '',
        redirectTo: '/cocktails/list-cocktails',
        pathMatch: 'full',
      },
      {
        path: 'list-cocktails',
        component: ListCocktailsComponent
      },
      {
        path: 'detail-cocktail/:id',
        component: DetailCocktailComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocktailRoutingModule { }
