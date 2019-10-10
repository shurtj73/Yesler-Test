//Slidedown
$(window).bind('scroll', function() {
  //when the top of the screen is greater than or equal to the top of the header, plus the height of the header...
    if($(window).scrollTop() >= $('header').offset().top + $('header').outerHeight() ) {
      //... add the animation class .slide to the #slideDown div
        $('#slideDown').addClass('slide');
  //when the top of the screen is less than or equal to the top of the header, plus the height of the header...
    }
      //... remove the animation class .slide to the #slideDown div
    else if($(window).scrollTop() <= $('header').offset().top + $('header').outerHeight() ) {
        $('#slideDown').removeClass('slide');
    }
});


//Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

