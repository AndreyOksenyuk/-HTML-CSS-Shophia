$('.slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 3000,
   arrows: false,
   dots: true,
   infinite: true,
   speed: 500,
   fade: true,
   cssEase: 'linear',
   appendDots: $('.slider-dots'),
});

//buttonUp
function btnUp() {
   window.scrollTo({
      top: 0,
      behavior: "smooth"
   })
}
//fade buttonUp
let buttonUp = document.querySelector(".buttonUp")
window.onscroll = function () {
   if(window.scrollY > 200){
      buttonUp.style.opacity = "1";
   } else buttonUp.style.opacity = "0";
}

