const bubbleSortRecursive = require('./ordenamiento');

describe('Bubble Sort', () => {
  it('Ordena un arreglo de números en orden ascendente', () => {
    const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
    const sortedArray = bubbleSortRecursive(unsortedArray, unsortedArray.length);
    expect(sortedArray).toEqual([11, 12, 22, 25, 34, 64, 90]);
  });

  it('Ordena un arreglo de letras en orden alfabético', () => {
    const unsortedArray = ['z', 'x', 'a', 'b', 'w', 'm', 'c'];
    const sortedArray = bubbleSortRecursive(unsortedArray, unsortedArray.length);
    expect(sortedArray).toEqual(['a', 'b', 'c', 'm', 'w', 'x', 'z']);
  });

  it('Ordena un arreglo vacío', () => {
    const unsortedArray = [];
    const sortedArray = bubbleSortRecursive(unsortedArray, unsortedArray.length);
    expect(sortedArray).toEqual([]);
  });
});
