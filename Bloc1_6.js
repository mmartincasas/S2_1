'use strict'

/*NIVELL 1*/
/* Exercici 1 */
/* FOREACH: Ejecuta una función por cada elemento de la Array*/
const noms = ['Anna', 'Bernat', 'Clara']

console.log ('Exercici 1:')
noms.forEach(e => console.log(e))

/* Exercici 2 */
/* FOR...OF: Ejecuta un bloque de código sobre objetos iterables*/

console.log ('Exercici 2:')
for (let nom of noms) {
    console.log(nom)
}

/*NIVELL 2*/
/* Exercici 3 */
/* FOR...IN: Itera sobre las propiedades enumerables de un objeto que está directamente en el objeto*/
const persona = {
    nom: 'Ona',
    edat: 25,
    ciutat: 'Barcelona'
}

console.log ('Exercici 3:')

for (let propiedad in persona){
    console.log(`${propiedad}: ${persona[propiedad]}`)
}

/* Exercici 4 */
const numeros = [1,2,3,4,5,6]

console.log ('Exercici 4:')

for (let num of numeros){
    if (num == 5) {
        break
    }
    console.log(num)
}


/*NIVELL 3*/
/* Exercici 5 */

console.log('Exercici 5:')

for (const [index, nom] of noms.entries()){
    console.log(`${nom}: Index = ${index}`)
}