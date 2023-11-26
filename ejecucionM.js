import calcular from "./ejemplos";

let anioN = 1955
let anioA = 2023
calcular(anioN,anioA)

/* Archivo Principal */
// Importar el módulo de operaciones usando require
var operaciones = require('./ejemplos.js');

// Utilizar las funciones exportadas
var resultadoSuma = operaciones.sumar(5, 3);
var resultadoResta = operaciones.restar(10, 4);

// Imprimir los resultados
console.log('Suma:', resultadoSuma);
console.log('Resta:', resultadoResta);