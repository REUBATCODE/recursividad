const symmetricDifference = require('./symetricDifference')
it('Diferencia simétrica de dos matrices', () => {
  expect(symmetricDifference([1, 2, 3], [3, 4, 5])).toEqual(expect.arrayContaining([1, 2, 4, 5]));
  expect(symmetricDifference([1, 2, 3, 4], [3, 4, 5])).toEqual(expect.arrayContaining([1, 2, 5]));
  expect(symmetricDifference([1, 2, 3], [1, 2, 3])).toEqual(expect.arrayContaining([]));
  expect(symmetricDifference([], [1, 2, 3])).toEqual(expect.arrayContaining([1, 2, 3]));
  expect(symmetricDifference([], [])).toEqual(expect.arrayContaining([]));
});