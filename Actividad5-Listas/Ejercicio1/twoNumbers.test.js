const { addTwoNumbers, ListNode } = require('./twoNumbers'); // Asegúrate de tener la ruta correcta al archivo principal

function arrayToList(arr) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;

  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }

  return dummyHead.next;
}

function listToArray(node) {
  let result = [];

  while (node !== null) {
    result.push(node.val);
    node = node.next;
  }

  return result;
}

test('Suma de dos números en listas enlazadas', () => {
  const l1 = arrayToList([2, 4, 3]);
  const l2 = arrayToList([5, 6, 4]);

  const result = addTwoNumbers(l1, l2);

  expect(listToArray(result)).toEqual([7, 0, 8]);
});
