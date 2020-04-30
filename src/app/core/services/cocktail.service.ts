import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { CockTailFilter } from '../models/interfaces/cocktail-filter.interface';
import { Cocktail } from '../models/model/cocktail.model';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  API_URL = environment.apis.cocktail;

  constructor(private http: HttpClient) { }

  getCocktailsFilter(filter: CockTailFilter) {

    const additional = this.createUrlFilter(filter);

    return this.http.get(`${this.API_URL}${additional}`)
      .pipe(
        retry(3),
        catchError(this.handleError),
        // Loadash: this.parseData(get(data, 'drinks'))
        map(data => this.parseData(data))
      );
  }

  getCocktailById(id: string) {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
      .pipe(
        retry(3),
        catchError(this.handleError),
        map(data => {
          const list = this.parseData(data);
          return list[0];
        })
      );
  }


  private createUrlFilter(filter: CockTailFilter): string {
    let url = '';

    if (filter.searchBy === 'name') {
      url = 'search.php?s=' + filter.value;
    } else {
      url = 'filter.php?';

      switch (filter.searchBy) {
        case 'glass':
          url += 'g=';
          break;
        case 'category':
          url += 'c=';
          break;
        default:
          url += 'i=';
          break;
      }
      url += filter.value;
    }

    return url;

  }

  private handleError(error: HttpErrorResponse) {
    // console.log(error);
    return throwError('Oops algo salio mal');
  }

  private parseData(listCocktails) {

    const newListCocktails = [];

    if (listCocktails) {
      for (const c of listCocktails.drinks) {
        const cocktail = new Cocktail(c);
        newListCocktails.push(cocktail);
      }
    }

    return newListCocktails;
  }


  // Recorro la lista
  // forEach(listCocktails, c => {

  // console.log(c);

  // Creo el cocktail
  // const cocktail = new Cocktail(c);

  // Lo añado en nuestra nueva lista
  // newListCocktails.push(cocktail);

  // });


}
