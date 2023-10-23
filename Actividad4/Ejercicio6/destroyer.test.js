const destroyer = require('./destroyer');

describe('destroyer', () => {
  it('Debe remover strings especificos', () => {
    expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1]);
    expect(destroyer(['apple', 'banana', 'cherry', 'banana'], 'banana')).toEqual(['apple', 'cherry']);
    expect(destroyer([5, 5, 5, 5, 5], 5)).toEqual([]);
  });

  it('Debe manejar arreglos vacíos', () => {
    expect(destroyer([], 1, 2, 3)).toEqual([]);
  });

  it('Debe manejar elementos que no haya que eliminar', () => {
    expect(destroyer([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('Debe manejar una argument list vacía', () => {
    expect(destroyer([1, 2, 3], [], [])).toEqual([1, 2, 3]);
  });
});
