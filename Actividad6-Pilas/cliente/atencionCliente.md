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

## Archivo de pruebas Jest

Se incluyen pruebas automatizadas utilizando Jest para verificar el funcionamiento del sistema de atención al cliente. Las pruebas incluyen:

- Verificar si los clientes son atendidos en el orden correcto.
- Verificar que la cola esté vacía al finalizar la atención a todos los clientes.

## Conclusiones

El ejercicio demuestra el funcionamiento de una cola en un contexto práctico, mostrando cómo se puede utilizar para gestionar el orden de atención de clientes en un sistema de servicio.
