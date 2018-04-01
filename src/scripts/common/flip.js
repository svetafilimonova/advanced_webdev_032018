const $ = require("jquery");


function flipInit() {

    $('.auth-btn').click(function () {
        
        $('.container--intro').addClass('flipped');
        $('.auth-btn').hide();
    })


    $('.auth-form__button-main').click(function () {
        console.log("main");
        $('.container--intro').removeClass('flipped');
        $('.auth-btn').show();
    });

}


module.exports = flipInit;