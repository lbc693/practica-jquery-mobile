console.log('\'Allo \'Allo!');

$('#formulario').submit(function(e) {
    e.preventDefault();
    $.mobile.changePage('#listaCursos');
});

$('#lvAlumnos').children('li').on('click', function() {
    var i = $(this).index();
    console.log('Selected Index = ' + i);
    //  console.log(this);
    var alumno = $(this).text();
    console.log('Seleccionado: ' + alumno);
    $('.nombreAlumno').text(alumno);
});