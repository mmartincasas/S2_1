'use strict'

/*SPREAD:
Permite copiar arrays u objetos, 
Concatenar arrays, 
Pasar un array como lista de argumentos a una función*/

/*REST: 
Permite manejar un número variable de argumentos de función,
Desestructurar arrays, es decir, extraer elementos no asignados a variables individuales*/


/*NIVELL 1*/
/* Exercici 1 */
let Array1 = [1,2,3,4]
let Array2 = ['uno', 'dos', 'tres', 'cuatro']

let ArrayResult = [...Array1, ...Array2]

console.log ('Ejercicio 1:')
console.log (ArrayResult)



/* Exercici 2 */
function suma (...numeros) {

    let resultado=0;

    numeros.forEach(num => resultado += num)

    return resultado
}

console.log ('Ejercicio 2:')
console.log (suma (2,3))
console.log (suma (2))
console.log (suma (2,5,3))

/*NIVELL 2*/
/* Exercici 3 */
const objecte1 = {nombre: 'Marina', apellido: 'López'}
const objecte2 = {...objecte1}

console.log ('Ejercicio 3:')
console.log (objecte2)

objecte2.nombre = 'Antonio Eduardo'

console.log (objecte1)
console.log (objecte2)



/* Exercici 4 */
const ArrayEx4_Bloque4 = [1,2,3,4,5,6,7,8,9,10]
let [elemento1, elemento2, ...restoElementos] = ArrayEx4_Bloque4

console.log ('Ejercicio 4:')
console.log (elemento1)
console.log (elemento2)
console.log (restoElementos)



/*NIVELL 3*/
/* Exercici 5 */

let multiplicar = (num1, num2, num3) => num1*num2*num3
const ArrayMultiplicar = [2,3,4]

console.log ('Ejercicio 5:')
console.log(multiplicar (...ArrayMultiplicar))

/* Exercici 6 */

const modulo = {asignatura: 'Angular', semanas: 18}
const centro = {nombre: 'IT Academy', ciudad: 'Barcelona'}

const descripcionCurso = {...centro, ...modulo}

console.log ('Ejercicio 6:')
console.log (descripcionCurso)