 // js plugin is gose here
  jQuery(function($) {
   $(document).ready( function() {

    // owl crousel plugin linking here
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
    
// wow plugin linking here
new WOW().init();

  // stick up js plugin linking here
      $('.navbar-wrapper').stickUp();

      
// animated plugin script linking here
     $('#counter-block').ready(function(){
        $('.cup').animationCounter({
          start: 0,
          step: 20,
          delay:100,
          end: 2000,
        });
         $('.Clients').animationCounter({
          start: 0,
          step: 20,
          delay:100,
          end: 3000,
        });
          $('.Project').animationCounter({
          start: 0,
          step: 30,
          delay:100,
          end: 4000,
        });
       
    });

   });
              });
