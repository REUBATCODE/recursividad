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
  
    //agregar un nuevo nodo al final
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
  
    //imprimir los valores
    print() {
      let current = this.head;
      while (current !== null) {
        console.log(current.val);
        current = current.next;
      }
    }
  }
  
  //ejemplo
  const linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  
  //imprimir la lista enlazada
  linkedList.print();

module.exports = {ListNode, LinkedList};