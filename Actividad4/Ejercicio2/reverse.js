/**
 * @function reverse
 * @description  This function will accept an array and Reverse its elements and returns the inverted array
 * @param {Array} arr array with elements of any data type
 * @returns {Array} array with inverted elements
 * @see [Reverse](https://www.geeksforgeeks.org/write-a-program-to-Reverse-an-array-or-string/)
 */
function reverseArray(arr) {
    // Base case: Si el caso solo tiene cero o un elemento, se regresa tal cual.
    if (arr.length <= 1) {
      return arr;
    } else {
      // Recursive case: Le hace swap al primer y ultimo elemento del array. Luego al resto.
      const firstElement = arr[0];
      const restOfArray = arr.slice(1);
      const reversedRest = reverseArray(restOfArray);
  
      return [...reversedRest, firstElement];
    }
  }
export {reverseArray}
  