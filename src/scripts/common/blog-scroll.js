const $ = require('jquery');

function blogScrollInit () {

    console.log("blog");

    var elem = document.querySelector('.blog__main');
    var texts = document.querySelectorAll('.articles__text');
    var links = document.querySelectorAll('.blog-nav__item');
    var textsOffset = [];
    
    texts.forEach(function(text){
        textsOffset.push(text.offsetTop);	
    })
    console.log(textsOffset);
    
    window.addEventListener('scroll', function(){
        textsOffset.forEach(function(offset, i){
              if (window.pageYOffset >= offset) {
                    links.forEach(function(el, i) {
                        el.classList.remove('blog-nav__item--active');
                    })
              links[i].classList.add('blog-nav__item--active');
          } 
      })
    })


};




module.exports = blogScrollInit;