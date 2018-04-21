let _name:string = "carlos"
let _surname:string= "de miguel"
let _age:number = 23
// old school
console.log("hola, " + _name + " " + _surname + " " + _age)
// literal template
console.log(`hola ${name} ${_surname} ${_age}`)
// una buena propiedad de los template string es que podemos agregar multi linea sin brs \n (que en javascript hace saltos de linea)
//es bueno compilar para ver el resultado...
console.log(`hola ${name} 
${_surname} 
${_age}`)
//resultado de esto serà
// hola carlos
// de miguel
// 23

// si igualamos la variable a un template literal sera siempre tipo string
let texto:string = `hola ${name} ${_surname} ${_age}`
console.log(texto)
//dentro de las llaves de los templatestring es código js entonces podriamos hacer sumas...
// funciones ...
let texto2:string = `hola ${name} ${_surname} ${20+3}`

function getAficion() {
    return "deporte"
}
let texto3:string = `hola ${name} ${_surname} ${20+3} ${getAficion()}`