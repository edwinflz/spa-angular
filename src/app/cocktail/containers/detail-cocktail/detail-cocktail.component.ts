import { Component, OnInit } from '@angular/core';
import { Cocktail } from '@core/models/model/cocktail.model';
import { CocktailService } from '@core/services/cocktail.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detail-cocktail',
  templateUrl: './detail-cocktail.component.html',
  styleUrls: ['./detail-cocktail.component.css']
})
export class DetailCocktailComponent implements OnInit {

  // cocktail: Cocktail;
  loadCocktail: boolean;
  cocktail$: Observable<Cocktail>;
  spinner: boolean;

  constructor(
    private cocktailService: CocktailService,
    private route: ActivatedRoute
  ) {
    this.loadCocktail = false;
  }

  ngOnInit(): void {
    this.getCocktail();
  }

  // Evitar doble subscribe

  getCocktail() {
    this.cocktail$ = this.route.params
      .pipe(
        switchMap(params => {
          this.loadCocktail = true;
          return this.cocktailService.getCocktailById(params.id);
        })
      );
  }


  /*
  getCocktail() {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.cocktailService.getCocktailById(id)
        .subscribe(cocktail => {
          this.cocktail = cocktail;
          this.loadCocktail = true;
        }, error => {
          console.error(error);
        });
    }, error => {
      console.error(error);
    });
  }*/

}
