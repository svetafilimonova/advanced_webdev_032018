const $ = require('jquery');


const parallaxScroll = (function () {
    const bg = document.querySelector(".header__parallax");
    const user = document.querySelector(".header__welcome");
    const svgText = document.querySelector(".header__svg-wrapper");


    return {
        move: function (block, windowScroll, strafeAmount) {

            const strafe = windowScroll / -strafeAmount + "%";
            const transformString = 'translate3d(0,'+ strafe +', 0)';

            const style = block.style;

            style.transform = transformString;
            style.webkitTransform = transformString;
        },

        init: function (wScroll) {

            this.move(bg, wScroll, 45 );
            this.move(user, wScroll, 20 );
            this.move(svgText, wScroll, 3 );


        }
    }

    console.log("hello from parallax")

})()


window.onscroll = function () {
    const wScroll = window.pageYOffset;

    parallaxScroll.init(wScroll);
}



console.log("hello from parallax")



module.exports = parallaxScroll;