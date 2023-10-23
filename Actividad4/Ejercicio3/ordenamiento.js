/**
 * Selecciona un algoritmo de ordenación y realiza sus pruebas 
 * https://www.freecodecamp.org/espanol/news/algoritmos-de-ordenacion-explicados-con-ejemplos-en-javascript-python-java-y-c/
 */
function bubbleSortRecursive(arr, n) {
    // Base case: Si no hay elementos para comparar, el arreglo está ordenado.
    if (n <= 1) {
      return arr;
    }
  
    // Realizar una pasada a través del arreglo y comparar elementos adyacentes.
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Intercambiar los elementos si están en el orden incorrecto.
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  
    // Llamar recursivamente a bubbleSort en el subarreglo restante.
    return bubbleSortRecursive(arr, n - 1);
  }
  
  module.exports = bubbleSortRecursive;
  