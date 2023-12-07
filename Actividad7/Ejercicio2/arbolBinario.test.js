const ArbolBinario = require('./arbolBinario');

describe('ArbolBinario', () => {
  let arbol;

  beforeEach(() => {
    arbol = new ArbolBinario();
    // Insertar nodos para las pruebas
    arbol.insertar(10);
    arbol.insertar(5);
    arbol.insertar(15);
    arbol.insertar(3);
    arbol.insertar(7);
    arbol.insertar(12);
    arbol.insertar(17);
  });

  test('insertar y buscar nodos', () => {
    expect(arbol.buscar(10).valor).toBe(10);
    expect(arbol.buscar(5).valor).toBe(5);
    expect(arbol.buscar(15).valor).toBe(15);
    expect(arbol.buscar(3).valor).toBe(3);
    expect(arbol.buscar(7).valor).toBe(7);
    expect(arbol.buscar(12).valor).toBe(12);
    expect(arbol.buscar(17).valor).toBe(17);
    expect(arbol.buscar(100)).toBe(null); // Valor no encontrado
  });

  test('eliminar nodos', () => {
    expect(arbol.buscar(3)).not.toBe(null);
    arbol.eliminar(3);
    expect(arbol.buscar(3)).toBe(null);

    expect(arbol.buscar(15)).not.toBe(null);
    arbol.eliminar(15);
    expect(arbol.buscar(15)).toBe(null);

    expect(arbol.buscar(10)).not.toBe(null);
    arbol.eliminar(10);
    expect(arbol.buscar(10)).toBe(null);
  });

  test('verificar si el árbol está vacío', () => {
    expect(arbol.estaVacio()).toBe(false);
    arbol.eliminar(10);
    arbol.eliminar(5);
    arbol.eliminar(15);
    arbol.eliminar(3);
    arbol.eliminar(7);
    arbol.eliminar(12);
    arbol.eliminar(17);
    expect(arbol.estaVacio()).toBe(true);
  });

  test('verificar instancia de ArbolBinario', () => {
    const otroArbol = new ArbolBinario();
    expect(arbol.esInstanciaDeArbolBinario(arbol)).toBe(true);
    expect(arbol.esInstanciaDeArbolBinario(otroArbol)).toBe(true);
    expect(arbol.esInstanciaDeArbolBinario({})).toBe(false);
    expect(arbol.esInstanciaDeArbolBinario(null)).toBe(false);
  });
});
