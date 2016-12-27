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