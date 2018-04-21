let apellido:string = "demiguel"
// apellido = 123  esto dará error ya que en ts al definir una variable ay le estamos asignando
// un tipo, por ejemplo apellido es ahora del tipo string y este tipo no se puede modificar
// por eso igualar apellido a un number da error

// igualmente sin let apellido:string = "demiguel" la parte de string (definir el tipo) ts 
// ya lo esta asociando  apellido:string = "demiguel" = apellido = "demiguel" 
// aunque es correcto definir el tipo en ts siempre 

// con otro tipo de datos también podemos hacerlo
let apellido2:string = "demiguel"
let numero:number = 1234
let booleano:boolean = false

let hoy:Date= new Date()
//hoy = 'fernando'  => esto da error 
hoy = new Date('2020-10-21')

// hay un tipi de dato especial que es del tipo :any, para hacer que se comporten
// las variables... como en es6
let cualquiera:any = 123
let cualquiera2:any = 'hola'

// con objetos, si se define un objeto con esos key values, 
// ts genera un tipo de dato como ese objeto por eso... ts dara un error si en la redifinición
// de ese objeto no es como en el momento que se creo
let spiderman = {
    nombre:'peter parker',
    edad:123
}
// esto daría error
// spiderman = {
//     nombre:'peter parker',
//     edad:123,
//     poder:'trepar paredes'
// }
// ya que el poder no esta definido al momento de crear el objeto
// spiderman = {
//     nombre:'peter parker'
// }
// esto da error ya que en faltaría definir la edad...