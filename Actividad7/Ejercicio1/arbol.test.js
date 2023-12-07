const { Nodo, ArbolBinario } = require('./arbol');

test('Inserción de nodos en el árbol binario', () => {
  const arbol = new ArbolBinario();
  arbol.insertar(5);
  arbol.insertar(3);
  arbol.insertar(7);

  expect(arbol.raiz.valor).toBe(5);
  expect(arbol.raiz.izquierda.valor).toBe(3);
  expect(arbol.raiz.derecha.valor).toBe(7);
});