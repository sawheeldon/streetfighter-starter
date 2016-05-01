$(document).ready(function () {
    $('.ryu-action').hide();
    $('.ryu-still').show();
    /* mouse enters*/
    $('.ryu').mouseenter(function () {
        $('.ryu-action').hide();
        $('.ryu-ready').show();
    });
    /* mouse leaves*/
    $('.ryu').mouseleave(function () {
        $('.ryu-action').hide();
        $('.ryu-still').show();
    });
});
