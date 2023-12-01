# Simulación de sistema de atención al cliente

En este ejercicio, se simula un sistema de atención al cliente utilizando una estructura de datos de cola (FIFO) en JavaScript. El sistema sigue el principio de "primero en entrar, primero en salir" (FIFO), donde los clientes se atienden en el mismo orden en que llegaron.

## Código

El código se compone de dos partes principales:

1. **Clase Queue:**
   - `enqueue(element)`: Agrega un elemento al final de la cola.
   - `dequeue()`: Elimina y devuelve el primer elemento de la cola.
   - `isEmpty()`: Verifica si la cola está vacía.

2. **Simulación del sistema de atención al cliente:**
   - Se crean instancias de la cola y se agregan clientes a la misma.
   - Se atienden a los clientes en orden de llegada, imprimiendo sus nombres en la consola.
   - Al finalizar, se indica que la cola está vacía.
