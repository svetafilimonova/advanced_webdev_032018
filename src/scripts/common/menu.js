const $ = require("jquery");

function menuInit() {
     $('.hamburger').on('click', function() {
        console.log("menu clicked!");
        $('body').css({"overflow": "auto"});
        
        $('.hamburger').toggleClass('open');
        $('.fullscr-menu').toggleClass('active');
        $('body').toggleClass('inactive');

        if($('.hamburger').hasClass('open')){
            $('body').css({"overflow": "hidden"});
        }

        

     });
    console.log("menu!");
    
}


module.exports = menuInit;