'use strict'

/*NIVELL 1*/
/* Exercici 1 */
/* MAP: Aplica una función a cada elemento - resultado: nuevo array*/
const Array1y2 = [1, 2, 3, 4]
const resultado1 = Array1y2.map(e => Math.pow(e,2))

console.log ('Exercici 1:', resultado1)

/* Exercici 2 */
/* FILTER: Elementos que cumplen la función - resultado: nuevo array*/
const resultado2 = Array1y2.filter(e => (e % 2 == 0))

console.log ('Exercici 2:', resultado2)

/* Exercici 3 */
/* FIND: Elemento que cumplen la función - resultado: primer elemento*/
const Array3 = [1, 10, 8, 11]
let primerNum = Array3.find(e => (e > 10))

console.log ('Exercici 3:', primerNum)

/* Exercici 4 */
/* REDUCE: Ejecuta una función reductora (como una suma) - resultado: elemento acumulador*/
// Último parámetro función: Argumento opcional que indica en que punto se inicializa el acumulador
const Array4 = [13, 7, 8, 21]
let sumaArray4 = Array4.reduce((acumulador, num) => acumulador + num, 0)

console.log('Exercici 4: ', sumaArray4)

/*NIVELL 2*/
/* Exercici 5 */
const Array5 = [1, 3, 7, 10, 15, 17, 11, 8, 12, 9]

const resultat5 = Array5
    .filter(e => (e >= 10))
    .map(e => e*2)
    .reduce((acumulador, num) => acumulador + num, 0)

console.log('Exercici 5: ', resultat5)


/*NIVELL 3*/
/* Exercici 6 */
/* EVERY: Verifica que TODO cumpla la función - resultado: booleano*/
/* SOME: Verifica que UN ELEMENTO cumpla la función - resultado: booleano*/
const Array6 = [11, 12, 13, 14]
let todosMayores10 = Array6.every(e => e > 10)
let algunoMayor10 = Array6.some(e => e > 10)

console.log('Exercici 6 (EVERY): ', todosMayores10)
console.log('Exercici 6 (SOME): ', algunoMayor10)