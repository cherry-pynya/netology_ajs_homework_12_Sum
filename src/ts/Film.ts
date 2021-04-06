import Buyable from './Buyable';
export default class Film implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly engName: string,
    readonly year: number,
    readonly country: string,
    readonly ganre: Array<string>,
    readonly img: string,
    readonly imax: boolean,
    readonly length: string,
    readonly moto: string
  ) {}
}
