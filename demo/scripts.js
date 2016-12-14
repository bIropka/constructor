$(document).ready(function () {

    $('nav .fa-bars').click(function() {
        
        $(this).toggleClass('active');
        $(this).siblings('ul').slideToggle(200);

    });

});
