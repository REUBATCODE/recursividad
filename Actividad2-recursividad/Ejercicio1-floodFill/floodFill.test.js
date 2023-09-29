import { floodFill } from "./floodFill"
describe('Suite de pruebas para la función de FloodFill()',() => {
    beforeAll(() =>{
        console.info('Autor: Hecho por Ruben Vega');
    })
    it('Flood Fill Test', () => {
        const matrix = [
          [1, 1, 1],
          [1, 1, 0],
          [1, 0, 1],
        ];
        
        const startX = 1;
        const startY = 1;
        const newColor = 2;
      
        const expectedResult = [
          [2, 2, 2],
          [2, 2, 0],
          [2, 0, 1],
        ];
        expect(floodFill(matrix, startX, startY, newColor)).toEqual(expectedResult);
})});