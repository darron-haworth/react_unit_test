const arithmaticFuctions = require('../lib/arithmaticFuctions');

test('Sum: 1 + 2 to equels 3', () => {
    expect(arithmaticFuctions.sum(1,2)).toBe(3);
});

test('Subtract: 10 - 2 to equels 8', () => {
    expect(arithmaticFuctions.subtract(10,2)).toBe(8);
});

test('Multiply: 10 * 2 to equels 20', () => {
    expect(arithmaticFuctions.multiply(10,2)).toBe(20);
});

test('Devided: 10 / 2 to equels 5', () => {
    expect(arithmaticFuctions.devided(10,2)).toBe(5);
});

test('FractionSum: 1/5 + 2/5 to equels 3/5', () => {
    expect(arithmaticFuctions.fractionSum('1/5','2/5')).toBe('3/5');
});

//////////////////////////////////////////////////////////////////////


// Other Examples from Jest Docs.



//  Common Mathers  

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

// Truthiness

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// Numbers

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  expect(value).not.toBe(0.3);    // It isn't! Because rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});

// Strings

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});


// Arrays

const shoppingList = [
  'diapers',
  'kleenex', 
  'trash bags', 
  'paper towels', 
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
});

const myMock = jest.fn();
myMock('1');
myMock('a', 'b');
console.log(myMock.mock.calls);
// > [ [1], ['a', 'b'] ]
