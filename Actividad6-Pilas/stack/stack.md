## Problema: Importar un archivo en las pruebas de Jest

Al importar un archivo en las pruebas de Jest, es importante tener en cuenta la ubicación relativa del archivo que se está importando. En el caso de que el archivo de pruebas y el archivo a importar estén en la misma carpeta y al mismo nivel, se puede utilizar la notación `./` para referenciar el archivo a importar.

### Pasos para importar un archivo en las pruebas de Jest:

1. Asegúrate de que el archivo de pruebas y el archivo a importar estén en la misma carpeta y al mismo nivel.
2. Utiliza la notación `./` seguida del nombre del archivo para importarlo en el archivo de pruebas.

Ejemplo de importación en el archivo de pruebas:
```javascript
const Stack = require('./stack');
