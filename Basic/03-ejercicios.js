// 1. Escribe un comentario en una linea
// Este es un comentario de una linea.

// 2. Escribe un comentario en varias lineas
/*
Este es un comentario
de varias lineas.
*/

// 3. Declara variables con valores de todos los tipos de datos primitivos
let texto = "Hola"
let numero = 25
let booleano = true
let sinDefinir = undefined
let valorNulo = null
let numeroGrande = 12345678901234567890n
let simbolo = Symbol("identificador")

// 4. Imprime por consola el valor de todas las variables
console.log(texto)
console.log(numero)
console.log(booleano)
console.log(sinDefinir)
console.log(valorNulo)
console.log(numeroGrande)
console.log(simbolo)

// 5. Imprime por consola el tipo de dato de todas las variables
console.log(typeof texto)
console.log(typeof numero)
console.log(typeof booleano)
console.log(typeof sinDefinir)
console.log(typeof valorNulo) // Devuelve "object" por un error historico de JavaScript
console.log(typeof numeroGrande)
console.log(typeof simbolo)

// 6. Modifica los valores de las variables por otros del mismo tipo
texto = "Adios"
numero = 50.5
booleano = false
sinDefinir = undefined
valorNulo = null
numeroGrande = 98765432109876543210n
simbolo = Symbol("nuevoIdentificador")

// 7. Modifica los valores de las variables por otros de distinto tipo
texto = 100
numero = "cincuenta"
booleano = null
sinDefinir = true
valorNulo = "ya tiene valor"
numeroGrande = 123
simbolo = false

// 8. Declara constantes con valores de todos los tipos de datos primitivos
const textoConstante = "JavaScript"
const numeroConstante = 10
const booleanoConstante = true
const indefinidoConstante = undefined
const nuloConstante = null
const bigintConstante = 99999999999999999999n
const simboloConstante = Symbol("constante")

// 9. Intenta modificar los valores de las constantes
// 10. Comenta las lineas que produzcan errores al ejecutarse
// textoConstante = "Nuevo texto"
// numeroConstante = 20
// booleanoConstante = false
// indefinidoConstante = "definido"
// nuloConstante = 1
// bigintConstante = 1n
// simboloConstante = Symbol("nuevo")

// Estas lineas estan comentadas porque una constante no puede recibir
// un nuevo valor despues de ser declarada.
