const calcularPromedioAprobadosYreprobados = require('./calificaciones');

test('Debería calcular el promedio y contar aprobados y reprobados correctamente', () => {
  const calificaciones = [80, 70, 55, 90, 40];
  const resultado = JSON.parse(calcularPromedioAprobadosYreprobados(calificaciones));

  expect(resultado).toEqual({
    promedio: 67,
    aprobados: 3,
    reprobados: 2,
  });
});

test('Debería manejar calificaciones fuera de rango', () => {
  const calificaciones = [80, 110, -10, 90, 40];
  expect(() => calcularPromedioAprobadosYreprobados(calificaciones)).toThrowError('Calificación fuera de rango');
});
