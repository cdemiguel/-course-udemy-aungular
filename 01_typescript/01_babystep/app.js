"use strict";
// se ha de indicar a las funciones que tipo de variable se envía, string, bool ...
// para compilar los archivos ts, utilizar tsc + "nombre archivo"
function saludar(nombre) {
    console.log("hola " + nombre);
}
var wolverine = {
    nombre: "Logan"
};
// le enviaremos el string a la función ya masticado ("Logan")//
saludar(wolverine.nombre);
// para compilar automaticamente usaremos el watcher
// tsc "nombre archivo" -w
// con tsconfic añadido haciendo un tsc -init solamente deberiamos hacer el comando tsc
