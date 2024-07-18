'use strict'

/*NIVELL 1*/
/* Exercici 1 */ /* REVISAAAAR */
let procesar = (nombre, callback) => callback (nombre)

let saludo = nombre => console.log(`Hola ${nombre}!`)

console.log('Ejercicio 1:')
procesar ("Manolo", saludo)



/* Exercici 2 */
let calculadora = (num1, num2, callback) => callback (num1, num2)

console.log('Ejercicio 2:')
console.log (calculadora (1, 2, (a, b) => a + b))



/*NIVELL 2*/
/* Exercici 3 */

let esperarISaludar = (nom, callback) => setTimeout(() => callback(nom), 2000);

//(e)=>console.log(e) funció arrow callback, escribe por consola el elemento

console.log('Ejercicio 3 (setTimeOut):');
esperarISaludar('Manolita llega 2 segundos tarde', (e) => console.log(e));


/* Exercici 4 */
const arrayEx4 = ["Holita", 5, true, undefined]

let processarElements = (array, callback) => array.forEach(callback)

console.log('Ejercicio 4:')
processarElements(arrayEx4, (e)=>console.log(e))



/*NIVELL 3*/
/* Exercici 5 */

let processarCadena = (cadena, callback) => callback(cadena.toUpperCase())

processarCadena ('la hija de Manolita', (e) => console.log(e))
