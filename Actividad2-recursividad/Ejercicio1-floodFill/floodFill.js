/**
 * @function floodfill
 * @description  es un algoritmo utilizado para llenar áreas conectadas en una matriz o lienzo con un color o valor específico.
 * @param {matrix,startX,startY,newColor} elemento - cadena de Entrada
 * @see [floodfill](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwij0Z_7ysSBAxUAJEQIHc7ECkUQFnoECA8QAQ&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FAlgoritmo_de_relleno_por_difusi%25C3%25B3n&usg=AOvVaw0hiQjK51km_6xjWk-FHdHY&opi=89978449)
*/
function floodFill(matrix, startX, startY, newColor) {
  const originalColor = matrix[startX][startY];
  if (originalColor === newColor) return matrix;

  function fill(x, y) {
    if (
      x < 0 ||
      x >= matrix.length ||
      y < 0 ||
      y >= matrix[0].length ||
      matrix[x][y] !== originalColor
    ) {
      return;
    }

    matrix[x][y] = newColor;

    fill(x + 1, y);
    fill(x - 1, y);
    fill(x, y + 1);
    fill(x, y - 1);
  }

  fill(startX, startY);
  return matrix;
}

export { floodFill }