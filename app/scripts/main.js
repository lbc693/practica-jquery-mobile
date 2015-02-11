console.log('\'Allo \'Allo!');
$(document).ready(function() {
    $('#tap').on('tap', function() {
        alert('TapEvent');
    });
    $('#taphold').on('taphold', function() {
        alert('Tap Hold Event');
    });
    $('#swipe').on('swipe', function() {
        alert('Swipe Event');
    });
    $('#swipeleft').on('swipeleft', function() {
        alert('Swipe Left Event');
    });
    $('#swiperight').on('swiperight', function() {
        alert('Swipe Right Event');
    });
    $(window).on('orientationchange', function(event) {
        $('#placeholder').html('Se ha cambiado la orientación a: ' + event.orientation);
    });
});
