/**
* @function Fibonacci
* @description Function to return the N-th Fibonacci number.
* @param {Integer} n - The input integer
* @return {Integer} - Return the N-th Fibonacci number
* @see [Fibonacci](https://en.wikipedia.org/wiki/Fibonacci_number)
*/

export function fibonacci(n) {
  console.log('Calculando fibonacci para n =', n);
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));