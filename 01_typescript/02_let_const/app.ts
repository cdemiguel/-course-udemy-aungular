let nombre = "demiguel"
if(true){
    let nombre="demiguel02"
}
console.log(nombre) // esto retorna "demiguel" ya que la variable let trabaja por scope
// ts al compilarlo en es5 nomenclara la variable del if por var nombre_01 automaticamente para
// no pisar a var nombre

const OPCIONES = "todas"
// esto daría error ya que las constates son solo lectura
// OPCIONES = "ninguna" 
// ademas tienen que ser inicializadas con un dato a la vez que son creadas
// no podemos hacer const OPCIONES;

// la propiedad scope de las let tb las tienen las const 
const nombre2 = "demiguel"
if(true){
    const nombre2 ="demiguel02"
}
console.log(nombre2)
// esto sería correcto por el tema scope