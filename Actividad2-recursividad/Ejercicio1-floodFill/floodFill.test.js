import { floodFill } from './floodFill';

beforeAll(() => {
  console.info('Autor: Hecho por Rubén Vega');
})

describe('floodFill', () => {
  it('should fill the area correctly', () => {
    const grid = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 0, 0],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1]
    ];

    const expectedGrid = [
      [2, 2, 2, 2, 2],
      [2, 2, 2, 0, 0],
      [2, 0, 0, 0, 1],
      [2, 2, 2, 2, 2]
    ];

    floodFill(grid, 1, 2, 1, 2);
    expect(grid).toEqual(expectedGrid);
  });

});
