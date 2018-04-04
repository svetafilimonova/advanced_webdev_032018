const $ = require("jquery");
const slider = require('./common/slider');
const menu = require('./common/menu');
const navBlog = require('./common/blog_menu');
const blogScrollInit = require('./common/blog-scroll');
const flip = require('./common/flip');
const blur = require('./common/blur');
const parallaxScroll = require('./common/parallax-scroll.js');
const parallax = require('./common/parallax');
const worksForm = require('./common/works-validation');


slider(); // инициализируем слайдер



if($('.auth-btn').length) {
    flip();
}

if($('.blog__nav-btn').length) {
    navBlog();
}

if($('.header__parallax').length) {
    parallaxScroll.init();
}

if($('.blog__main').length) {
    blogScrollInit();
}


if($('.hamburger').length) {
    menu();
}

if($('.comment__form--works').length) {

    blur.set();

    window.onresize = function () {
        blur.set();
    }
}

if($('.parallax').length) {
    window.addEventListener('mousemove', parallax);
}

if($('.comment__form--works ').length) {
    worksForm();
}