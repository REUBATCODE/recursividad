//stack.test.js

const Stack = require('Stack');

test('push and pop elements from the stack', () => {
  let pila = new Stack();
  pila.push("Manzana");
  pila.push("Banana");
  pila.push("Naranja");

  expect(pila.pop()).toBe("Naranja");
  expect(pila.pop()).toBe("Banana");
  expect(pila.pop()).toBe("Manzana");
  expect(pila.pop()).toBe("La pila está vacía");
});

test('check if the stack is empty', () => {
  let pila = new Stack();
  expect(pila.isEmpty()).toBe(true);
  pila.push("Manzana");
  expect(pila.isEmpty()).toBe(false);
  pila.pop();
  expect(pila.isEmpty()).toBe(true);
});

test('get the size of the stack', () => {
  let pila = new Stack();
  pila.push("Manzana");
  pila.push("Banana");
  pila.push("Naranja");
  expect(pila.size()).toBe(3);
  pila.pop();
  expect(pila.size()).toBe(2);
});
