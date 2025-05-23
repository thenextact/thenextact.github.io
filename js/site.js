$(document).ready(function() {
    // scolling
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 800);
          return false;
        }
      }
    });

});

window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("about-shape");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}