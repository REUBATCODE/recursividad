function calcularPromedioAprobadosYreprobados(calificaciones) {
    // Inicializamos las variables para llevar el conteo de aprobados y reprobados
    let aprobados = 0;
    let reprobados = 0;
    let sumatoria = 0;
  
    // Recorremos el arreglo de calificaciones
    for (let i = 0; i < calificaciones.length; i++) {
      // Validamos que la calificación esté dentro del rango [0, 100]
      if (calificaciones[i] < 0 || calificaciones[i] > 100) {
        // Si la calificación está fuera de rango, lanzamos una excepción
        throw new Error("Calificación fuera de rango: " + calificaciones[i]);
      }
  
      // Acumulamos la calificación en la sumatoria
      sumatoria += calificaciones[i];
  
      // Contamos aprobados y reprobados en base a la calificación (aprobado >= 60)
      if (calificaciones[i] >= 60) {
        aprobados++;
      } else {
        reprobados++;
      }
    }
  
    // Calculamos el promedio redondeado a un entero
    const promedio = Math.round(sumatoria / calificaciones.length);
  
    // Creamos un objeto JSON con los resultados
    const resultado = {
      promedio: promedio,
      aprobados: aprobados,
      reprobados: reprobados
    };
  
    // Devolvemos el resultado como una cadena JSON
    return JSON.stringify(resultado);
  }
export{calcularPromedioAprobadosYreprobados}
module.exports = calcularPromedioAprobadosYreprobados;