

class Person{
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person= new Person("Dany Javier", 21 , "Daniel")

console.log(person)


class defaultPerson{
      constructor(name = "Sin nombre", age = 0, alias ="sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person3 = new defaultPerson("Brais")
console.log(person3)

//acceso a propiedades
console.log(person3.alias)

//modificar su valor
person3.alias= "Javier"
console.log(person3.alias)

//funciones en clases
class Person2{
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk(){
        console.log("esta persona camina")
    }
}

let person4 = new Person2("Daniel", 12,"Iqui Coy")
person4.walk()

//propiedades privadas 
class privatePerson{
    #bank
    constructor(name, age, alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank

    }

    pay(){
        this.#bank
    }
}

let person5 = new privatePerson("Fredy", 32, "Oliverio", "5546876")

console.log(person5.bank)

// get y set

class getPerson{
    #name
    #age
    #alias
    constructor(name, age, alias){
        this.#name = name
        this.#age = age
        this.#alias = alias
    }
    //get permite leer la propiedad de una clase pricada
    get name(){
        return this.#name
    }
    //permite modificar una propiedad
    set alias(newAlias){
        this.#alias = newAlias
    }
    get alias(){
        return this.#alias
    }
}

let person6 = new getPerson("Lidia", 25,"Aracely")
console.log(person6.name)

person6.alias = "New alias"
console.log(person6.alias)


//Herencia

class animal{
    constructor(name){
        this.name= name
    }

    sound(){
        console.log("Emite un sonido generico")
    }
}
// extens= herada de animal
class dog extends animal{


    run(){
        console.log("Este perro corre")
    }
}

let myDog = new dog("Max")
myDog.run()
myDog.sound()
console.log(`este perro se llama ${myDog.name}, actualmente ${myDog.run} y tamnien ${myDog.sound}`)