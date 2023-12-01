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

<img width="1440" alt="Captura de Pantalla 2023-11-30 a la(s) 21 05 05" src="https://github.com/REUBATCODE/recursividad/assets/126991341/122942e5-29e9-496f-9c37-e39a4bd472c0">
