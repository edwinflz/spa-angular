import { ICocktail } from '../interfaces/icocktail.interface';

export class Cocktail implements ICocktail {

    private data;

    constructor(data) {
        this.data = data;
    }

    get id(): string {
        return this.data.idDrink;
    }

    get name(): string {
        return this.data.strDrink;
    }

    get img(): string {
        return this.data.strDrinkThumb;
    }

    get glass(): string {
        return this.data.strGlass;
    }

    get ingredients(): string[] {
        // return this.getList('data.strIngredient');
        return this.getList('strIngredient');
    }

    get numIngredients(): number {
        return this.ingredients.length;
    }

    get instructions(): string {
        return this.data.strInstructionsES ? this.data.strInstructionsES : this.data.strInstructions;
    }

    get measures(): string[] {
        return this.getList('strMeasure');
    }

    get numMeasures(): number {
        return this.measures.length;
    }


    private getList(path: string): string[] {
        let index = 1;
        let element = this.data[path + index];
        //  let element = get(this, path + index);
        const list = [];

        while (element) {
            list.push(element);
            index++;
            // element = get(this, path + index);
            element = this.data[path + index];
        }

        return list;
    }

}
