// se ha de indicar a las funciones que tipo de variable se envía, string, bool ...
// para compilar los archivos ts, utilizar tsc + "nombre archivo"
function saludar(nombre:string) {
    console.log(`hola ${nombre}`)
}
const wolverine = {
    nombre : "Logan"
}
// le enviaremos el string a la función ya masticado ("Logan")
saludar(wolverine.nombre)