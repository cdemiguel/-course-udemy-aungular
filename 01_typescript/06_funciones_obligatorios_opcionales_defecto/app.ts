// tal como se marca quien en la función es marcarlo como obligatorio 
// tal como se marca objeto en la función es marcarlo como opcional pero con un valor por defecto
    //  ya que si no le envío nada en la funcion cogerá batiseñal

// tal y como se marca momento es enviar un parametro a la funcion opcional SIN valor por defecto 
    // fijarse en el "?"

// en la funcion todos los parametros obligatorios al principio
// los opcionales al final

function activar(quien:string, 
                objeto:string = "batiseñal",
                momento?:string){
    let mensaje:string;
    if(momento){
        mensaje = `${quien} activó la ${objeto} en el momento ${momento}`
    }else {
        mensaje = `${quien} activó la ${objeto}`
    }
    
    console.log(mensaje)

}
// esta funcion de ts no va a trabajar si no le envío un texto
// daría error en el ide
activar('Gordon', 'batiseñal', 'tarde')