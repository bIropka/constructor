$('.megamenu-wrap .burger').click(function() {
    $(this).toggleClass('active');
    $(this).siblings('.megamenu').slideToggle(400);
});

$('.megamenu > li').hover(
    function() {

        if($(window).width() > 1280) {

            var item = $(this);
            setTimeout(function() {
                if($(item).is(':hover')) {
                    if($(item).offset().top - $(window).scrollTop() > $(window).height()/2) {
                        $(item).find('.sub-categories').addClass('to-top');
                    }
                    $(item).find('.sub-categories').fadeIn(0);
                }
            }, 500);

        }

    },
    function() {

        if($(window).width() > 1280) {

            $(this).find('.sub-categories').fadeOut(0);
            $(this).find('.sub-categories').removeClass('to-top');

        }

    });

$('.sub-categories > li').hover(
    function() {

        if($(window).width() > 1280) {

            var item = $(this);
            setTimeout(function() {
                if($(item).is(':hover')) {
                    if($(item).offset().top - $(window).scrollTop() > $(window).height()/2) {
                        $(item).find('.links').addClass('to-top');
                    }
                    $(item).find('.links').fadeIn(0);
                }
            }, 500);

        }

    },
    function() {

        if($(window).width() > 1280) {

            $(this).find('.links').fadeOut(0);
            $(this).find('.links').removeClass('to-top');

        }

    });

$('.megamenu > li > .fa-caret-right').click(function() {

    if($(window).width() < 1281) {

        if($(this).hasClass('active')) {

            $(this).removeClass('active');
            $(this).siblings('.sub-categories').slideUp(200);

        } else {

            $('.megamenu > li > .fa-caret-right.active').removeClass('active');
            $('.megamenu > li > .sub-categories').slideUp(200);

            $(this).addClass('active');
            $(this).siblings('.sub-categories').slideDown(200);

        }

    }

});

$('.megamenu .sub-categories li > .fa-caret-right').click(function() {

    if($(window).width() < 1281) {

        if($(this).hasClass('active')) {

            $(this).removeClass('active');
            $(this).siblings('.links').slideUp(200);

        } else {

            $('.megamenu .sub-categories > li .fa-caret-right.active').removeClass('active');
            $('.megamenu .sub-categories > li .links').slideUp(200);

            $(this).addClass('active');
            $(this).siblings('.links').slideDown(200);

        }

    }

});