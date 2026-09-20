
let myArray = [1,2,3,4]

let person = {
    name: "Dany Javier",
    age: 21,
    curso: "Base de datos 1"

}

let myValue = myArray[1]
console.log(myValue)

//desestructuracion

//sintaxis en arrays
let [mayValue0, myValu1, mayValue3]= myArray

//desesctructurar un array en diferentes variables

console.log(mayValue0)
console.log(myValu1)
console.log(mayValue3)

//sintaxis de arrays con valores predeterminador
let [mayValue5 = 0, myValu6=1, mayValue7=2, myValue8, myValue9]= myArray

console.log(mayValue5)
console.log(myValu6)
console.log(mayValue7)
console.log(mayValue8)
console.log(mayValue9)