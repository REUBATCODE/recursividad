class DoublyListNode {
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  //agregar un nuevo nodo al final de la lista
  append(val) {
    const newNode = new DoublyListNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }

  //imprimir los valores de la lista desde el inicio
  printForward() {
    let current = this.head;
    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }

  //imprimir los valores de la lista desde el final
  printBackward() {
    let current = this.tail;
    while (current !== null) {
      console.log(current.val);
      current = current.prev;
    }
  }
}

//ejemplo
const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.append(1);
doublyLinkedList.append(2);
doublyLinkedList.append(3);

//imprimir la lista doblemente enlazada INICIO
console.log("Imprimir hacia adelante:");
doublyLinkedList.printForward();

//imprimir la lista doblemente enlazada FINAL
console.log("Imprimir hacia atrás:");
doublyLinkedList.printBackward();

module.exports = { DoublyListNode, DoublyLinkedList };
