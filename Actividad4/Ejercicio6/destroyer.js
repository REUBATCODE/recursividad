function destroyer(arr, ...args) {
    // Función para verificar si un elemento está en la lista de argumentos
    function isNotInArgs(element) {
      return !args.includes(element);
    }
  
    // Filtra los elementos que no están en la lista de argumentos
    return arr.filter(isNotInArgs);
  }
  
  module.exports = destroyer;
  