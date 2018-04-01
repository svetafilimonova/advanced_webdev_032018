const $ = require("jquery");
const slider = require('./common/slider');
const menu = require('./common/menu');
const navBlog = require('./common/blog_menu');
const blogScrollInit = require('./common/blog-scroll');
const flip = require('./common/flip');
const blur = require('./common/blur');
const parallaxScroll = require('./common/parallax-scroll.js');


slider(); // инициализируем слайдер
menu();
navBlog();
blogScrollInit();
flip();
blur.set();
parallaxScroll.init();