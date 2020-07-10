function topBarScroll(){
    var $thisSt = $(this).scrollTop();
    var topHeight = $('.top').outerHeight();
    
    if ( $thisSt > topHeight ) {
        $('.top').addClass('active');
    }
    else {
        $('.top').removeClass('active');
    }
}

function topBarScroll__init(){
    $(window).scroll(topBarScroll);
}

$(function(){
    topBarScroll__init();
})