const Stack = require('./pilaPlatos');

test('Probar retirar platos en orden inverso', () => {
  const plateStack = new Stack();

  plateStack.push("Plato 1");
  plateStack.push("Plato 2");
  plateStack.push("Plato 3");

  const retirados = [];
  while (!plateStack.isEmpty()) {
    const nextPlate = plateStack.pop();
    retirados.push(nextPlate);
  }

  expect(retirados).toEqual(["Plato 3", "Plato 2", "Plato 1"]);
});

test('Probar si la pila está vacía al finalizar', () => {
  const plateStack = new Stack();

  plateStack.push("Plato 1");
  plateStack.push("Plato 2");
  plateStack.push("Plato 3");

  while (!plateStack.isEmpty()) {
    plateStack.pop();
  }

  expect(plateStack.isEmpty()).toBe(true);
});
