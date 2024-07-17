'use strict'

/*NIVELL 1*/
/* Exercici 1 */

//Doy por hecho que vamos a introducir un número.
let potConduir = edat => edat>=18 ? 'Pots conduir' : 'No pots conducir'

console.log(potConduir(17))
console.log(potConduir(18))


/* Exercici 2 */

let numMesGran = (num1, num2) => (num1>=num2) ? `${num1} es més gran o igual que ${num2}` : `${num2} és més gran`

console.log (numMesGran(2,4))
console.log (numMesGran(32,3))



/*NIVELL 2*/
/* Exercici 3 */
let tipusNum = num => (num>0) ? `${num} es positiu` : (num<0) ?`${num} es negatiu` : `${num} es zero`

console.log(tipusNum(1))
console.log(tipusNum(-1))
console.log(tipusNum(0))



/*NIVELL 3*/
/* Exercici 4 */

const Numeros = [34, 5, -45, 123, 7]

function parOimpar (arrNumeros){

    for (let i = 0; i < arrNumeros.length; i++){
        
        (arrNumeros[i] % 2 == 0) ? console.log(`${arrNumeros[i]} es parell`) : console.log(`${arrNumeros[i]} es imparell`)
    }

}

parOimpar(Numeros)
