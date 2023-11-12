const { hasCycle, ListNode } = require('./cycleDetection'); // Asegúrate de tener la ruta correcta al archivo principal

function createCyclicList(arr, pos) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let cycleNode = null;

  for (let i = 0; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;

    if (i === pos) {
      cycleNode = current; //nodo de un ciclo
    }
  }

  if (pos !== -1) {
    current.next = cycleNode; //crea el ciclo
  }

  return dummyHead.next;
}

function createNonCyclicList(arr) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;

  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }

  return dummyHead.next;
}

test('Detectar ciclo en una lista enlazada', () => {
  const cyclicList = createCyclicList([1, 2, 3, 4, 5], 2);

  const nonCyclicList = createNonCyclicList([1, 2, 3, 4, 5]);

  expect(hasCycle(cyclicList)).toBe(true);
  expect(hasCycle(nonCyclicList)).toBe(false);
});
