$(document).ready(function () {

    crea_spans_1();
    crea_spans_2();
    crea_spans_3();

    medidas_live();


    function crea_spans_1() {
        const presentes_1 = ["Unit 1 lesson 1 Greetings",
            "Unit 1 lesson 2 Personal Pronouns",
            "Unit 1 lesson 3 The Human Body",
            "Unit 1 lesson 4 The Family",
            "Unit 1 lesson 5 Days of the week",
            "Unit 1 lesson 6 Time",
            "Unit 1 lesson 7 Numbers from 1 to 12"
        ];
        var i = 0;
        var pag = "";

        while (i < 7) {
            pag = presentes_1[i]
            $('#caja-audios1').append(
                '<span class="item_audio w-100 h-100 d-flex align-items-center justify-content-center">' +

                '<label class="w-30 h-50 me-2 etiqueta" for="audio">' + (pag) + '</label>' +
                '<audio class="w-50" src="Audios Unidad I/' + (pag) + '.mp3" controls>' +
                'Your browser does not support the <code>audio</code> element.' +
                '</audio>' +
                '<label class="w-30 h-50 me-2 etiqueta_unit" for="audio"> Unidad 1 </label>' +
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
        const presentes_2 = [
            "Unit 2 lesson 1 Colors",
            "Unit 2 lesson 2 The Solar System",
            "Unit 2 lesson 3 Shapes",
            "Unit 2 lesson 4 The School",
            "Unit 2 lesson 5 The Neighborhood",
            "Unit 2 lesson 6 Animals"            
        ];

        var i = 0;
        var pag = "";

        while (i < 6) {
            pag = presentes_2[i]
            $('#caja-audios2').append(
                '<span class="item_audio w-100 h-100 d-flex align-items-center justify-content-center">' +

                '<label class="w-30 h-50 me-2 etiqueta" for="audio">' + (pag) + '</label>' +
                '<audio class="w-50" src="Audios Unidad II/' + (pag) + '.mp3" controls>' +
                'Your browser does not support the <code>audio</code> element.' +
                '</audio>' +
                '<label class="w-30 h-50 me-2 etiqueta_unit" for="audio"> Unidad 2 </label>' +
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
        const presentes_3 = [
                                "Unit 3 lesson 1 Seasons in El Salvador",
                                "Unit 3 lesson 2 Professions",
                                "Unit 3 lesson 3 Occupations",
                                "Unit 3 lesson 4 Means of Transportation"                                
                            ];
        var i = 0;
        var pag = "";

        while (i < 4) {
            pag = presentes_3[i]
            $('#caja-audios3').append(
                '<span class="item_audio w-100 h-100 d-flex align-items-center justify-content-center">' +

                '<label class="w-30 h-50 me-2 etiqueta" for="audio">' + (pag) + '</label>' +
                '<audio class="w-50" src="Audios Unidad III/' + (pag) + '.mp3" controls>' +
                'Your browser does not support the <code>audio</code> element.' +
                '</audio>' +
                '<label class="w-30 h-50 me-2 etiqueta_unit" for="audio"> Unidad 3 </label>' +
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

    function medidas_live() {
        var alto = 0;
        var ancho = 0;

        $(window).resize(function () {
            alto = $(window).width();
            ancho = $(window).height();

            $("#medidas").text(alto + "x" + ancho + " px");

        })
    }



});