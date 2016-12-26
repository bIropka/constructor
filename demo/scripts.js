$(document).ready(function () {

    /* nav */
    $('nav .fa-bars').click(function() {
        
        $(this).toggleClass('active');
        $(this).siblings('ul').slideToggle(200);

    });

    /* menu */
    $('.menu .title').click(function() {

        $(this).siblings('ul').slideToggle(200);
        $(this).find('i').toggleClass('fa-arrow-down fa-arrow-up');

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

    /* menu-chbx */
    $('.form-menu-chbx .sub-title').click(function() {

        $(this).next('.fields').slideToggle(200);
        $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up');

    });


    $('.form-menu-chbx .show-more').click(function() {

        $(this).siblings('.unpopular').slideToggle(200);
        $(this).toggleClass('active');

    });

    $('.menu-chbx .title').click(function() {

        $(this).siblings('.form-menu-chbx').addClass('active');

    });

    $('.form-menu-chbx > i').click(function() {

        $(this).parents('.form-menu-chbx').removeClass('active');

    });

    /* */

});
