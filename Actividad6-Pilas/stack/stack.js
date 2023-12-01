class Stack {
  constructor() {
    this.elements = [];
  }

  push(element) {
    this.elements.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "La pila está vacía";
    }
    return this.elements.pop();
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  size() {
    return this.elements.length;
  }

  peek() {
    if (this.isEmpty()) {
      return "La pila está vacía";
    }
    return this.elements[this.elements.length - 1];
  }
}

//pila
let pila = new Stack();

//agregar elementos a la pila
pila.push("Manzana");
pila.push("Banana");
pila.push("Naranja");

//obtener el elemento en la parte superior de la pila (sin suprimirlo)
console.log(pila.peek()); //"Naranja"

//eliminar y obtener el elemento en la parte superior de la pila
let elementoEliminado = pila.pop();
console.log(elementoEliminado); //"Naranja"

//verificar si la pila está vacía
console.log(pila.isEmpty()); //imprime false

//tamaño de la pila
console.log(pila.size()); //imprime 2

module.exports = Stack;
