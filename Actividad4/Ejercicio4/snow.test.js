const Solution = require('./snow.js');

describe('Solution', () => {
  describe('colectarNieveCuadratica', () => {
    it('Cálculo de forma cuadrática (cuadratic)', () => {
      const solution = new Solution();
      const list = [0, 1, 0, 2, 1, 0, 3, 2, 1, 1, 1, 5, 0, 1];
      const result = solution.colectarNieveCuadratica(list);
      const expectedResult = 12;
      expect(result).toEqual(expectedResult);
    });
  });

  describe('colectarNieveLineal', () => {
    it('Debe poder calcular lineal (linear)', () => {
    });
  });

  describe('colectarNieveBest', () => {
    it('Forma óptima (best)', () => {
    });
  });
});
