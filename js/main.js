$(document).ready(function(){
    //메인슬라이더
    $('.con01List').slick({
      dots: true,
      infinite: true,
      prevArrow:$('.Prev'),
      nextArrow:$('.Next'),
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay:true,
      autoplaySpeed:2000,
      pauseOnHover:false,
    })
    
    $('.lazy').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 3,
      slidesToScroll:1,
      prevArrow:$(''),
      nextArrow:$('.BottomArrow a'),
    });
    
    //WOW
    new WOW().init();
})