const ArbolBinario = require('./arbolDelete');
describe('ArbolBinario', () => {
  let arbol;

  beforeEach(() => {
    arbol = new ArbolBinario();
  });

  test('Inicialización del árbol', () => {
    expect(arbol.raiz).toBeNull();
    expect(arbol.estaVacio()).toBe(true);
  });

  test('Insertar nodo en el árbol', () => {
    arbol.insertar(5);
    arbol.insertar(3);
    arbol.insertar(7);
    expect(arbol.raiz.valor).toBe(5);
    expect(arbol.raiz.izquierda.valor).toBe(3);
    expect(arbol.raiz.derecha.valor).toBe(7);
  });

  test('Buscar nodo en el árbol', () => {
    arbol.insertar(5);
    arbol.insertar(3);
    arbol.insertar(7);
    expect(arbol.buscar(5).valor).toBe(5);
    expect(arbol.buscar(3).valor).toBe(3);
    expect(arbol.buscar(7).valor).toBe(7);
    expect(arbol.buscar(10)).toBeNull();
  });

  test('Eliminar nodo del árbol', () => {
    arbol.insertar(5);
    arbol.insertar(3);
    arbol.insertar(7);
    arbol.eliminar(3);
    expect(arbol.buscar(3)).toBeNull();
    arbol.eliminar(5);
    expect(arbol.buscar(5)).toBeNull();
    expect(arbol.buscar(7).valor).toBe(7);
  });

  test('Verificar instancia de ArbolBinario', () => {
    expect(arbol.esInstanciaDeArbolBinario(arbol)).toBe(true);
    expect(arbol.esInstanciaDeArbolBinario({})).toBe(false);
    expect(arbol.esInstanciaDeArbolBinario([])).toBe(false);
  });
});
