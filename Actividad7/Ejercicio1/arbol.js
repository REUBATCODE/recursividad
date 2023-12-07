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
   
    insertar(valor) {
      const nuevoNodo = new Nodo(valor);
   
      if (this.raiz === null) {
        this.raiz = nuevoNodo;
      } else {
        this.insertarNodo(this.raiz, nuevoNodo);
      }
    }
   
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
   }
   
   module.exports = { Nodo, ArbolBinario };
   