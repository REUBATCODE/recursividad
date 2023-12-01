const Queue = require('./atencionCliente');

test('Probar atención al cliente en orden de llegada', () => {
  const customerQueue = new Queue();

  customerQueue.enqueue("Cliente 1");
  customerQueue.enqueue("Cliente 2");
  customerQueue.enqueue("Cliente 3");

  const atendidos = [];
  while (!customerQueue.isEmpty()) {
    const nextCustomer = customerQueue.dequeue();
    atendidos.push(nextCustomer);
  }

  expect(atendidos).toEqual(["Cliente 1", "Cliente 2", "Cliente 3"]);
});

test('Probar si la cola está vacía al finalizar', () => {
  const customerQueue = new Queue();

  customerQueue.enqueue("Cliente 1");
  customerQueue.enqueue("Cliente 2");
  customerQueue.enqueue("Cliente 3");

  while (!customerQueue.isEmpty()) {
    customerQueue.dequeue();
  }

  expect(customerQueue.isEmpty()).toBe(true);
});
