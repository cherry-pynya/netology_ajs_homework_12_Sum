import Cart from './Cart';
import Film from './Film';
const cart = new Cart();
console.log(cart);
const avengers = new Film(
  1,
  'mstiteli',
  300,
  'avengers',
  1812,
  'USA',
  ['action', 'syperhero'],
  'url',
  true,
  '04:20',
  'blablabla'
);
const avengersDva = new Film(
  2,
  'mstiteli',
  666,
  'avengers',
  1812,
  'USA',
  ['action', 'syperhero'],
  'url',
  true,
  '04:20',
  'blablabla'
);
console.log(avengers);
cart.add(avengers);
cart.add(avengersDva);
console.log(cart);
const array = cart.items;
console.log(array);
const sum = cart.sum();
console.log(sum);
const discountSum = cart.discountSum(10);
console.log(discountSum);
cart.delete(2);
console.log(cart);
