$(document).ready(function () {

    $('nav .fa-bars').click(function() {
        
        $(this).toggleClass('active');
        $(this).siblings('ul').slideToggle(200);

    });

    $('.menu .sub-title').click(function() {

        if ($(this).hasClass('active')) {
            $(this).siblings('ul').slideUp(200);
            $(this).removeClass('active');
        } else {
            $('.menu .sub-title.active').siblings('ul').slideUp(200);
            $('.menu .sub-title.active').removeClass('active');
            $(this).addClass('active');
            $(this).siblings('ul').slideDown(200);
        }

    });

    $('.form-menu-chbx .sub-title').click(function() {

        $(this).next('.fields').slideToggle(200);
        $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up');

    });

    $('.form-menu-chbx .show-more').click(function() {

        $(this).siblings('.unpopular').slideToggle(200);
        $(this).toggleClass('active');

    });

});
