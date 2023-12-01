//implementación de una cola empleando un arreglo
class Queue {
  constructor() {
    this.elements = [];
  }

  enqueue(element) {
    this.elements.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "La cola está vacía";
    }
    return this.elements.shift();
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  size() {
    return this.elements.length;
  }

  peek() {
    if (this.isEmpty()) {
      return "La cola está vacía";
    }
    return this.elements[0];
  }
}

//uso de la cola
let cola = new Queue();

//agregar elementos a la cola
cola.enqueue("Manzana");
cola.enqueue("Banana");
cola.enqueue("Naranja");

//obtener el primer elemento de la cola (sin eliminarlo)
console.log(cola.peek()); //imprime "Manzana"

//eliminar y obtener el primer elemento de la cola
let elementoEliminado = cola.dequeue();
console.log(elementoEliminado); //imprime "Manzana"

//verificar si la cola está vacía
console.log(cola.isEmpty()); //imprime false

//obtener el tamaño de la cola
console.log(cola.size()); //imprime 2

module.exports=Queue;