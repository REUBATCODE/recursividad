import { reverseArray } from './reverse';
describe('reverseArray function', () => {
  it('Debe manejar elementos vacíos', () => {
    const result = reverseArray([]);
    expect(result).toEqual([]);
  });

  it('Le da reverse a un solo elemento', () => {
    const result = reverseArray([1]);
    expect(result).toEqual([1]);
  });

  it('Le da reverse a múltiples elementos', () => {
    const result = reverseArray([1, 2, 3, 4, 5]);
    expect(result).toEqual([5, 4, 3, 2, 1]);
  });
});
  