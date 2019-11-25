$(document).ready(function(){
  $('.togg').click(function(){
$('.togg').toggleClass('lijo');
$('.firstlevel').toggleClass('surya');

});


$('.firstlevel li.has-sub').click(function(){
$(this).find('.sub').slideToggle();   
var t = $(this).find('.sub'); 
$('.sub').not(t).slideUp();
});

var elements = $('.accordion-single-details');
    
elements.each(function() {
  var detailsHeight = $(this).css('height');
  $(this).css('max-height', '0px');

  $(this).siblings('.accordion-single-brief').on('click', function() {
    
    var accordionDetails = $(this).siblings('.accordion-single-details');
    
    if (!$(this).parent().hasClass('open')) {
      $(this).parent().addClass('open');
      $(this).siblings('.accordion-single-details').css('max-height', detailsHeight);
    } else {
      $(this).parent().removeClass('open');
      $(this).siblings('.accordion-single-details').css('max-height', '0px');
    }
  });
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