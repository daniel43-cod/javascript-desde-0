//excepcion
let myObjet


//captura de errores
//try-catch
try{
console.log(myObjet.email)
console.log("Finaliza la ejecucion sin un error")
}
catch{
console.log("Ha finalizado la ejecucion con un error")
}

//capturar un error
try{
//console.log(myObjet.email)
console.log("Finaliza la ejecucion sin un error")
}
catch(error){
console.log("Ha finalizado la ejecucion con un error", error.message)
}
//Este codigo se ejecuta siempre
finally{
    console.log("Este codigo se ejecuta siempre")
}

//lanzamiento de errores


function sum(a,b){
    if(typeof a !== Number && typeof b !== Number){
        console.log("Esta operacion no se a podido completar")
    }
    return a+b
}
//throw new error("Se ha producido un error")
console.log(sum(5,5))