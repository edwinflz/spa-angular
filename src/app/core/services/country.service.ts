import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

import { Country } from '@core/models/model/country.model';
import { ICountry } from '../models/interfaces/icountry.interface';

import { IRegion } from '../models/interfaces/iregion.interface';
import { Region } from '../models/model/region.model';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  API_URL = environment.apis.country;

  constructor(private http: HttpClient) { }

  getCountriesByRegion(region: string): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(`${this.API_URL}${region}`)
      .pipe(
        retry(3),
        catchError(this.handleError),
        map(data => data.map(d => new Country(d.name, d.flag)))
      );
  }

  getAllRegions(): Observable<IRegion[]> {
    return this.http.get<IRegion[]>('assets/data/regions.json').pipe(
      retry(3),
      catchError(this.handleError),
      map(data => data.map(d => new Region(d.name, d.code)))
    );
  }

  private handleError(error: HttpErrorResponse) {
    // console.log(error);
    return throwError('Oops algo salio mal');
  }

}
