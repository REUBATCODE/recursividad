import { isPalindrome } from './Palindromo'; // Asegúrate de que la ruta sea correcta

beforeAll(() => {
  console.info('Autor: Hecho por Rubén Vega');
})

describe('isPalindrome', () => {
  it('Regresa un palíndromo', () => {
    // Palíndromos
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  it('Regresa un no-palíndromo', () => {
    // No palíndromos
    expect(isPalindrome("race a car")).toBe(false);
  });

});
