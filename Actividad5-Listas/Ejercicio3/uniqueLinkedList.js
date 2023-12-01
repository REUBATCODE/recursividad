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

  // Agregar un nuevo nodo al final
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

  // Imprimir los valores
  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }
}

// Ejemplo
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
linkedList.append(50);

// Imprimir la lista enlazada
linkedList.print();

module.exports = {ListNode, LinkedList};