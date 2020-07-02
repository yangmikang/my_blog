function MobileSideBar__toggle() {
    var $btn = $('.btn-toggle-mobile-side-bar');
    var $btn2 = $('.mobile-side-bar');
    var $btn3 = $('.background');
    var $btn4 = $('html');
    var $btn5 = $('.mobile-side-bar>.close>a')

    if ($btn.hasClass('active')) {
        $btn.removeClass('active');
        $btn2.removeClass('active');
        $btn3.removeClass('active');
        $btn4.removeClass('active');
        $btn5.removeClass('active');
    } else {
        $btn.addClass('active');
        $btn2.addClass('active');
        $btn3.addClass('active');
        $btn4.addClass('active');
        $btn5.addClass('active');

    }
}

function MobileSideBox__toggle(e) {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    }
    else {
        $(this).addClass('active');
    }
    e.stopPropagation();
}

function MobileSideBar__init() {
    $('.btn-toggle-mobile-side-bar,.background,.mobile-side-bar>.close>a').click(MobileSideBar__toggle);
    $('.side-box ul >li').click(MobileSideBox__toggle);

}

$(function () {
    MobileSideBar__init();
})

$('.bn-slider-bar > .side-bars > div').click(function() {
    var $clickedBtn = $(this);
    var $slider = $clickedBtn.closest('.bn-slider-bar');
    var isLeft = $clickedBtn.index() == 0;
    var $currnet = $slider.find('.bn-slider > .active');
    var $post = null;
    
    if ( isLeft ) {
        $post = $currnet.prev();
    }
    else {
        $post = $currnet.next();
    }
    
    if ( $post.length == 0 ) {
        if ( isLeft ) {
            $post = $slider.find('.bn-slider > div:last-child');
        }
        else {
            $post = $slider.find('.bn-slider > div:first-child');
        }
    }
    
    $currnet.removeClass('active');
    $post.addClass('active');
});