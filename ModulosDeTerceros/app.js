const funcion = require('lodash');

// Ejemplo de uso de lodash
const numeros = [1, 2, 3, 4, 5];

// Utilizar la función "map" de lodash para duplicar cada elemento del array
const duplicados = funcion.map(numeros, (num) => num * 2);

console.log('Array original:', numeros);
console.log('Array con elementos duplicados:', duplicados);