const { ListNode, LinkedList } = require('./reverseLinkedList'); // Asegúrate de tener la ruta correcta al archivo principal

test('Invertir una lista enlazada', () => {
  const originalList = new LinkedList();
  originalList.append(1);
  originalList.append(2);
  originalList.append(3);

  //crear un mock para la función console.log
  const mockLog = jest.spyOn(console, 'log').mockImplementation(() => {});

  //imprimir la lista original
  console.log("Lista original:");
  originalList.print();

  //invertir la lista
  const reversedList = originalList.reverse();

  //imprimir la lista invertida
  console.log("Lista invertida:");
  reversedList.print();

  //verificar que la lista original no se haya modificado
  console.log("Verificar que la lista original no se haya modificado:");
  originalList.print();

  //verificar la impresión
  expect(mockLog.mock.calls.length).toBe(12);
  expect(mockLog.mock.calls[0][0]).toBe("Lista original:");
  expect(mockLog.mock.calls[1][0]).toBe(1);
  expect(mockLog.mock.calls[2][0]).toBe(2);
  expect(mockLog.mock.calls[3][0]).toBe(3);
  expect(mockLog.mock.calls[4][0]).toBe("Lista invertida:");
  expect(mockLog.mock.calls[5][0]).toBe(3);

  //restaurar la función original de console.log
  mockLog.mockRestore();
});