/**
 * Generate all possible letter combinations for a given phone number.
 *
 * @param {string} digits 
 */
export function letterCombinations(digits) {
  if (!digits || digits.length === 0) {
    return [];
  }

  const digitToLettersMap = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };

  const combinations = [];

  const backtrack = (currentCombination, nextDigitIndex) => {
    if (nextDigitIndex === digits.length) {
      combinations.push(currentCombination);
      return;
    }

    const currentDigit = digits[nextDigitIndex];
    const letters = digitToLettersMap[currentDigit];

    for (let i = 0; i < letters.length; i++) {
      const newCombination = currentCombination + letters[i];
      backtrack(newCombination, nextDigitIndex + 1);
    }
  };

  backtrack('', 0);
  return combinations;
}

// Ejemplo:
const digits = '23';
console.log(letterCombinations(digits)); // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
