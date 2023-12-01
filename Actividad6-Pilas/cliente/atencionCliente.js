class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.shift();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  const customerQueue = new Queue();
  
  //llegada de clientes
  customerQueue.enqueue("Cliente 1");
  customerQueue.enqueue("Cliente 2");
  customerQueue.enqueue("Cliente 3");
  
  //atender en orden de llegada
  while (!customerQueue.isEmpty()) {
    const nextCustomer = customerQueue.dequeue();
    console.log("Atendiendo a:", nextCustomer);
  }
  console.log("La cola está vacía");
  
  module.exports = Queue;
  