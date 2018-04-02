const $ = require('jquery');


    var blur = (function(){

        // var wrapper = document.querySelector('.comment__form-wrapper'),
        //     form = document.querySelector('.comment__form-blur');
        return {
            set: function() {
                // var imgWidth = document.querySelector('.section--comments').offsetWidth,
                //     posLeft = -wrapper.offsetLeft,
                //     posTop = -wrapper.offsetTop,
                //     blurCSS = form.style;
                //     console.log('imgWidth ',imgWidth);
                //     console.log('posLeft', posLeft);
                //     console.log('posTop', posTop);
                //     console.log(blurCSS);
    
                // blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
                // blurCSS.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
                // console.log('size ',blurCSS.backgroundSize);
                // console.log('pos ',blurCSS.backgroundPosition);

                const section = document.querySelector('.section--comments');
                const form = document.querySelector('.comment__form');
                const blurElem = document.querySelector('.comment__form-blur');

                const sectionWidth = section.offsetWidth;
                const sectionHeight = section.offsetHeight;
                const formLeft = form.offsetLeft;
                const formBottom = sectionHeight - (form.offsetTop + form.offsetHeight);
                // const formBottom = ((sectionHeight - form.offsetTop) + form.offsetHeight)*1.25;

                // const formBottom = form.offsetTop  - (form.offsetHeight + sectionHeight);
            
                console.log("sectionWidth " + sectionWidth );
                console.log("sectionHeight " + sectionHeight );
                console.log("form.offsetTop " + form.offsetTop );
                console.log("form.offsetHeight " + form.offsetHeight );
                console.log("formBottom " + formBottom );
                console.log("form.offsetHeight + form.offsetTop  " + (form.offsetHeight + form.offsetTop));

                blurElem.style.width = sectionWidth + "px";
                blurElem.style.height = sectionHeight + "px";
                blurElem.style.left = "-" + formLeft + "px";
                blurElem.style.bottom = "-" + formBottom + "px";

                
            }
        }
    }());
    

module.exports = blur;