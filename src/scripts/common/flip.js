const $ = require("jquery");


function flipInit() {

    $('.auth-btn').click(function () {
        console.log("authorization");
        $('.container--intro').toggleClass('flipped');
    })

}


module.exports = flipInit;