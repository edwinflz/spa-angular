import { ICountry } from '../interfaces/icountry.interface';

export class Country implements ICountry {

    constructor(public name: string, public flag: string) {

    }

}