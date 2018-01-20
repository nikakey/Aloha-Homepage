$(document).ready(function() {
    
    /* Flickity Carousel */
    
    
    $('.carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});
    
    
    
    /* Smooth Scrolling */
 /*   
    // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    var headerHeight = $("header").height();
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - headerHeight 
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
});*/

$('body').on('click','a[href^="#"]',function(event){
  event.preventDefault();
  //var target_offset = $(this.hash).offset() ? $(this.hash).offset().top : 0;
  var target_offset = $(this.hash).offset() ? $(this.hash).offset().top : 0;
  //change this number to create the additional off set        
 
  var headerHeight = $(".head-element").height();
  target_offset = target_offset < headerHeight ? headerHeight: target_offset;
  
  $('html, body').animate({scrollTop:target_offset - headerHeight}, 1000);
});

});