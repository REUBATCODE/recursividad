const ArbolBinario = require('./arbolMove'); 

describe('ArbolBinario', () => {
  let arbol;

  beforeEach(() => {
    arbol = new ArbolBinario();
    arbol.insertar(10);
    arbol.insertar(5);
    arbol.insertar(15);
    arbol.insertar(3);
    arbol.insertar(8);
    arbol.insertar(12);
    arbol.insertar(18);
  });

  test('insertar y buscar elementos en el árbol', () => {
    expect(arbol.buscar(10).valor).toBe(10);
    expect(arbol.buscar(5).valor).toBe(5);
    expect(arbol.buscar(15).valor).toBe(15);
    expect(arbol.buscar(3).valor).toBe(3);
    expect(arbol.buscar(8).valor).toBe(8);
    expect(arbol.buscar(12).valor).toBe(12);
    expect(arbol.buscar(18).valor).toBe(18);
    expect(arbol.buscar(100)).toBe(null);
  });

  test('eliminar elementos del árbol', () => {
    arbol.eliminar(3);
    expect(arbol.buscar(3)).toBe(null);

    arbol.eliminar(15);
    expect(arbol.buscar(15)).toBe(null);

    arbol.eliminar(10);
    expect(arbol.buscar(10)).toBe(null);

    arbol.eliminar(100);
    expect(arbol.buscar(100)).toBe(null);
  });

  test('mover elementos dentro del árbol', () => {
    arbol.mover(5, 20);
    expect(arbol.buscar(5)).toBe(null);
    expect(arbol.buscar(20).valor).toBe(20);

    arbol.mover(12, 8);
    expect(arbol.buscar(12)).toBe(null);
    expect(arbol.buscar(8).valor).toBe(8);

    arbol.mover(100, 50);
    expect(arbol.buscar(100)).toBe(null);
    expect(arbol.buscar(50)).toBe(null);
  });

  test('verificar si el árbol está vacío', () => {
    expect(arbol.estaVacio()).toBe(false);
    arbol.eliminar(10);
    expect(arbol.estaVacio()).toBe(false);
    arbol.eliminar(5);
    arbol.eliminar(15);
    arbol.eliminar(3);
    arbol.eliminar(8);
    arbol.eliminar(12);
    arbol.eliminar(18);
    expect(arbol.estaVacio()).toBe(true);
  });

  test('verificar instancia de ArbolBinario', () => {
    expect(arbol.esInstanciaDeArbolBinario(arbol)).toBe(true);
    expect(arbol.esInstanciaDeArbolBinario({})).toBe(false);
    expect(arbol.esInstanciaDeArbolBinario([])).toBe(false);
    expect(arbol.esInstanciaDeArbolBinario(null)).toBe(false);
    expect(arbol.esInstanciaDeArbolBinario(undefined)).toBe(false);
  });
});