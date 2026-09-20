// Tipos de datos primitivos

// String: texto
let nombre = "Carlos"
console.log(nombre)

// Number: numeros enteros y decimales
let edad = 25
let altura = 1.75
console.log(edad, altura)

// Boolean: verdadero o falso
let esEstudiante = true
console.log(esEstudiante)

// Undefined: variable sin un valor asignado
let direccion
console.log(direccion)

// Null: ausencia intencional de valor
let telefono = null
console.log(telefono)

// BigInt: numeros enteros muy grandes
let numeroGrande = 123456789012345678901234567890n
console.log(numeroGrande)

// Symbol: valor unico
let identificador = Symbol("id")
console.log(identificador)

// Tipos de datos no primitivos

// Object: coleccion de propiedades
let persona = {
    nombre: "Carlos",
    edad: 25
}
console.log(persona)

// Array: lista de valores
let colores = ["rojo", "verde", "azul"]
console.log(colores)

// Function: bloque de codigo reutilizable
function saludar() {
    return "Hola mundo"
}
console.log(saludar())

// typeof permite consultar el tipo de un valor
console.log(typeof nombre)
console.log(typeof edad)
console.log(typeof esEstudiante)
console.log(typeof direccion)
console.log(typeof numeroGrande)
console.log(typeof identificador)
console.log(typeof persona)



