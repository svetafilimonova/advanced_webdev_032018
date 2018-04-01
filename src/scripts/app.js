const $ = require("jquery");
const slider = require('./common/slider');
const menu = require('./common/menu');
const navBlog = require('./common/blog_menu');
const blogScrollInit = require('./common/blog-scroll');
const flip = require('./common/flip');
const blur = require('./common/blur');


slider(); // инициализируем слайдер
menu();
navBlog();
blogScrollInit();
flip();
blur();