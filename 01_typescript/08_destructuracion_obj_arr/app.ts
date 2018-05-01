// Desestructuración sencilla de objetos

let avenger =  {
    personaje:"Steve",
    clave:"Capt America",
    poder:"Droga"
}
// Desestructuración MOLA!
let {personaje, clave, poder} = avenger
// OLD SCHOOL NO MOLA
// let personaje = avenger.personaje
// let clave = avenger.clave
// let poder = avenger.poder

console.log(nombre, clave, poder)

// ARRAYS Desestructuración
let avengers:string[] = ["thor", "steve", "tony"]
let [thor, steve, tony] = avengers
// el orden SI que afecta en esta desestructuración => es Secuencial
console.log(thor, steve, tony)
// si solo queremos hacer referencia a tony en la desestructuración y posteriormente en el console.log
// por culpa del orden especificado!
let[ , ,tony2] = avengers
console.log(tony2)