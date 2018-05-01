// dan la posibilidad de ejecutar tarea, codigo o funcion cuando una tarea sincro se finaliza

let prom1 = new Promise( function (resolve, reject){
    setTimeout(()=> {
        console.log("promesa terminada")
        // //si termina bien
        resolve()
        // // si mal
        // reject()
    },1500)
})

prom1.then(
    ()=>{
    console.log("ejecutar cuando se termine bien")
    },
    ()=> {
        console.log("ejecutar si sale mal")
    }
)