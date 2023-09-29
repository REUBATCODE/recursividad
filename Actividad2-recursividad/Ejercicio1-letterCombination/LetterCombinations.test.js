import { letterCombinations } from './LetterCombinations'; 

beforeAll(() => {
  console.info('Autor: Hecho por Rubén Vega');
})

describe('letterCombinations', () => {
  it('Genera combinaciones segun las teclas del telefono.', () => {
    const phoneNumber = '23';
    const expectedCombinations = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];

    const result = letterCombinations(phoneNumber);

    expect(result).toEqual(expectedCombinations);
  });

  it('input vacío', () => {
    const phoneNumber = '';
    const expectedCombinations = [];

    const result = letterCombinations(phoneNumber);

    expect(result).toEqual(expectedCombinations);
  });

  it('input 1s', () => {
    const phoneNumber = '120';
    const expectedCombinations = [];

    const result = letterCombinations(phoneNumber);

    expect(result).toEqual(expectedCombinations);
  });

  // Add more test cases and describe blocks as needed
});
