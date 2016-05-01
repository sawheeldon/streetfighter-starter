$(document).ready(function () {
    $('.ryu-action').hide();
    $('.ryu-still').show();
    /* mouse enters*/
    $('.ryu').mouseenter(function () {
        $('.ryu-action').hide();
        $('.ryu-ready').show();
    })
    /* mouse leaves*/
    $('.ryu').mouseleave(function () {
        $('.ryu-action').hide();
        $('.ryu-still').show();
    })
    /* mouse down */
    $('.ryu').mousedown(function () {
        $('.ryu-action').hide();
        $('.ryu-throwing').show();
        $('.hadouken').show();
        // play hadouken sound
        $('.hadouken').show().animate(
        {'left': '1020px'},
        500,
        function () {
            $(this).hide();
            $(this).css('left','520px');
        }
    );
    })
    /* mouse up */
    $('.ryu').mouseup(function () {
        $('.ryu-action').hide();
        $('.ryu-ready').show()
        // ryu goes back to his ready position
    })
});
