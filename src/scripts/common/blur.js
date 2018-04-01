const $ = require('jquery');


    var blur = (function(){

        var wrapper = document.querySelector('.comment__form-wrapper'),
            form = document.querySelector('.comment__form-blur');
        return {
            set: function() {
                var imgWidth = document.querySelector('.comments').offsetWidth,
                    posLeft = -wrapper.offsetLeft,
                    posTop = -wrapper.offsetTop,
                    blurCSS = form.style;
                    console.log('imgWidth ',imgWidth);
                    console.log('posLeft', posLeft);
                    console.log('posTop', posTop);
                    console.log(blurCSS);
    
                blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
                blurCSS.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
                console.log('size ',blurCSS.backgroundSize);
                console.log('pos ',blurCSS.backgroundPosition);
            }
        }
    }());
    
    blur.set();
    
    window.onresize = function () {
        blur.set();
    }
    



module.exports = blur;