'use strict'

/*NIVELL 1*/

/* Exercici 1 */
function add(a, b) {return a + b;}

let addArrow = (a,b) =>  a + b

console.log(add(2,3))
console.log(addArrow(2,3))


/* Exercici 2 */
let randomNumber = () => Math.round(Math.random() * 100);

console.log(randomNumber())


/* Exercici 3 */

class Person {
    constructor(name) {
      this.name = name;
    }
  
    greet = () => {
      console.log(`Hola, ${this.name}`);
    }
  }

  let persona = new Person ('Manolita')
  let saludo = persona.greet()


/*NIVELL 2*/
/* Exercici 4 */
const Numeros = [4, 6, 123, 5, 34]

let printNumbers = arrNumeros => {
    for (let i = 0; i < arrNumeros.length; i++){
        console.log (arrNumeros[i])
    }
}

printNumbers(Numeros)

/*NIVELL 3*/
/* Exercici 5 */

  setTimeout(() => {
    console.log("Retrasado por 3 segundos.");
  }, 3000);


