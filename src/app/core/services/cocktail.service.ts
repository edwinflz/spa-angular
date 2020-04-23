import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { CockTailFilter } from '../models/interfaces/cocktail-filter.interface';
import { Cocktail } from '../models/model/cocktail.model';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

import get from 'lodash/get';
import forEach from 'lodash/forEach';


@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  API_URL = environment.apis.cocktail;

  constructor(private http: HttpClient) { }

  getCocktailsFilter(filter: CockTailFilter) {

    const additional = this.createUrlFilter(filter);

    console.log(`${this.API_URL}${additional}`);

    return this.http.get(`${this.API_URL}${additional}`)
      .pipe(
        retry(3),
        catchError(this.handleError),
        map(data => this.parseData(get(data, 'drinks')))
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
    console.log(error);
    return throwError('Oops algo salio mal');
  }

  private parseData(listCocktails) {

    const newListCocktails = [];

    // Recorro la lista
    forEach(listCocktails, c => {

      // Creo el cocktail
      const cocktail = new Cocktail(c);

      // Lo añado en nuestra nueva lista
      newListCocktails.push(cocktail);

    });

    return newListCocktails;
  }




}
