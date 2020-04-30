import { IRegion } from '../interfaces/iregion.interface';

export class Region implements IRegion {

    constructor(public name: string, public code: string) { }

}
