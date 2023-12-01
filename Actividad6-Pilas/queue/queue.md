# Implementación de una cola en JavaScript

En este ejercicio, se proporciona una implementación de una cola utilizando un arreglo en JavaScript. Una cola es una estructura de datos que sigue el principio FIFO (First In, First Out), donde el primer elemento en entrar es el primero en salir.

## Descripción de la implementación

La implementación de la cola se realiza mediante una clase `Queue` que contiene los siguientes métodos:

- `constructor()`: Inicializa la cola con un arreglo vacío.
- `enqueue(element)`: Agrega un elemento al final de la cola.
- `dequeue()`: Elimina y devuelve el primer elemento de la cola.
- `isEmpty()`: Verifica si la cola está vacía.
- `size()`: Obtiene el tamaño actual de la cola.
- `peek()`: Obtiene el primer elemento de la cola sin eliminarlo.

## Uso de la cola

Se crea una instancia de la cola `cola` utilizando la clase `Queue` y se realizan las siguientes operaciones:

1. **Agregar elementos a la cola**: Utilizando el método `enqueue()`, se agregan los elementos "Manzana", "Banana" y "Naranja" a la cola.
2. **Obtener el primer elemento de la cola**: Utilizando el método `peek()`, se obtiene el primer elemento de la cola sin eliminarlo y se muestra por consola.
3. **Eliminar y obtener elementos de la cola**: Utilizando el método `dequeue()`, se eliminan y obtienen los elementos de la cola uno por uno, mostrando cada uno por consola.
4. **Verificar si la cola está vacía**: Utilizando el método `isEmpty()`, se verifica si la cola está vacía y se muestra por consola.
5. **Obtener el tamaño de la cola**: Utilizando el método `size()`, se obtiene el tamaño actual de la cola y se muestra por consola.
