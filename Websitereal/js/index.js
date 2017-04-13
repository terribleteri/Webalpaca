// Uncomment to initialise WOW.js
new WOW().init();

$(document).ready(function(){
  $('.carousel').slick({
    dots: true
  });
});

/*for the typed title*/
document.addEventListener('DOMContentLoaded', function(){
      Typed.new('.typedtitle', {
        strings: ["A fleece of work"],
        typeSpeed: 150

      });
  });

  $(function () {
      // init
      var controller = new ScrollMagic.Controller({
          globalSceneOptions: {
              triggerHook: 'onLeave'
          }
      });

      // get all slides
      var slides = document.querySelectorAll(".panel");

      // create scene for every slide
      for (var i=0; i<slides.length; i++) {
          new ScrollMagic.Scene({
                  triggerElement: slides[i]
              })
              .setPin(slides[i], {pushFollowers: false})
              .addTo(controller);
      }

	});
