const $ = require("jquery");
const slider = require('./common/slider');
const menu = require('./common/menu');
const navBlog = require('./common/blog_menu');
const blogScroll = require('./common/blog-scroll');
const flip = require('./common/flip');
const blur = require('./common/blur');
const parallaxScroll = require('./common/parallax-scroll.js');
const parallax = require('./common/parallax');
const worksForm = require('./common/works-validation');
const introForm = require('./common/intro-validation');
const map = require('./common/map');
const preloader = require('./common/preloader');


slider(); // инициализируем слайдер



if($('.auth-btn').length) {
    flip.init();
}

if($('.blog__nav-btn').length) {
    navBlog.init();
}

if($('.header__parallax').length) {
    parallaxScroll.init();
}

if($('.blog__main').length) {
    blogScroll.init();
}


if($('.hamburger').length) {
    menu.init();
}




if($('.comment__form--works').length) {
   
    $( document ).ready(function() {
        blur.set();
        
     });
        
    window.onresize = function () {
            blur.set();
    }
}
 


if($('.parallax').length) {
    window.addEventListener('mousemove', parallax);
}

if($('.comment__form--works').length) {
    worksForm();
}



if($('.auth-form').length) {
    introForm();
}


if($('.map__google-map').length) {
    map.init();
}


if($('.preloader').length) {
    preloader.init();
}