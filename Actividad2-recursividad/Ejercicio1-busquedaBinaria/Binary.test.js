import { binarySearch } from './Binary.js';

beforeAll(() => {
  console.info('Autor: Hecho por Ruben Vega');
})

describe('binarySearch', () => {
  const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];

  it('should return the correct index for the search value', () => {
    // Valores en el array
    expect(binarySearch(sortedArray, 7)).toBe(3);
    expect(binarySearch(sortedArray, 13)).toBe(6);
    
  });

  it('should return -1 for a search value not present in the array', () => {
    // Valores que no están en el array
    expect(binarySearch(sortedArray, 8)).toBe(-1);
    expect(binarySearch(sortedArray, 14)).toBe(-1);
  });

});
