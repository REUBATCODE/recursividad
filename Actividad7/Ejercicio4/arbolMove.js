// Clase que representa un nodo del árbol
class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.izquierda = null;
      this.derecha = null;
    }
  }
  
  // Clase que representa el árbol binario
  class ArbolBinario {
    constructor() {
      this.raiz = null;
    }
  
    // Método para insertar un nuevo nodo en el árbol
    insertar(valor) {
      const nuevoNodo = new Nodo(valor);
  
      if (this.raiz === null) {
        this.raiz = nuevoNodo;
      } else {
        this.insertarNodo(this.raiz, nuevoNodo);
      }
    }
  
    // Método auxiliar para insertar un nodo en una posición específica del árbol
    insertarNodo(nodo, nuevoNodo) {
      if (nuevoNodo.valor < nodo.valor) {
        if (nodo.izquierda === null) {
          nodo.izquierda = nuevoNodo;
        } else {
          this.insertarNodo(nodo.izquierda, nuevoNodo);
        }
      } else {
        if (nodo.derecha === null) {
          nodo.derecha = nuevoNodo;
        } else {
          this.insertarNodo(nodo.derecha, nuevoNodo);
        }
      }
    }
    // Método para buscar un valor en el árbol
    buscar(valor) {
        return this.buscarNodo(this.raiz, valor);
    }

    // Método auxiliar para buscar un nodo con un valor específico en el árbol
    buscarNodo(nodo, valor) {
        if (nodo === null || nodo.valor === valor) {
        return nodo;
        }

        if (valor < nodo.valor) {
        return this.buscarNodo(nodo.izquierda, valor);
        } else {
        return this.buscarNodo(nodo.derecha, valor);
        }
    }eliminar(valor) {
    this.raiz = this.eliminarNodo(this.raiz, valor);
  }

  // Método auxiliar para eliminar un nodo con un valor específico del árbol
  eliminarNodo(raizActual, valor) {
    if (raizActual === null) {
      return raizActual;
    }

    // Buscar en el subárbol izquierdo
    if (valor < raizActual.valor) {
      raizActual.izquierda = this.eliminarNodo(raizActual.izquierda, valor);
    }
    // Buscar en el subárbol derecho
    else if (valor > raizActual.valor) {
      raizActual.derecha = this.eliminarNodo(raizActual.derecha, valor);
    }
    // Nodo con el valor encontrado
    else {
      // Caso 1: Nodo sin hijos o con un solo hijo
      if (raizActual.izquierda === null) {
        console.log(`Elemento ${valor} eliminado`);
        return raizActual.derecha;
      } else if (raizActual.derecha === null) {
        console.log(`Elemento ${valor} eliminado`);
        return raizActual.izquierda;
      }

      // Caso 2: Nodo con dos hijos
      // Encontrar el sucesor inorden (nodo más pequeño en el subárbol derecho)
      raizActual.valor = this.encontrarMinimoValor(raizActual.derecha);
      // Eliminar el sucesor inorden
      raizActual.derecha = this.eliminarNodo(raizActual.derecha, raizActual.valor);
    }

    return raizActual;
  }

  // Método auxiliar para encontrar el nodo con el valor más pequeño en un subárbol
  encontrarMinimoValor(raiz) {
    while (raiz.izquierda !== null) {
      raiz = raiz.izquierda;
    }
    return raiz.valor;
  }
  eliminar(valor) {
    this.raiz = this.eliminarNodo(this.raiz, valor);
  }

  // Método auxiliar para eliminar un nodo con un valor específico del árbol
  eliminarNodo(raizActual, valor) {
    if (raizActual === null) {
      return raizActual;
    }

    // Buscar en el subárbol izquierdo
    if (valor < raizActual.valor) {
      raizActual.izquierda = this.eliminarNodo(raizActual.izquierda, valor);
    }
    // Buscar en el subárbol derecho
    else if (valor > raizActual.valor) {
      raizActual.derecha = this.eliminarNodo(raizActual.derecha, valor);
    }
    // Nodo con el valor encontrado
    else {
      // Caso 1: Nodo sin hijos o con un solo hijo
      if (raizActual.izquierda === null) {
        console.log(`Elemento ${valor} eliminado`);
        return raizActual.derecha;
      } else if (raizActual.derecha === null) {
        console.log(`Elemento ${valor} eliminado`);
        return raizActual.izquierda;
      }

      // Caso 2: Nodo con dos hijos
      // Encontrar el sucesor inorden (nodo más pequeño en el subárbol derecho)
      raizActual.valor = this.encontrarMinimoValor(raizActual.derecha);
      // Eliminar el sucesor inorden
      raizActual.derecha = this.eliminarNodo(raizActual.derecha, raizActual.valor);
    }

    return raizActual;
  }

  // Método auxiliar para encontrar el nodo con el valor más pequeño en un subárbol
  encontrarMinimoValor(raiz) {
    while (raiz.izquierda !== null) {
      raiz = raiz.izquierda;
    }
    return raiz.valor;
  }
  mover(valor, nuevaPosicion) {
    const nodo = this.buscar(valor);

    if (nodo) {
      // Eliminar el nodo de su posición actual
      this.raiz = this.eliminarNodo(this.raiz, valor);

      // Insertar el nodo en la nueva posición
      this.insertar(nuevaPosicion);

      console.log(`Elemento ${valor} movido a la posición ${nuevaPosicion}`);
    } else {
      console.log(`Elemento ${valor} no encontrado en el árbol`);
    }
  }
    // Método para verificar si el árbol está vacío
    estaVacio() {
      return this.raiz === null;
    }
  // Método para verificar si es una instancia de ArbolBinario
  esInstanciaDeArbolBinario(obj) {
    return obj instanceof ArbolBinario;
  }  
}

module.exports = ArbolBinario;