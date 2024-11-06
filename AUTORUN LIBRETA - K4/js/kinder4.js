
$(document).ready(function(){

    colapso(); // Calcula el tamaño de la pantalla y colapsa botones innecesarios

    $('#audios').click(function(){
        const ruta = 'Audios/audiosk4.html';
       window.open(ruta);   
    });

    $('#videos').click(function(){
        const ruta = 'Videos/videosk4.html';
       window.open(ruta);            
    });

    $('#sp').click(function(){
        const ruta = '../SPELLING BEE LOUNGE 4 KIDS/index.html';
        window.open(ruta);
    });


    $('#read_me').click(function(){
        $('#nota').toggle();  
        $('#div_baidu').toggle();     
    });    

    $('#btn_nota').click(function(){
        $('#nota').fadeOut();
        $('#div_baidu').fadeOut();

    });

    $('#btn_juegos').click(function(){
        $('#juegos').click();
       
    });

    $("#alfabeto").click(function(){
        const ruta = '../IGNITION THE ALPHABET/index.html';
        window.open(ruta);
    });



    // calculo de tamaño de pantalla, para hacerlo responsive

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
            $('#read_me').css("display","none");
            $('#div_alfa').css("display","none");
            $('#div_juegos').css("display","none");
            $('#homeTablet').css("display", "block");
            $('#home').css("display", "none");
        }
    }
 
        $(window).resize(function(){
            ancho = $(window).width();
            alto = $(window).height();
            if(ancho < 769) {
                $('#read_me').css("display","none");
                $('#div_alfa').css("display","none");
                $('#div_juegos').css("display","none");
                $('#home').css("display", "none");
                $('#homeTablet').css("display", "block");
            } else if(ancho >768){
                $('#read_me').css("display","block");
                $('#div_alfa').css("display","block");
                $('#div_juegos').css("display","block");
                $('#homeTablet').css("display", "none");
                $('#home').css("display", "block");
            }
          
        })

        $('#home').click(function(){          
            const ruta = '../index.html';
            window.open(ruta);
        });

        $('#homeTablet').click(function(){          
            const ruta = '../index.html';
            window.open(ruta);
        });


   
});



