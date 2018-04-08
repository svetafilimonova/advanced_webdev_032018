const $ = require("jquery");

const menu = (function() {
    return {
        
        init: function() {
            $('.hamburger').on('click', function() {
                $('body').css({"overflow": "auto"});
                
                $('.hamburger').toggleClass('open');
                $('.fullscr-menu').toggleClass('active');
                $('body').toggleClass('inactive');
        
                if($('.hamburger').hasClass('open')){
                    $('body').css({"overflow": "hidden"});
                }
        
        });
    

    }

     }
 
    
}());


module.exports = menu;