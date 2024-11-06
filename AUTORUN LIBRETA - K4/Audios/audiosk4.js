$(document).ready(function(){

    crea_spans_1();
    crea_spans_2();
    crea_spans_3();

    medidas_live();
    
    function evaluadora_1(indice) {
        return 
    } 
 
    function crea_spans_1() {    
        const presentes_1 = [1,2,3,7,8,9,11,12,14,15,16,17,18,19,20,21,22,23,25,27,28,29,30,31,32,33,34,36,37,38,39,42];   
        var i = 0;
        var pag = 0;
        
        while(i<32){
            pag = presentes_1[i]
            $('#caja-audios1').append(
                '<span class="item_audio w-100 h-100 d-flex align-items-center justify-content-center">' +
                    
                    '<label class="w-30 h-50 me-2 etiqueta" for="audio">' + 'Página '+ (pag)+'</label>' +
                    '<audio class="w-50" src="Audios Unidad I/Página '+(pag)+'.mp3" controls>'+
                        'Your browser does not support the <code>audio</code> element.'+
                    '</audio>'+
                    '<label class="w-30 h-50 me-2 etiqueta_unit" for="audio"> Unidad 1 </label>' +
                '</span> <hr>'
            );
            i++;
        }     

        $('#caja-audios1').append(
            '<span class="item_audio w-100 h-100 d-flex align-items-center justify-content-center">' +
                    
                    '<p class="w-50">'+
                        'TOTAL DE ELEMENTOS: '+ i +
                    '</p>'+
                    
                '</span> <hr>'
        );
    }

    function crea_spans_2() {  
        const presentes_2 = [46,47,48,49,50,51,52,53,54,57,58,59,60,61,63,64,65,67,69,71,72,73,74,75,76,77,78];     
        var i = 0;
        var pag = 0;
       
        while(i<27){
            pag = presentes_2[i]
            $('#caja-audios2').append(
                '<span class="item_audio w-100 h-100 d-flex align-items-center justify-content-center">' +
                  
                    '<label class="w-30 h-50 me-2 etiqueta" for="audio">' + 'Página '+ (pag)+'</label>' +
                    '<audio class="w-50" src="Audios Unidad II/Página '+(pag)+'.mp3" controls>'+
                        'Your browser does not support the <code>audio</code> element.'+
                    '</audio>'+
                    '<label class="w-30 h-50 me-2 etiqueta_unit" for="audio"> Unidad 2 </label>' +
                '</span> <hr>'
            );
            i++;
        } 
        
        $('#caja-audios2').append(
            '<span class="item_audio w-100 h-100 d-flex align-items-center justify-content-center">' +
                    
                    '<p class="w-50">'+
                        'TOTAL DE ELEMENTOS: '+ i +
                    '</p>'+

                '</span> <hr>'
        );
        
        
    }

    function crea_spans_3() {    
        const presentes_3 = [80,85,86,90,91,95,96,100,101,105,108];   
        var i = 0;
        var pag = 0;
       
        while(i<11){
            pag = presentes_3[i]
            $('#caja-audios3').append(
                '<span class="item_audio w-100 h-100 d-flex align-items-center justify-content-center">' +
                   
                    '<label class="w-30 h-50 me-2 etiqueta" for="audio">' + 'Página '+ (pag)+'</label>' +
                    '<audio class="w-50" src="Audios Unidad III/Página '+(pag)+'.mp3" controls>'+
                        'Your browser does not support the <code>audio</code> element.'+
                    '</audio>'+
                    '<label class="w-30 h-50 me-2 etiqueta_unit" for="audio"> Unidad 3 </label>' +
                '</span> <hr>'
            );
            i++;
        }
        $('#caja-audios3').append(
            '<span class="item_audio w-100 h-100 d-flex align-items-center justify-content-center">' +
                    
                    '<p class="w-50">'+
                        'TOTAL DE ELEMENTOS: '+ i +
                    '</p>'+
                    
                '</span> <hr>'
        );
    }

    function medidas_live() {
        var alto = 0;
        var ancho = 0;

        $(window).resize(function(){
            ancho = $(window).width();
            alto = $(window).height();

            $("#medidas").text(ancho + "x" + alto + " px");

        })
    }


    
});