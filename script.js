// NAVBAR COLOUR CHANGE
$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
});


// TYPEWRITER EFFECT
$('#target').teletype({
    text: [
        'FARHAZ ALAM',
        'A WEB DEVELOPER',
        'A MOBILE APP DEVELOPER',
        'A DIGITAL MARKETER'
    ]
});

$('#cursor').teletype({
    text: ['_', ' '],
    delay: 0,
    pause: 500
});

$('.navbar-toggler').on('click', function() {
    $('.navbar').toggleClass('mobile-opened');
});