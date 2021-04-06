import Cart from '../Cart';
import Film from '../Film';

const cart = new Cart();
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
const avengers2 = new Film(
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
const anvengers3 = new Film(
  3,
  'mstiteli',
  56.6,
  'avengers',
  1812,
  'USA',
  ['action', 'syperhero'],
  'url',
  true,
  '04:20',
  'blablabla'
);
const avengers4 = new Film(
  4,
  'mstiteli',
  228,
  'avengers',
  1812,
  'USA',
  ['action', 'syperhero'],
  'url',
  true,
  '04:20',
  'blablabla'
);
const avengers5 = new Film(
  5,
  'mstiteli',
  5666,
  'avengers',
  1812,
  'USA',
  ['action', 'syperhero'],
  'url',
  true,
  '04:20',
  'blablabla'
);
cart.add(avengers);
cart.add(avengers2);
cart.add(anvengers3);
cart.add(avengers4);
cart.add(avengers5);

test('sum', () => {
  expect(cart.sum()).toBe(6916.6);
});

test('sum minus', () => {
  cart.add(
    new Film(
      6,
      'mstiteli',
      -8000,
      'avengers',
      1812,
      'USA',
      ['action', 'syperhero'],
      'url',
      true,
      '04:20',
      'blablabla'
    )
  );
  expect(cart.sum()).toBe(-1083.4);
});

test('sum 0', () => {
  const cart2 = new Cart();
  expect(cart2.sum()).toBe(0);
});

test('discountSum', () => {
  cart.delete(6);
  expect(cart.discountSum(10)).toBe(6224.94);
});

test('discountSum 0', () => {
  const cart2 = new Cart();
  expect(cart2.discountSum(10)).toBe(0);
});

test('discountSum error', () => {
  const cart3 = new Cart();
  expect(() => {
    cart3.discountSum(111);
  }).toThrow();
});

test('discountSum minus', () => {
  cart.add(
    new Film(
      6,
      'mstiteli',
      -8000,
      'avengers',
      1812,
      'USA',
      ['action', 'syperhero'],
      'url',
      true,
      '04:20',
      'blablabla'
    )
  );
  expect(cart.discountSum(20)).toBe(-866.72);
});

test('delete', () => {
  const cart4 = new Cart();
  cart4.add(avengers);
  cart4.delete(1);
  expect(cart4.items).toEqual([]);
});
