// OPERADORES EN JAVASCRIPT

let a = 10
let b = 3

// 1. Operadores aritmeticos
console.log(a + b)  // Suma: 13
console.log(a - b)  // Resta: 7
console.log(a * b)  // Multiplicacion: 30
console.log(a / b)  // Division: 3.333...
console.log(a % b)  // Modulo o residuo: 1
console.log(a ** b) // Potencia: 1000

// 2. Operadores de incremento y decremento
let contador = 5
contador++
console.log(contador) // 6
contador--
console.log(contador) // 5

// 3. Operadores de asignacion
let numero = 10
numero += 5  // numero = numero + 5
console.log(numero) // 15
numero -= 3  // numero = numero - 3
console.log(numero) // 12
numero *= 2  // numero = numero * 2
console.log(numero) // 24
numero /= 4  // numero = numero / 4
console.log(numero) // 6
numero %= 4  // numero = numero % 4
console.log(numero) // 2
numero **= 3 // numero = numero ** 3
console.log(numero) // 8

// 4. Operadores de comparacion
console.log(5 == "5")   // true: compara solamente el valor
console.log(5 === "5")  // false: compara el valor y el tipo
console.log(5 != "5")   // false: desigualdad no estricta
console.log(5 !== "5")  // true: desigualdad estricta
console.log(a > b)       // true
console.log(a < b)       // false
console.log(a >= 10)     // true
console.log(b <= 3)      // true

// Es recomendable utilizar === y !== para evitar conversiones inesperadas.

// 5. Operadores logicos
let tieneEdad = true
let tienePermiso = false
console.log(tieneEdad && tienePermiso) // AND: false
console.log(tieneEdad || tienePermiso) // OR: true
console.log(!tieneEdad)                // NOT: false

// 6. Operador ternario
let edad = 20
let resultado = edad >= 18 ? "Es mayor de edad" : "Es menor de edad"
console.log(resultado)

// 7. Operador de concatenacion
let nombre = "Carlos"
let saludo = "Hola, " + nombre
console.log(saludo)

// 8. Operadores de tipo
console.log(typeof nombre)       // string
console.log(typeof edad)         // number
console.log([] instanceof Array) // true

// 9. Operador de coalescencia nula
// Usa el valor de la derecha si el de la izquierda es null o undefined.
let usuario = null
console.log(usuario ?? "Invitado") // Invitado

// 10. Encadenamiento opcional
// Evita un error si una propiedad intermedia no existe.
let persona = { nombre: "Ana" }
console.log(persona.direccion?.ciudad) // undefined

// 11. Operadores de bits
console.log(5 & 1)  // AND: 1
console.log(5 | 1)  // OR: 5
console.log(5 ^ 1)  // XOR: 4
console.log(~5)     // NOT: -6
console.log(5 << 1) // Desplazamiento a la izquierda: 10
console.log(5 >> 1) // Desplazamiento a la derecha: 2

// 12. Operadores especiales para objetos
let estudiante = { nombre: "Luis", edad: 18 }
console.log("nombre" in estudiante) // true
delete estudiante.edad
console.log(estudiante) // { nombre: "Luis" }

// 13. Operador spread o propagacion
let numeros = [1, 2, 3]
let masNumeros = [...numeros, 4, 5]
console.log(masNumeros)



//ejercicios

// 1. Crea una variable para cada operacion aritmetica
let suma = "+"
let resta = "-"
let Multiplicacion = "*"
let Division = "-"

// 2. crea una variable para cada tipo de operacion de asignacion, que haga uso
let numero1 = 20
numero1 +=5
console.log(numero1)

let numero2 = 25
numero2 -= 3
console.log(numero2)

/*// 3. Operadores de asignacion
let numero = 10n
numero += 5  // numero = numero + 5
console.log(numero) // 15
numero -= 3  // numero = numero - 3
console.log(numero) // 12
numero *= 2  // numero = numero * 2
console.log(numero) // 24
numero /= 4  // numero = numero / 4
console.log(numero) // 6
numero %= 4  // numero = numero % 4
console.log(numero) // 2
numero **= 3 // numero = numero ** 3
console.log(numero) // 8 */