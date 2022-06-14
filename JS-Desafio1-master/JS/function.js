
alert("Usted puede reservar para la semana del 13 al 18 de junio de 2022");
/*Quiesiera una opción para que se actualice la fecha semana a semana, y 
en el futuro la idea es que sea con un calendario y hagan click sobre el dia */


//ESTA FUNCION ES PARA verificar que el usuario este poniendo un dia correcto
function reservaUsuario() {
    dia = prompt("Elija el dia que desea alquilar:  \n - Lunes\n -Martes\n -Miercoles\n -Jueves\n-Viernes\n -Sabado").toLowerCase();
    
    let diaElegido = semana.includes(dia) 
        
    if(diaElegido){
         horarios();
    }
    else if (dia == "domingo") {
        alert("Nos encontramos cerrados");
        reservaUsuario();
    }
    else {
        alert("Ingrese una opcion correcta");
        reservaUsuario();
    }


}

reservaUsuario()

//con esta funcion confirmo que la hora sea correcta
function horarios() {

    hora = prompt("Ingrese el horario que desea, entre las 8Am y las 22hs");
    if (hora >= 8 && hora < 22) {
        alert("La reserva es de 1hs reloj")
        compararReserva()
        
    }
    else if (hora < 8 || hora > 22) {
        alert("Nos encontramos cerrados");
        reservaUsuario()
    }
    else {
        alert("Ingrese un horario valido");
        reservaUsuario()
    }
}
//Con esta funcion verificaremos si el dia y la hora dados por el usuario ya que sencuentran reservados.
function buscarCoincidencia(dia, hora) {
    let existeCita = false

    for (const citaAux of reservas) {
        citaAux.informacion()

        existeCita = citaAux.verificarExistencia(dia, hora)

        if (existeCita) {
            
            break

        }

    }
    return existeCita
}

//con esta funcion informo al usuario si fue reservada previamente
function compararReserva() {
    let existeReserva = buscarCoincidencia(dia, hora)

    if (existeReserva) {
        alert("Disculpa ese dia y horario ya esta reservado, vuelve a intentarlo")
        reservaUsuario()
    } else {
        cargarUsuario()

    }
}

//con esta funcion el usuario confirma la reserva y es cargada en mi array de reservas
function cargarUsuario(){
    nombre = prompt("¿como te llamas?")
    dni = prompt("Ingrese su DNI/CEDULA")

    citaTemporal = new Reserva(dia, hora, nombre, dni)
    reservas.push(citaTemporal)
    imprimirCitasAgendadas()
    cajaReservas()
    confirmar()
    return
}


//Funcion para recorrer el arreglo de reservas
function imprimirCitasAgendadas() {
    for (const citaAux of reservas) {
        citaAux.informacion()
    }
}
// PARA INCLUIR EL PRECIO
function cajaReservas() {
    for (const caja of reservas) {
        let ingresar = caja.ingresarDinero()
        alert("el total a pagar es: $" + ingresar)
        break
    }

}


function confirmar() {
    let confirmacion = prompt("desea confirmar? \n - Si\n -No").toLowerCase();
    switch (confirmacion) {
        case "si":
            alert("registramos su reserva, Gracias por elegirnos");
            break;

        case "no":
            alert("Su reserva no fue registrada");
            break;

        default:
            alert("La opcion no es correcta");
            confirmar();
            break;
    }

}

// todavia NO LA ESTOY USANDO
// function verificarReservasUsuario() {
//     let existeReserva = prompt("ingrese su DNI")
//     for (const dniR of reservas) {
//             dniR.informacion()
//             existeReserva = dniR.verificarReserva()
//             if (existeReserva) {
//                 console.log("Usted reservo", imprimirCitasAgendadas())
//                 break
 //             }
 //         }
//         return existeReserva
 // }
// debugger
// verificarReservasUsuario()