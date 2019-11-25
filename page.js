$(document).ready(function(){

	var $nav = $('.navigation'),
	posTop = $nav.position().top;
	$(window).scroll(function () {
		var y = $(this).scrollTop();
		if (y >= posTop) { $nav.css({'position':'fixed','text-align':'center','top':'0', 'margin':'0', 'padding':'','width':'100%'}); }
		else { $nav.css('position','relative'); }
	});	


	var swiper = new Swiper('.blog-slider', {
		spaceBetween: 30,
		effect: 'fade',
		loop: true,
		mousewheel: {
		  invert: false,
		},
		// autoHeight: true,
		pagination: {
		  el: '.blog-slider__pagination',
		  clickable: true,
		}
	  });


  let nCount = selector => {
    $(selector).each(function () {
      $(this)
        .animate({
          Counter: $(this).text()
        }, {
          // A string or number determining how long the animation will run.
          duration: 4000,
          // A string indicating which easing function to use for the transition.
          easing: "swing",
          /**
           * A function to be called for each animated property of each animated element. 
           * This function provides an opportunity to
           *  modify the Tween object to change the value of the property before it is set.
           */
          step: function (value) {
            $(this).text(Math.ceil(value));
          }
        });
    });
  };
  
  let a = 0;
  $(window).scroll(function () {
    // The .offset() method allows us to retrieve the current position of an element  relative to the document
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
      a++;
      nCount(".rect > h1");
    }
  });
  
  $("#owl-demo").owlCarousel({
    navigation : true
  });
  

	
  });