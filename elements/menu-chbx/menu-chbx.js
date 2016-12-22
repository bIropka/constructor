$('.form-menu-chbx .sub-title').click(function() {

    $(this).next('.fields').slideToggle(200);
    $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up');

});

$('.form-menu-chbx .show-more').click(function() {

    $(this).siblings('.unpopular').slideToggle(200);
    $(this).toggleClass('active');

});
