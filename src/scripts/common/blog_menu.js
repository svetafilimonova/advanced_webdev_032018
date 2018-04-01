const $ = require("jquery");

function navInit () {
    $('.blog__nav-btn').click(function(){
        console.log("пипка");
        $('body').css({"overflow": "auto"});

        $('.blog__nav-menu').toggleClass('active');

        if($('.blog__nav-menu').hasClass('active')){
            $('body').css({"overflow": "hidden"});
        }


    });
}


module.exports = navInit;