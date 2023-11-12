const { DoublyListNode, DoublyLinkedList } = require('./doublyLinkedList'); // Asegúrate de tener la ruta correcta al archivo principal

test('Agregar nodos a la lista doblemente enlazada y verificar la impresión', () => {
  const doublyLinkedList = new DoublyLinkedList();

  //agregar nodos a la lista
  doublyLinkedList.append(1);
  doublyLinkedList.append(2);
  doublyLinkedList.append(3);

  //crear un mock para la función console.log
  const mockLog = jest.spyOn(console, 'log').mockImplementation(() => {});

  //imprimir la lista doblemente enlazada desde el inicio
  console.log("Imprimir hacia adelante:");
  doublyLinkedList.printForward();

  //imprimir la lista doblemente enlazada desde el final
  console.log("Imprimir hacia atrás:");
  doublyLinkedList.printBackward();

  //verificar la impresión desde el inicio y desde el final
  expect(mockLog.mock.calls.length).toBe(8);  // Ahora esperas 8 llamadas
  expect(mockLog.mock.calls[0][0]).toBe("Imprimir hacia adelante:");
  expect(mockLog.mock.calls[1][0]).toBe(1);
  expect(mockLog.mock.calls[2][0]).toBe(2);
  expect(mockLog.mock.calls[3][0]).toBe(3);

  //restaurar la función original de console.log
  mockLog.mockRestore();
});
