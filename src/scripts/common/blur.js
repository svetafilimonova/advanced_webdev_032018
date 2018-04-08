
    var blur = (function(){

        return {
            set: function() {
                const section = document.querySelector('.section--comments');
                const form = document.querySelector('.comment__form');
                const blurElem = document.querySelector('.comment__form-blur');
                const sectionWidth = section.offsetWidth;
                const sectionHeight = section.offsetHeight;
                const formLeft = form.offsetLeft;
                const formBottom = sectionHeight - (form.offsetTop + form.offsetHeight);
 

                blurElem.style.width = sectionWidth + "px";
                blurElem.style.height = sectionHeight + "px";
                blurElem.style.left = "-" + formLeft + "px";
                blurElem.style.bottom = "-" + formBottom + "px";

                
            }
        }
    }());
    

module.exports = blur;