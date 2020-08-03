function MySlider1__init() {
  $('.my-slider-1 > .owl-carousel').owlCarousel({
    responsive: {
      0: {
        items: 4
      }
    },
    dots: false,
    nav: true,
    navText: ['<img src="https://user-images.githubusercontent.com/66409890/88759989-fc8b8600-d1a6-11ea-9e41-0242c80a1d2a.png" alt="">', '<img src="https://user-images.githubusercontent.com/66409890/88759987-fbf2ef80-d1a6-11ea-931a-a4da7cdbf09f.png" alt="">']
  });
}


function scroll_init() {
  $(window).scroll(function () {
    $('.page').each(function (index, node) {
      var windowSt = $(window).scrollTop();
      var $node = $(node);
      var pageSt = $node.offset().top;
      var pageBtm = pageSt + $node.outerHeight();

      if (windowSt >= pageSt && pageBtm >= windowSt) {
        $('.sc-ev > ul > li').eq(index).addClass('active');
      } else {
        $('.sc-ev > ul > li').eq(index).removeClass('active');
      }
    })
  });
}

function swiper__init() {
  var swiper = new Swiper(".swiper-container", {
    direction: 'vertical',
    
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '#swiper-container .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '#swiper-container .swiper-button-next',
      prevEl: '#swiper-container .swiper-button-prev',
    },
    pagination: {
      el: '#swiper-container .swiper-pagination',
      clickable: true,

    },
  });
}

function bnswiper__init() {
  var swiper = new Swiper(".swiper-container-2", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: "#swiper-container-2 .swiper-pagination",
      clickable: true
    },
    pagination: {
      el: "#swiper-container-2 .swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: "#swiper-container-2 .swiper-button-next",
      prevEl: "#swiper-container-2 .swiper-button-prev"
    }
  });
}




$(function () {
  MySlider1__init();
  scroll_init();
  swiper__init();
  bnswiper__init();
})