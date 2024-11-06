/*  CODIGO PARA CONTROLAR VIGENCIA DE PAGINA PROYECTO: IGNITION */
// CADUCIDAD CON LOCALSTORAGE
// registra la fecha actual en el localStorage
//localStorage.clear();

var registraFecha = function () {
    var ahora = new Date();
    ahora = ahora / 1000 / 60 / 60 / 24;
    ahora = Math.floor(ahora);

    var historialVacio = localStorage.getItem("ignition_1");
    var itinerario, registro;
    var conteo;
    let historialString;
    var largoReg, ultimoReg;
    var altoTotal = $("body").height();

    if (historialVacio == null) {
        var objEstructura = '[{"acceso":"';
        registro = objEstructura + ahora + '"}];';

        localStorage.setItem("ignition_1", registro);
    } else {

        var verificado_1 = verificaVigencia_1();
        var verificado_2 = verificaVigencia_2();


        if (verificado_1 != true || verificado_2 != true) {           
            // BLOQUEA POR PASAR DE LA FECHA DE CADUCIDAD
            // Primero registra el ultimo dia equivalente al dia de vencimiento 
            itinerario = localStorage.getItem("ignition_1");
            conteo = itinerario.length;
            conteo = conteo - 3;
            itinerario = itinerario.slice(0, conteo);
            itinerario = itinerario + ',{"registro":"' + ahora + '"}];';
            localStorage.setItem("ignition_1", itinerario);
            //
            // BLOQUEA PAGINA                 
            
            $("body").attr("disabled", "true");
            $("#vencimiento").show(500);
            $("#vence").text("ESTE PROGRAMA HA CADUCADO"); 
            $("#browser").fadeOut(200);

        } else if (verificado_1 == true) {
            historialString = localStorage.getItem("ignition_1");
            historialString = historialString.toString();
            largoReg = historialString.length;
            largoReg = largoReg - 4;
            ultimoReg = historialString.slice(0, largoReg);
            ultimoReg = ultimoReg.slice(largoReg - 5, largoReg);
            ultimoReg = parseInt(ultimoReg);

            if ((ahora - ultimoReg) > 0) {
                itinerario = localStorage.getItem("ignition_1");
                conteo = itinerario.length;
                conteo = conteo - 3;
                itinerario = itinerario.slice(0, conteo);
                itinerario = itinerario + ',{"registro":"' + ahora + '"}];';
                localStorage.setItem("ignition_1", itinerario); // Registra la fecha actual
                return;
            } else if ((ahora - ultimoReg == 0)) {              
                return; // DEJA PASAR A LA EJECUCION DEL PROGRAMA "IGNITION"
            } else if ((ahora - ultimoReg) < 0) {
                // Bloquea pagina   
                         
                $("body").attr("disabled", "true");
                $("#vencimiento").show(1000);     
                $("#vence").text("ESTE PROGRAMA HA CADUCADO.AUNQUE SE HAYAN CAMBIADO LAS FECHAS DEL SISTEMA OPERATIVO"); 
                $("#browser").fadeOut(200);
                //
            }
        }
    }
}


// A CONTINUACION, OTRAS FUNCIONES: vigencia_1, vigencia_2 y Deteccion de Browser
// verifica la vigencia 1, la cual cuenta desde el primer dia que es usado + 8 semanas de uso.(dias calendario)
var verificaVigencia_1 = function () {
    // Toma la primera fecha registrada en LocalStorage y le suma el numero de dias que se le daran al usuario
    var inicio = localStorage.getItem("ignition_1");
    inicio = inicio.toString();
    inicio = inicio.slice(12, 17);
    var vence = parseInt(inicio);
    vence = vencSemanal(vence);  // aqui se le agregan las 8 semanas(O los dias que se programen para el vencimiento)
    var hoy = new Date();
    hoy = hoy / 1000 / 60 / 60 / 24;
    hoy = Math.floor(hoy);
    hoy = parseInt(hoy);
    var diferencia;

    diferencia = vence - hoy;
    if (diferencia > 0) {
        return true;
    } else if (diferencia <= 0) {
        return false;
    }
}

// Verifica la vigencia numero 2, vigencia de periodo TOTAL (final de año)
var verificaVigencia_2 = function () {
    var fecha;
    var vence = 0;
    var caducidad = vencimiento(); // caducidad extraida de script "vencimiento.js"

    fecha = new Date(caducidad);
    vence = fecha / 1000 / 60 / 60 / 24;
    vence = Math.floor(vence);
    vence = parseInt(vence);

    var hoy = new Date();
    hoy = hoy / 1000 / 60 / 60 / 24;
    hoy = Math.floor(hoy);
    hoy = parseInt(hoy);
    var diferencia;

    diferencia = vence - hoy;
    if (diferencia > 0) {
        return true;
    } else if (diferencia <= 0) {
        return false;
    }
}

// Fin de Verificacion 2
// CODIGO PARA DETECTAR EL TIPO DE BROWSER
// please note, 
// that IE11 now returns undefined again for window.chrome
// and new Opera 30 outputs true for window.chrome
// but needs to check if window.opr is not undefined
// and new IE Edge outputs to true now for window.chrome
// and if not iOS Chrome check
// so use the below updated condition

var browserDetector = function () {
    var isChromium = window.chrome;
    var winNav = window.navigator;
    var vendorName = winNav.vendor;
    var isOpera = typeof window.opr !== "undefined";
    var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
    var isIOSChrome = winNav.userAgent.match("CriOS");

    if (isIOSChrome) {
        // is Google Chrome on IOS
        return true;
    } else if (
        isChromium !== null &&
        typeof isChromium !== "undefined" &&
        vendorName === "Google Inc." &&
        isOpera === false &&
        isIEedge === false
    ) {
        // is Google Chrome        

        return true;
    } else {
        // not Google Chrome        
        $("body").attr("disabled", "true");
        $("#vencimiento").show(1000);        
        $("#browser").html("Esta plataforma funciona OPTIMAMENTE CON EL NAVEGADOR GOOGLE CHROME,<br>"+
            " abre tambien con Microsoft Edge.<br>"+
                                    "NO FUNCIONA CON OTROS NAVEGADORES. (browsers)");
        $("#vence").fadeOut(1000); 
        
        return false;

    }

}

/// FIN DE DETECCION


/* Autoria del codigo HTML, CSS Y JAVASCRIPT de esta plataforma: 
*
*      Enero-Febrero 2024:   Rodrigo A. Viscarra;                              
*
*
*
*
*/