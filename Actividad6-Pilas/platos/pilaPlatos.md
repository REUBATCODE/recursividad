# Simulación de pila de platos en un restaurante

En este ejercicio, se simula una pila de platos en un restaurante utilizando una estructura de datos de pila (LIFO) en JavaScript. El sistema sigue el principio de "último en entrar, primero en salir" (LIFO), donde los platos se retiran en orden inverso al que fueron apilados.

## Código

El código se compone de dos partes principales:

1. **Clase Stack:**
   - `push(element)`: Agrega un elemento a la parte superior de la pila.
   - `pop()`: Elimina y devuelve el elemento en la parte superior de la pila.
   - `isEmpty()`: Verifica si la pila está vacía.

2. **Simulación de la pila de platos:**
   - Se crean instancias de la pila y se apilan platos.
   - Se retiran los platos de la pila en orden inverso al que fueron apilados, imprimiendo sus nombres en la consola.
   - Al finalizar, se indica que la pila de platos está vacía.

## Archivo de pruebas Jest

Se incluyen pruebas automatizadas utilizando Jest para verificar el funcionamiento de la pila de platos:
- Verificar si los platos son retirados en el orden correcto.
- Verificar que la pila esté vacía al finalizar la retirada de todos los platos.

## Conclusiones

El ejercicio demuestra el funcionamiento de una pila en un contexto práctico, mostrando cómo se puede utilizar para gestionar la retirada de elementos en orden inverso al que fueron agregados.
