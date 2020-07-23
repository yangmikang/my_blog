function MySlider1__init() {
    $('.my-slider-1 > .owl-carousel').owlCarousel({
      responsive:{
        0:{
          items:4
        }
      },
      dots:false,
      nav:true,
      navText: ['<img src="https://user-images.githubusercontent.com/66409890/87576163-e80daf00-c70b-11ea-99fb-3c3bedb52ff1.jpg">', '<img src="https://user-images.githubusercontent.com/66409890/87575959-a41aaa00-c70b-11ea-81b8-5bcd8d41fe68.JPG" alt="">']
    });
  }

$(function(){
  MySlider1__init();
})

function ActiveOnVisible__init() {
  $(window).resize(ActiveOnVisible__initOffset);
  ActiveOnVisible__initOffset();

  $(window).scroll(ActiveOnVisible__checkAndActive);
  ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__initOffset() {
  $('.active-on-visible').each(function(index, node) {
      var $node = $(node);

      var offsetTop = $node.offset().top;
      $node.attr('data-active-on-visible-offsetTop', offsetTop);

      if ( !$node.attr('data-active-on-visible-diff-y') ) {
          $node.attr('data-active-on-visible-diff-y', '0');
      }

      if ( !$node.attr('data-active-on-visible-delay') ) {
          $node.attr('data-active-on-visible-delay', '0');
      }
  });

  ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__checkAndActive() { 
  $('.active-on-visible:not(.actived)').each(function(index, node) {
      var $node = $(node);

      var offsetTop = $node.attr('data-active-on-visible-offsetTop') * 1;
      var diffY = parseInt($node.attr('data-active-on-visible-diff-y'));
      var delay = parseInt($node.attr('data-active-on-visible-delay'));

      var callbackFuncName = $node.attr('data-active-on-visible-callback-func-name');

      if ( $(window).scrollTop() + $(window).height() + diffY > offsetTop ) {
          $node.addClass('actived');

          setTimeout(function() {
              $node.addClass('active');
              if ( window[callbackFuncName] ) {
                  window[callbackFuncName]($node);
              }
          }, delay);
      }
  });
}

$(function() {
  ActiveOnVisible__init();
})
/* 발견되면 활성화시키는 라이브러리 끝 */

// 커스텀 시작

// 커스텀 끝