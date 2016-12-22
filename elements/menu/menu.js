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