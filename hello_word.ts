console.log("Hola, TypeScript")

//variables
let myString: String = "esto es  una cadena de texto"
console.log(myString)

let myNumer : number = 112

//constantes
const myConst: string= "Mi propiedad constante"

//Controles de flujo
if(myNumer == 10){
    console.log("El valor es 10")
}
else if(myNumer==11){
    console.log("El valor no es 11")
}
else{
    console.log("El valor no es 10 ni 11")
}

//funciones
function myFunction(): string{
   return "My function"
}
console.log(myFunction())

function sumNumbers(firstNumber: number, secondNumber: number): number{
    return firstNumber + secondNumber
}

console.log(sumNumbers(2,2))

// List
let myList: Array<string>= ["Dany", "Coy"]
console.log(myList)

let mySet: Set<string> = new Set(["Dany", "Coy"])

let myMap: Map<string, number> = new Map()
myMap.set("Nombre", 15)
console.log(myMap)

//bucles
//imprimir los valores de myList
for (const value of myList){
 console.log(value)
}


let myCounter = 0
while (myCounter <myList.length){
    console.log(myList[myCounter])
    myCounter ++
}