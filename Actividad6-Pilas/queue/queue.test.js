const Queue = require('./Queue'); // Reemplaza './Queue' con la ruta correcta al archivo donde se encuentra la implementación de la cola

test('enqueue and dequeue elements from the queue', () => {
  let cola = new Queue();
  cola.enqueue("Manzana");
  cola.enqueue("Banana");
  cola.enqueue("Naranja");

  expect(cola.dequeue()).toBe("Manzana");
  expect(cola.dequeue()).toBe("Banana");
  expect(cola.dequeue()).toBe("Naranja");
  expect(cola.dequeue()).toBe("La cola está vacía");
});

test('check if the queue is empty', () => {
  let cola = new Queue();
  expect(cola.isEmpty()).toBe(true);
  cola.enqueue("Manzana");
  expect(cola.isEmpty()).toBe(false);
  cola.dequeue();
  expect(cola.isEmpty()).toBe(true);
});

test('get the size of the queue', () => {
  let cola = new Queue();
  cola.enqueue("Manzana");
  cola.enqueue("Banana");
  cola.enqueue("Naranja");
  expect(cola.size()).toBe(3);
  cola.dequeue();
  expect(cola.size()).toBe(2);
});

test('peek the first element of the queue', () => {
  let cola = new Queue();
  cola.enqueue("Manzana");
  cola.enqueue("Banana");
  cola.enqueue("Naranja");
  expect(cola.peek()).toBe("Manzana");
  cola.dequeue();
  expect(cola.peek()).toBe("Banana");
});
