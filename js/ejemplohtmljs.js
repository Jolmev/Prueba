function hora(){
    let gretting;
    let time = new Date().getHours;

    if (time < 12){
        gretting = "buenos dias";
    }else if (time < 18){
        gretting = "Buenas tardes"
    }else{
        gretting = "Buenas noches"
    }
    document.getElementById("saludo").innerHTML = gretting;
}

function hoyEs(){
    let dia;

    switch (new Date().getDay()){
        case 0:
            dia = "Domingo";
            break;
        case 1:
            dia = "Lunes";
            break;
        case 2:
            dia = "Martes";
            break;
        case 3:
            dia = "Miercoles";
            break;
        case 4:
            dia = "Jueves";
            break;
        case 5:
            dia = "Viernes";
            break;
        case 6:
            dia = "Sabado";
            break;
        
        default:
            dia = "Dia no encontrado";
            break;
    }
    document.getElementById("dia").innerHTML = "Hoy es: " + dia;
}

function lista1(){
    let productos = ["Leche", "Huevos", "Arroz", "Carne", "Pollo"];
    let texto = "";
    let x;
    for (x = 0; x < productos.length; x++){
        texto += productos[x] + "<br>";
    }
    return texto;
}

function lista2(){
    let productos2 = {nombreProducto: "Camisetas",
                    color:"Blancas",  código:15478}
    let texto = "";
    let x;
    for (x in productos2){
        texto += productos2[x] + " ";
    }
    return texto;
}

class Producto {
    constructor (nombre, codigo){
        this.nombre = nombre;
        this.codigo = codigo;
    }
    cambiarCodigo(newCodigo){
        this.Codigo = newCodigo;
    }
}

let producto = new producto('tenis', '412369');
producto.cambiarCodigo('5878')