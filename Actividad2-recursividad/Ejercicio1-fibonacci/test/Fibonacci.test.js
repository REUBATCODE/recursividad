import { fibonacci } from '../Fibonacci.js';
const assert = require('assert');

beforeAll(() => {
  console.info('Autor: Hecho por Rubén Vega');
})

describe('Fibonacci', () => {
  it('Debería devolver 0 para n = 0', () => {
    assert.equal(fibonacci(0), 0);
  });

  it('Debería devolver 1 para n = 1', () => {
    assert.equal(fibonacci(1), 1);
  });

  it('Debería devolver 55 para n = 10', () => {
    assert.equal(fibonacci(10), 55);
  });

  it('Debería devolver 6765 para n = 20', () => {
    assert.equal(fibonacci(20), 6765);
  });
});
