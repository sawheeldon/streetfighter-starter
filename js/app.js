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
        playHadouken();
        $('.ryu-action').hide();
        $('.ryu-throwing').show();
        $('.hadouken').show();
        // play hadouken sound
        $('.hadouken').finish().show()
        .animate(
            {'left': '300px'},
            500,
            function () {
                $(this).hide();
                $(this).css('left','-212px');
        }
    );
    })
    /* mouse up */
    $('.ryu').mouseup(function () {
        $('.ryu-action').hide();
        $('.ryu-still').show();
        // ryu goes back to his ready position
    });
    /* keydown */
    $(document).keydown(function (key) {
        if (key.keyCode == 88) {
            $('.ryu-action').hide();
            $('.ryu-cool').show();
        }
    });

    /* key up */
    $(document).keyup(function (key) {
        if (key.keyCode == 88) {
            $('ryu-action').hide();
            $('ryu-still').show();
        }
    });
});
    /* Sounds */

    function playHadouken () {
        $('#hadouken-sound') [0].volume = 0.5;
        $('#hadouken-sound') [0].load();
        $('#hadouken-sound') [0].play();
    }
