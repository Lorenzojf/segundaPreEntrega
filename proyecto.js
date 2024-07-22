
class Clientes{
    constructor(nombre, apellido, edad, email,){
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad
        this.email=email
    }
}
class Acceder{
    constructor(usuario,contraseña){
        this.usuario=usuario
        this.contraseña=contraseña
    }
}

let nombre=prompt("Ingrese nombre")
let apellido=prompt("Ingrese apellido")
let edad=prompt("Ingrese edad")
let email=prompt("Ingrese su email")


const cliente1=new Clientes(nombre, apellido, edad, email,)
console.log(cliente1)


alert("Bienvenido a VulcanBox "+ cliente1.nombre + " "+cliente1.apellido)

let usuario=prompt("Crea tu usuario")
let contraseña=prompt("Crea tu contraseña")

const usuarioYContrasenia1=new Acceder(usuario,contraseña)
console.log(usuarioYContrasenia1)
let intentos=4

alert("Para ingresar, por favor escriba su usuario y contraseña")

let ingresarUsuario=prompt("Ingrese su usuario")
while((ingresarUsuario!==usuarioYContrasenia1.usuario)&&(intentos>0)){
    console.log(intentos)
     alert("Usuario incorrecto, te quedan "+intentos+" intentos")
    ingresarUsuario=prompt("Ingrese su usuario")
    intentos=intentos-1
}if(intentos===0){
    alert("No tenes mas intentos")
}
let ingreseContrasenia=prompt("Ingrese su contraseña")
while((ingreseContrasenia!==usuarioYContrasenia1.contraseña)&&(intentos>0)){
    console.log(intentos)
    alert("Contraseña incorrecto, te quedan "+intentos+" intentos")
    ingreseContrasenia=prompt("Ingrese su contraseña")
    intentos=intentos-1
}if(intentos===0){
    alert("No tenes mas intentos")
}else{
    alert("Hola "+ cliente1.nombre+ " " +cliente1.apellido+ "Accedio a su cuenta")
}

alert("La lista de inscripciones disponibles son: 8 clases $4,000, 12 clases $4,500, Pase Libre $5,000")

class Crossfit{
    constructor(cantidad, precio){
    this.cantidad=cantidad
    this.precio=precio
    }
}

const clases=[]
clases.push(new Crossfit("12 clases", 3600))
clases.push(new Crossfit("8 clases", 3200))
clases.push(new Crossfit("Libre", 4000))

console.log(clases)
// ORDENO LOS PRECIOS DE MENOR A MAYOR
const ordenarPorPrecio=clases.sort((a,b)=>{
    if(a.precio>b.precio){
        return 1
    }else if(a.precio<b.precio){
        return -1
    }else{
        return 0
    }
})
console.log(ordenarPorPrecio)

const actualizarPrecio=ordenarPorPrecio.map((el)=>{
    return{
        cantidad:el.cantidad,
        precio:el.precio*1.25,
    }
})
console.log(actualizarPrecio)

const filtro=actualizarPrecio.find((el)=>el.cantidad==="libre")
console.log(filtro)
if(filtro=== undefined){
    alert("No existe")
}
 
