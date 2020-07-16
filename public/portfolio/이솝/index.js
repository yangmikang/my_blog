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