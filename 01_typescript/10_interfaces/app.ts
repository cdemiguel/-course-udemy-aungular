// problema
// definir en objetos el tipo de contenido de una forma global

// las interfaces como buenas practicas y costumbres se CAMELCASE CON LA PTIMERA MAYUS TB
interface Xmen {
    nombre:string,
    poder:string,
}

// blackPanther cumple la interfaz Xmen
let blackPanther:Xmen = {
    nombre:"rick",
    poder:"es una pantera"
}

function enviarALaMision(xmen:Xmen) {
    console.log("enviando a la mision" + xmen.nombre)
}

enviarALaMision(blackPanther)