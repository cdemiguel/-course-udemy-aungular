//un argumento
let miFuncionF = (a:any) => a
//dos argumentos
let miFuncionF2 = (a:number, b:number) => a+b
// + lineas codigo
let miFuncionF3 = (name:string) => {
    return name.toUpperCase()
}

// este es un objteto con funcion dentro + un timeOut CON funcion flecha (apunta a scope del objeto)

let hulk = {
    nickName: "hulk",
    smash() {
        setTimeout(() => console.log(this.nickName + " smash!!!"),1500)
    }
}

hulk.smash()

