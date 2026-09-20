//objets

//sintaxis
let person = {
    name : "Dany",
    age: 37,
    alias: "Danycoy"
}

//acceso a propiedades


//notacion por punto
//console.log(person.name)

//notacion por corchete
console.log(person["age"])

//modificacion
person.name = "DanyJavi"
console.log(person.name)

//se cambia el tipo de datos
person.age = "37s"

console.log(person.age)

//eliminar propiedad
delete person.age

console.log(person)

//nueva propiedad
person.email = "diquic@miumg.edu.gt"
console.log(person)


//metodos (funciones)

let person2 ={
    name : "Dany",
    age: 37,
    walk: function(){
        console.log("La persona camina")
    }
}


person2.walk()


//anidacion de objets


let person3 ={
    name : "Dany",
    age: 37,
    walk: function(){
        console.log("La persona camina")
    },

    //nuevo objeto dentro de un objeto
    job: {
     direccion: "purulha",
     experiencia: "15 años",
     edad: 25,
     work: function(){
      console.log("Esta persona trabaja")
     }
    }
}


person2.walk()
person3.job.work()
console.log(person3)

//igualdad de objetos
//this = llamar las caracteristicas de un objeto para la interpolacion

let person4={
    name: "lois",
    curso: "Base de datos II",
    calificacion: 57,
    name1: function(){
        console.log(`Tu calificacion en ${this.curso} es ${this.calificacion}`)
    }
}


//iteracion
for (let key in person4){
    console.log(key + ": " + person4["key"])
}


//funciones con objetos
person4.name1();

function person(name, age){
    this.name= name
    this.age=age

}

let person5 = new person("Carlos", 50)
