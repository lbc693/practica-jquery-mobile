<<<<<<< HEAD
'use strict';
console.log('\'Allo \'Allo!');

$('#formulario').submit(function(e) {
    e.preventDefault();
    $.mobile.changePage('#listaAlumnos');
});

$('#lvAlumnos').children('li').on('click', function() {
    var i = $(this).index();
    console.log('Selected Index = ' + i);
    //  console.log(this);
    var alumno = $(this).text();
    console.log('Seleccionado: ' + alumno);
    $('#nombreAlumno').text(alumno);
});
=======
require.config({
	paths: {
		jquery: 'libs/jquery',
		jqueryMobile: 'libs/jquery.mobile-1.3.2'
	},
  shim: {
	"libs/jquery.mobile-1.3.2'" : { deps: ["jquery"], exports: 'jquery' },
  }
});

require(["jquery",
	"jqueryMobile",
], function ($) {
  console.log('jQuery version ' + $().jquery + ' installed');
});
>>>>>>> c92617766ba1488f314afc63c69f2e6872b41951
