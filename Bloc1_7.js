'use strict'

/*NIVELL 1*/
/* Exercici 1 */
function promesaHolaMon() {
    let resultado = 'Hola, món'
    return new Promise (
        (resolve) => {
        setTimeout (() => resolve (resultado), 2000)
        }
    )
}

/* Exercici 2 */
promesaHolaMon().then ((mensaje)=> console.log(mensaje))


/* Exercici 3 */
function promesaEsHola (input) {
    return new Promise (
        (resolve, reject) => {
            setTimeout (() => {
                if (input === 'Hola'){
                    resolve (input)
                }else{
                    reject ('Error input')
                }
            }, 2000)
        }
    )
}

//let entrada = 'Hola'
let entrada = 'Adiós'

promesaEsHola (entrada)
    .then ((datos) => console.log (datos))
    .catch ((error) => console.log (error))




/* Exercici 4 */
async function AsyncPromesaHolaMon () {
    const result = await promesaHolaMon()
    console.log ('Async', result)
}

AsyncPromesaHolaMon()



/*NIVELL 2*/
/* Exercici 5 */
async function AsyncPromesaHolaMonV2 () {
    try {
        const result = await promesaHolaMon()
        console.log ('AsyncTry', result)
    } catch (error){
        console.error('ERROR!', error)
    }
}

AsyncPromesaHolaMonV2 ()


/*NIVELL 3*/
/* Exercici 6 */

// Ejercicio 6: Promise.all
const promesa1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Primera promesa resuelta');
    }, 2000);
});

const promesa2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Segunda promesa resuelta');
    }, 3000);
});


Promise.all([promesa1,promesa2])
    .then (values => console.log(values))
    .catch (error => console.log (error))


