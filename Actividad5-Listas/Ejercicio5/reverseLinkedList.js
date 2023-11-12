class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    //agregar un nuevo nodo al final de la lista
    append(val) {
      const newNode = new ListNode(val);
  
      if (!this.head) {
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
  
      current.next = newNode;
    }
  
    //invertir la lista enlazada
    reverse() {
      let current = this.head;
      let stack = [];
  
      //1: almacenar cada dígito en una pila
      while (current !== null) {
        stack.push(current.val);
        current = current.next;
      }
  
      //2 y 3: pop de la pila y agrega a la nueva lista enlazada
      let reversedList = new LinkedList();
      while (stack.length > 0) {
        reversedList.append(stack.pop());
      }
  
      return reversedList;
    }
  
    //método para imprimir los valores
    print() {
      let current = this.head;
      while (current !== null) {
        console.log(current.val);
        current = current.next;
      }
    }
  }
  
  //ejemplo
  const originalList = new LinkedList();
  originalList.append(1);
  originalList.append(2);
  originalList.append(3);
  
  //imprimir la lista original
  console.log("Lista original:");
  originalList.print();
  
  //invertir la lista
  const reversedList = originalList.reverse();
  
  //imprimir la lista invertida
  console.log("Lista invertida:");
  reversedList.print();
  
module.exports = {ListNode, LinkedList}