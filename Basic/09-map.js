//map


//declaracion
let myMap = new Map()

console.log(myMap)

//inicializacion
myMap = new Map([
    ["name", "Dany"],
    ["email","diquic@gmail.com"],
    ["age",37]
])

console.log(myMap)

//Metodos y Propiedades
//set o agregar elementos
myMap.set("alias","danycoy")

console.log(myMap)
//get llamar a un elementos con su clave
console.log(myMap.get("age"))
 
//has = verificar si existe una clave
console.log(myMap.has("alias"))

//delete
myMap.delete("alias")
console.log(myMap)

//clear
myMap.clear()
console.log(myMap)