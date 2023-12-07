## Problema del Árbol Binario

Este código implementa la estructura de un árbol binario en JavaScript utilizando clases. La clase `Nodo` representa un nodo individual en el árbol, mientras que la clase `ArbolBinario` representa el árbol en sí mismo.

El árbol binario organiza nodos de manera que cada nodo tiene como máximo dos hijos: un nodo "izquierda" y un nodo "derecha". La inserción de un nuevo nodo en el árbol sigue un proceso de comparación de valores para determinar su posición adecuada en la estructura del árbol.

### Uso

Ejemplo de creación de un árbol binario y adición de varios nodos:

```javascript
const arbol = new ArbolBinario();
arbol.insertar(5);
arbol.insertar(3);
arbol.insertar(7);
arbol.insertar(2);
arbol.insertar(4);
arbol.insertar(6);
arbol.insertar(8);

console.log(arbol);
