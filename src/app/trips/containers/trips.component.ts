import { Component, OnInit } from '@angular/core';

import { CountryService } from '@core/services/country.service';

import { forkJoin } from 'rxjs';

import { ICountry } from '@core/models/interfaces/icountry.interface';
import { IRegion } from '@core/models/interfaces/iregion.interface';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  load: boolean;
  listRegions: IRegion[];
  listCountriesToVisit: ICountry[];
  listCountries: ICountry[];
  regionSelected: string;


  constructor(
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.init();
    this.fetchRegionsAndCountries();
  }

  init() {
    this.load = false;
    this.listRegions = [];
    this.listCountries = [];
    this.listCountriesToVisit = [];
    this.regionSelected = 'EU';
  }

  // ForkJoin subscribirse a varios observables y recuperar sus respuestas
  fetchRegionsAndCountries() {
    forkJoin(
      [
        this.countryService.getCountriesByRegion(this.regionSelected),
        this.countryService.getAllRegions(),
      ]
    ).subscribe(([countries, regions]) => {
      this.listCountries = countries;
      this.listRegions = regions;
      this.load = true;
    }, error => {
      console.error('Error: ' + error);
    });
  }

  filterCountries($event) {
    this.load = false;
    this.countryService.getCountriesByRegion($event.value)
      .subscribe(countries => {
        this.listCountries = this.differenceBy(countries, this.listCountriesToVisit, 'name');
        this.load = true;
      }, error => console.error('Error: ' + error))
  }

  // Filtro los datos que traigo del servicio
  // La condicion del filtro es que me traiga los objectos que al menos
  // No se encuentren en la lista de visitas
  differenceBy(countriesObservable, countriesVisited, key) {
    return countriesObservable.filter(a => !countriesVisited.some(b => b[key] === a[key])
    );
  }

  drop(event: CdkDragDrop<ICountry[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
