/**
 * Flood fill algorithm.
 *
 * @param {number[][]} grid - Multi-dimensional array representing the grid
 * @param {number} row - Row index
 * @param {number} col - Column index
 * @param {number} targetColor - Color to be replaced
 * @param {number} replacementColor - Color to replace with
 */
export function floodFill(grid, row, col, targetColor, replacementColor) {
  const numRows = grid.length;
  const numCols = grid[0].length;

  // Check if the current cell is within bounds and has the target color
  if (row < 0 || col < 0 || row >= numRows || col >= numCols || grid[row][col] !== targetColor) {
    return;
  }

  // Change the current cell color to the replacement color
  grid[row][col] = replacementColor;

  // Recur for the neighboring cells
  floodFill(grid, row + 1, col, targetColor, replacementColor); // Down
  floodFill(grid, row - 1, col, targetColor, replacementColor); // Up
  floodFill(grid, row, col + 1, targetColor, replacementColor); // Right
  floodFill(grid, row, col - 1, targetColor, replacementColor); // Left
}

// Example usage:
const grid = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1]
];

console.log('Original grid:');
console.log(grid);
floodFill(grid, 1, 2, 1, 2); // Fill from (1, 2) with color 1 to color 2
console.log('Grid after flood fill:');
console.log(grid);
