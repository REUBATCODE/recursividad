/**
 * @function binarySearch
 * @description Search for the integer inside the sorted integers array using Binary Search Algorithm.
 * @param {Integer[]} arr - Sorted array of integers.
 * @param {Integer} searchValue - The integer to search for.
 * @return {Integer} - Return the index of searchValue if found, otherwise return -1.
 * @see [BinarySearch](https://en.wikipedia.org/wiki/Binary_search_algorithm)
 */
export function binarySearch(arr, searchValue) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === searchValue) {
      return mid; // Encontrar el valor y regresar el index
    } else if (arr[mid] < searchValue) {
      left = mid + 1; // Buscar mitad derecha
    } else {
      right = mid - 1; // Buscar mitad izquierda
    }
  }

  return -1; // Buscar valor no encontrado
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const searchValue = 7;
console.log(binarySearch(sortedArray, searchValue)); // Output: 3 (index of searchValue in the array)
