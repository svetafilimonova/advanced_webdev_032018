const $ = require("jquery");

const navblog = (function() {

    return {

        init: function() {
            $('.blog__nav-btn').click(function(){
                $('body').css({"overflow": "auto"});
        
                $('.blog__nav-menu').toggleClass('active');
        
                if($('.blog__nav-menu').hasClass('active')){
                    $('body').css({"overflow": "hidden"});
                }
            });
        }
    }

}());

module.exports = navblog;