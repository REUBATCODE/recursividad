const { LinkedList, ListNode } = require('./uniqueLinkedList'); // Asegúrate de tener la ruta correcta al archivo principal

test('Agregar nodos a la lista enlazada y verificar la impresión', () => {
  const linkedList = new LinkedList();

  //agregar nodos
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);

  //mock para la función console.log
  const mockLog = jest.spyOn(console, 'log').mockImplementation(() => {});

  //imprimir la lista enlazada
  linkedList.print();

  //verificar la impresión
  expect(mockLog.mock.calls.length).toBe(3);
  expect(mockLog.mock.calls[0][0]).toBe(1);
  expect(mockLog.mock.calls[1][0]).toBe(2);
  expect(mockLog.mock.calls[2][0]).toBe(3);

  //restaurar la función original de console.log
  mockLog.mockRestore();
});
