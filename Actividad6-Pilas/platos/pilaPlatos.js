class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  const plateStack = new Stack();
  
  //llegada de platos a la pila
  plateStack.push("Plato 1");
  plateStack.push("Plato 2");
  plateStack.push("Plato 3");
  
  //retirar los platos de la pila en orden inverso
  while (!plateStack.isEmpty()) {
    const nextPlate = plateStack.pop();
    console.log("Retirando plato:", nextPlate);
  }
  console.log("La pila de platos está vacía");
  
  module.exports = Stack;
  