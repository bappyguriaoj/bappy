// NAV BAR SCROLL
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
// Typed Js
$(document).ready(function(){

    var typed = new Typed('.typed', {
        strings: ["Web Designer", "Web Developer", "Youtuber", "Blogger"],
        typeSpeed: 80,
        backSpeed: 80,
        loop: true
      });
});
// Typed ja about 
$(document).ready(function(){

    var typed = new Typed('.about-text-slaid', {
        strings: ["Web Designer", "Web Developer", "Youtuber", "Blogger"],
        typeSpeed: 80,
        backSpeed: 80,
        loop: true
      });
});
// Slack

$('.one-time').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true
  });

//   Mouce Karcer
// new kursor({
//     type: 1,
//     removeDefaultCursor: true,
//     color: 'rgba(200,145,54)'
// });

// WOW JS

new WOW().init();


let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}


