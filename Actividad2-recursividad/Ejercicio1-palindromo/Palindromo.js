/**
 * @function isPalindrome
 * @description Check whether the given string is a palindrome or not.
 * @param {String} str - The input string
 * @return {Boolean} - True if the string is a palindrome, false otherwise.
 * @see [Palindrome](https://en.wikipedia.org/wiki/Palindrome)
 */
export function isPalindrome(str) {
  // Convierte a minúsculas y quita los elementos que no sean alfanuméricos
  const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  // Verifica si el string al revés es igual
  return cleanStr === cleanStr.split('').reverse().join('');
}

// Uso:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
