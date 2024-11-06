$(document).ready(function(){

    browserDetector();

    registraFecha();


    $('#btn_menu').click(function(){
        $("#menu-cascada").toggle();

    });

    $('#k4').click(function(){
        const ruta = "AUTORUN LIBRETA - K4/index_k4.html";
        window.open(ruta);
    });

    $('#k5').click(function(){
        const ruta = "AUTORUN LIBRETA - K5/index_k5.html";
        window.open(ruta);
    });

    $('#k6').click(function(){
        const ruta = "AUTORUN LIBRETA K- 6/index_k6.html";
        window.open(ruta);
    });

    $('#sp').click(function(){
        const ruta = "SPELLING BEE LOUNGE 4 KIDS/index.html"
        window.open(ruta);
    });




// media queries con js

function medidas_live() {
    var alto = 0;
    var ancho = 0;

        ancho = $(window).width();
        alto = $(window).height();            
        return ancho;    
}

function colapso(){
    var ancho = medidas_live();
    if(ancho < 768) {
        $('#vence').css("font-size","24px");
        $('#browser').css("font-size","24px");                                
    }
}

    $(window).resize(function(){
        ancho = $(window).width();
        alto = $(window).height();
        if(ancho < 769) {
            $('#vence').css("font-size","24px");
            $('#browser').css("font-size","24px");            
           
        } else if(ancho >768){
            $('#vence').css("font-size","72px");
            $('#browser').css("font-size","72px");
            
        }
      
    })


















});