//funciones

//simple
function myFunction(){
    console.log("hola, function")
}

 myFunction()


 //con parametros


 function myfuncparameters(name){
    console.log(`hola ${name}`)

 }

 myfuncparameters("Dany")

 //funciones anonimas
 const myfunc2 =  function(name){
    console.log(`hola ${name}`)
 }

 myfunc2("Dany Javier")


 //arrow function
 const myfunc3 = (name) =>{
    console.log(`Name, ${name}`)
 }

 myfunc3("Javier")

  const myfunc4 = (name) => console.log(`Hola, ${name}`)

 myfunc4("Noemi")

 //parameters

function sum (a,b){
    console.log(a+b)
}

sum(5,5)


//Por defecto
function defaultSum (a=0,b=0){
    console.log(a+b)
}

defaultSum(5+1)

//Retorno de valores
function mult(a,b)
{
    return a*b
}

console.log(mult(5,5))

//funciones anidada
function extern(){
    console.log("Funcion externa")
    function intern()
    {
        console.log("Funcion interna")
    }
    intern()
}

extern()
