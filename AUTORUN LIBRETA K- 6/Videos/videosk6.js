$(document).ready(function () {

    crea_spans_1();
    crea_spans_2();
    crea_spans_3();

    ///home/albert/Documentos/kinder_desarrollo/AUTORUN LIBRETA - K4/Videos/Unidad I/Greetings.mp4
    http://127.0.0.1:5500/AUTORUN%20LIBRETA%20-%20K4/Videos/Videos/Unidad%20I/Greetings.mp4


    function crea_spans_1() {
        const presentes_1 = ["Head-Shoulders-Knees-_-Toes1",
                             "Head-Shoulders-Knees-_-Toes2",
                             "One-two-buckle-my-shoe1",
                             "One-two-buckle-my-shoes"
                            ];
        var i = 0;
        var vid = "";

        while (i < 4) {
            vid = presentes_1[i]
            $('#caja-audios1').append(
                '<span class="item_audio w-100 h-100 d-flex align-items-center justify-content-center">' +
                
                '<label class="w-30 h-50 me-2 etiqueta" for="video">' + (vid) + '</label>' +

                '<video class="video_kinder4" src="Unidad I/' + (vid) + '.mp4" controls poster="Portada.jpg">' +
                'Tu navegador no admite el elemento <code>video</code>.' +
                '</video>'+
                '<label class="w-30 h-50 me-2 etiqueta_unit" for="video"> &nbsp;&nbsp; Unidad 1 </label>' +
                '</span> <hr>'
            );
            i++;
        }

        $('#caja-audios1').append(
            '<span class="item_audio w-100 h-100 d-flex align-items-center justify-content-center">' +

            '<p class="w-50">' +
            'TOTAL DE ELEMENTOS: ' + i +
            '</p>' +

            '</span> <hr>'
        );
    }

    function crea_spans_2() {
        const presentes_2 = ["Video-twinkle-little-star",
                             "We-Dig-worms-lento",
                             "We-Dig-worms-normal"
                            ];
        var i = 0;
        var vid = "";

        while (i < 3) {
            vid = presentes_2[i]
            $('#caja-audios2').append(
                '<span class="item_audio w-100 h-100 d-flex align-items-center justify-content-center">' +
               
                '<label class="w-30 h-50 me-2 etiqueta" for="video">' + (vid) + '</label>' +

                '<video class="video_kinder4" src="Unidad II/' + (vid) + '.mp4" controls poster="Portada.jpg">' +
                'Tu navegador no admite el elemento <code>video</code>.' +
                '</video>'+
                '<label class="w-30 h-50 me-2 etiqueta_unit" for="video"> &nbsp;&nbsp; Unidad 2 </label>' +
                '</span> <hr>'
            );
            i++;
        }

        $('#caja-audios2').append(
            '<span class="item_audio w-100 h-100 d-flex align-items-center justify-content-center">' +

            '<p class="w-50">' +
            'TOTAL DE ELEMENTOS: ' + i +
            '</p>' +

            '</span> <hr>'
        );


    }

    function crea_spans_3() {
        const presentes_3 = ["1.-Happy-Song-Equipo-Rama","2.-Hokey-Pokey-Equipo-Rama"];
        var i = 0;
        var vid = "";

        while (i < 2) {
            vid = presentes_3[i]
            $('#caja-audios3').append(
                '<span class="item_audio w-100 h-100 d-flex align-items-center justify-content-center">' +
              
                '<label class="w-30 h-50 me-2 etiqueta" for="video">' + (vid) + '</label>' +

                '<video class="video_kinder4" src="Unidad III/' + (vid) + '.mp4" controls poster="Portada.jpg">' +
                'Tu navegador no admite el elemento <code>video</code>.' +
                '</video>'+
                '<label class="w-30 h-50 me-2 etiqueta_unit" for="video"> &nbsp;&nbsp; Unidad 3 </label>' +
                '</span> <hr>'
            );
            i++;
        }
        $('#caja-audios3').append(
            '<span class="item_audio w-100 h-100 d-flex align-items-center justify-content-center">' +

            '<p class="w-50">' +
            'TOTAL DE ELEMENTOS: ' + i +
            '</p>' +

            '</span> <hr>'
        );
    }

});