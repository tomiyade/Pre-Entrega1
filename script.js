//LO INTRODUZCO AL USUARIO
alert("Binevenido a TuSneaker, la tienda online mas grande de zapatillas de America del Sur")

//CREO LA CLASE
class Zapatilla {
    constructor(modelo = " ", año= 0, talle= 0, precio= 0){
        this.modelo = modelo
        this.año = año
        this.talle = talle
        this.precio = precio
    }
}

//FUNCION PARA BUSCAR ZAPATILLAS
function buscarZapatilla(zapatillas) {
    let modeloZapatilla = prompt("Ingrese un modelo de zapatilla")

    let encontrarZapatilla = zapatillas.find(zapatilla => zapatilla.modelo == modeloZapatilla)

    if(encontrarZapatilla == undefined){
        console.log("Producto no encontrado")
    }else{
        console.log(encontrarZapatilla)
    }
}

//FUNCION PARA BUSCAR POR AÑO
function ordenarAño(zapatillas) {
    let año = parseInt(prompt("Inmgrese un año"))
    let añoZapatilla = zapatillas.filter(zapatilla => zapatilla.año >= año)
    
    if(añoZapatilla.length == 0){
        console.log("No hay zapatillas de ese año")
    }else{
        console.log(añoZapatilla)
    }
}


//FUNCION PARA ORDENAR POR TALLE
function ordenarTalle(zapatilla) {
    let talle = parseInt(prompt("Ingrese el talle de la zapatilla"))
    let talleZapatailla = zapatillas.filter(zapatilla => zapatilla.talle >= talle)

    if(talleZapatailla.length == 0){
        console.log("No hay zapatillas en ese talle")
    }else{
        console.log(talleZapatailla)
    }
}


//FUNCION PARA ORDENAR POR PRECIO
function ordenarPrecio(zapatilla) {
    let precio = parseFloat(prompt("Ingrese el precio de la zapatilla"))
    let precioZapatilla = zapatillas.filter(zapatilla => zapatilla.precio >= precio)

    if(precioZapatilla.length == 0){
        console.log("Precio de la zapatilla incorrecto")
    }else{
        console.log(precioZapatilla)
    }
}


const zapatillas = []


let modelo, año, talle, precio, respuesta

//INGRESA LOS DATOS EL USUARIO
do{
    do{
        modelo = prompt("Ingrese un modelo").toLowerCase()
    }while(modelo.length == 0)
    
//VALIDAR LOS DATOS
    do{
        año = parseInt(prompt("Ingrese el año de la zapatilla"))
        talle = parseInt(prompt("Ingrese el talle de la zapatilla"))
        precio = parseFloat(prompt("Ingrese el precio de la zapatilla"))

        if (año>= 2023){
            alert("Año incorrecto, no se puede viajar al futuro, todavia.")
        }

        if(precio <= 0){
            alert("Precio Incorrecto")
        }

        if(talle<= 0 && talle >=55){
            alert("Talle Incorrecto")
        }
    }while(isNaN(año) || isNaN(talle) || isNaN(precio))

    const zapatilla = new Zapatilla(modelo, año, talle, precio)
    zapatillas.push(zapatilla)
    continuar = prompt("Desea ingresar mas zapatillas?").toLowerCase()
}while(continuar != "no")




do{
    respuesta = parseInt(prompt(`Ingrese un numero dependiendo de lo que desee: 
    1. Buscar modelos de zapatillas
    2. Buscar zapatillas por año
    3. Buscar zapatillas por talle
    4. Buscar zapatillas por precio`))
}while(respuesta <1 || respuesta >3)

switch(respuesta) {
    case 1:
        buscarZapatilla(zapatillas)
        break
    case 2: 
        ordenarAño(zapatillas)
        break
    case 3:
        ordenarTalle(zapatillas)
        break
    case 4:
        ordenarPrecio(zapatillas)
        break
    default:
        alert("Opcion no valida")
        break
}


