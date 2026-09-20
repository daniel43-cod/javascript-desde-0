//array

//declaracion
let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

myArray=[1,2,3,4]
myArray2=[2,1,2,3]

console.log(myArray)
console.log(myArray2)


myArray=["dany",2,false,4]
myArray2=[2,1,"luis",true]

console.log(myArray)
console.log(myArray2)
//
myArray2= new Array(1)
myArray2[0] = "brais"

console.log(myArray2)


//metodos comunes
myArray = []

//push y pop
myArray.push("brais")
myArray.push("dany")
myArray.push("Carlos")

console.log(myArray)

//quita los ultimos elementos de un arreglo
myArray.pop()
myArray.pop()
console.log(myArray)

//longitud de un arreglo
console.log(myArray.length)

//clear


//slice
myArray.push("brais","dany",12)
let myNewArray = myArray.slice(1,2)
console.log(myArray)
console.log(myNewArray)

//splice
