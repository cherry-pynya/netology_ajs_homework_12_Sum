import Buyable from './Buyable';
export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  sum() {
    let sum: number = 0;
    this._items.forEach((item) => {
      sum += item.price;
    });
    return parseFloat(sum.toFixed(2));
  }

  discountSum(discount: number) {
    if (discount > 100 || discount <= 0) {
      throw new Error('discount must be number from 1 to 100');
    }
    let sum: number = 0;
    this._items.forEach((item) => {
      sum += item.price;
    });
    return parseFloat((sum * ((100 - discount) / 100)).toFixed(2));
  }

  delete(id: number): void {
    this._items.findIndex((el, i) => {
      if (el.id === id) {
        this._items.splice(i);
      }
    });
  }
}
