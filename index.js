$(document).ready(function() {
    
    /* Flickity Carousel */
    
  $('.carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    wrapAround: true,
    autoPlay: 3000,
    pauseAutoPlayOnHover: true
  }); 
    
    /* Smooth Scrolling */

  $('body').on('click','a[href^="#"]',function(event){
    event.preventDefault();
    //var target_offset = $(this.hash).offset() ? $(this.hash).offset().top : 0;
    var target_offset = $(this.hash).offset() ? $(this.hash).offset().top : 0;
    //change this number to create the additional off set        
  
    var headerHeight = $(".head-element").height();
    target_offset = target_offset < headerHeight ? headerHeight: target_offset;
    
    $('html, body').animate({scrollTop:target_offset - headerHeight}, 1000);
  });

  /* Subscription validation */

  $('#email-form').submit(function(event) {
    if (validationEmail($('#text-email').val())) {
      alert('Thanks for subscribing!');
    }
    else {
      alert('Please enter a valid email address!');
    }
    event.preventDefault();
  });

  function validationEmail(submitEmail) {
    var filter = /^[\w-.+]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    if (filter.test(submitEmail)) {
    return true;
    }
    else {
    return false;
    }
  }

});