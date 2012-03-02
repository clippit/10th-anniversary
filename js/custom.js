jQuery.noConflict();

jQuery(document).ready(function () {

  /* Smooth Scroller
  ------------------------------------------------------------------------*/

  /* Position fixed hack for iPad and iPhone */
  if (navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod') {

    var change_header_position = function() {
      /* With animation */
      //jQuery('.fixed').stop().animate({ top : window.scrollY + 'px' }, { queue: false, duration: 450, easing: 'easeOutQuint'});
      
      /* Without animation */
      jQuery('.fixed').css('top',  window.scrollY + "px");
    };

    jQuery('#menu, #logo, .latest').localScroll({
      onAfter : function(){
        change_header_position();
      }
    });
    
    jQuery('.fixed').css('position',  'absolute');

    jQuery(document).bind('scroll', function() {
      change_header_position();
    });
  } else {
    jQuery('#logo, .latest').localScroll();
    jQuery('#menu').onePageNav({
       changeHash: true,
       end: function() {
        Cufon.refresh('#menu > li > a');
       }
    });
  }
  
  
  /* PrettyPhoto
   ------------------------------------------------------------------------*/
  
  function prettyphoto() {
    jQuery('a[data-gal^="lightbox"]').prettyPhoto({
      show_title: true,
      overlay_gallery: false,
      deeplinking: false,
      default_width: 600,
      default_height: 360,
      theme: 'pp_default', /* pp_default / facebook / light_rounded / dark_rounded / light_square / dark_square */
      social_tools : false
    });
  }
  
  /* Init PrettyPhoto */
  prettyphoto();
  
  
  /* Google Maps
   ------------------------------------------------------------------------*/
  // jQuery('#gmap').googleMaps({
  //   latitude: 52.263301,
  //   longitude: 21.028317,
  //   markers: {
  //     latitude: 52.263301,
  //     longitude: 21.028317
  //   }
  // });
  
  
  /* Sliders
   ------------------------------------------------------------------------*/
   
  /* Homepage slider */
  jQuery('#homepage-slider').RSlider({
    delay          : 5000,
    duration       : 1000,
    height         : 480,
    width          : 960,
    slices         : 6,
    easing         : 'easeOutExpo',
    effect         : 'vertical_slice',
    pause_on_hover : true
  });
  
  /* Showcase slider */
  // jQuery('#showcase-slider').RSlider({
  //                  delay      : 5000,
  //                  duration     : 1000,
  //                  height     : 480,
  //                  width      : 960,
  //                  slices     : 6,
  //                  easing     : 'easeOutExpo',
  //                  effect     : 'fade',
  //                  pause_on_hover : true
  //                  });
  /* Medium slider */
  // jQuery('.medium-slider').RSlider({
  //                  delay      : 5000,
  //                  duration     : 1000,
  //                  height     : 300,
  //                  width      : 960,
  //                  slices     : 6,
  //                  easing     : 'easeOutExpo',
  //                  effect     : 'fade',
  //                  pause_on_hover : true
  //                  });
  
  
  /* Display sliders navigation */
  jQuery('.navigation .rs-nav').css({opacity : 0, display : 'block'});
  jQuery('.navigation').hover(function(){
    jQuery('.rs-nav',this).stop().animate({ opacity : 1 }, { queue: false, duration: 450});
    jQuery('.rs-next',this).stop().animate({ right : '10px'}, { queue: false, duration: 450, easing: 'easeOutQuint' });
    jQuery('.rs-prev',this).stop().animate({ left : '10px'}, { queue: false, duration: 450, easing: 'easeOutQuint' });
  }, function(){
    jQuery('.rs-nav',this).stop().animate({ opacity : 0 }, { queue: false, duration: 450});
    jQuery('.rs-next',this).stop().animate({ right : '-68px'}, { queue: false, duration: 450, easing: 'easeOutQuint' });
    jQuery('.rs-prev',this).stop().animate({ left : '-68px'}, { queue: false, duration: 450, easing: 'easeOutQuint' });
  });
  

  /* Contact Form
   ------------------------------------------------------------------------*/
  /* Messages */
  /*var invalid_answer = 'Validation Error: Invalid answer',
    is_not_valid = 'Validation Error: Value is not valid',
    success = '<strong>Your message has been sent. Thank you for contacting us.</strong>',
    error = 'Error: Sending message';
  
   
  jQuery('.contact-form').RForms({
    path : 'contact-form.php',
    submit :
      function(form, input) {
        form.find('.rf-message').html('');
        form.find('.req').parent().removeClass('error');
      },
    valid_error :
      function(form, input) {
        input.parent().addClass('error');
        if (input.is('.valid_asq')) {
          form.find('.rf-message').append(invalid_answer + ' <br/>');
        } else {
          form.find('.rf-message').append(is_not_valid + '<br/>');
        }
      },
    sending :
      function(form) {
        form.find('.rf-loader').fadeIn(400);
      },
    complete :
      function(form) {
        form.find('.rf-loader').fadeOut(400);
      },
    success :
      function(form) {
        form.find('.rf-item, .rf-send').fadeOut(400);
        form.find('.rf-message').html(success);
      },
    error :
      function(form) {
        form.find('.rf-message').html(error);
      }
  });*/
  
  
  /* Portfolio
   ------------------------------------------------------------------------*/
  
  // jQuery('.portfolio-grid').parent().each(function(){
                      
  //   var
  //     speed = 750,  // animation speed
  //     container = jQuery(this),
  //     filter_efx = jQuery('.portfolio-grid', container).data('filter-efx'),
  //     portfolio_grid = jQuery('.portfolio-grid', container);
      
  //     if (filter_efx === undefined || filter_efx === '') filter_efx  = 'hide';
  //     else filter_efx = filter_efx;
      
  //   /* Add active class to first navigation item */
  //   jQuery('.portfolio-nav li:first-child a', container).addClass('active');
    
  //   if (jQuery('.portfolio-nav li', container).size() > 0) var first_class = jQuery('.portfolio-nav li:first-child a', container).attr('class').split(' ')[0];
    
  //   portfolio_grid.masonry({
  //     columnWidth: 246, // Column width 222px + margin right 24px
  //     singleMode: true,
  //     resizeable: false,
  //     /* only apply masonry layout to visible elements */
  //     itemSelector: '.grid-item:not(.invis)',
  //     animate: true,
  //     animationOptions: {
  //       easing: 'easeOutQuad',
  //       duration: speed,
  //       queue: false
  //     }
  //   });
    
  //   /* Show items only with first category */
  //   if (first_class != 'all') {
  //     if (filter_efx == 'hide') {
  //       jQuery('.grid-item:not(.'+first_class+')', portfolio_grid).addClass('invis').hide();
  //       portfolio_grid.masonry();
  //     } else {
  //       jQuery('.grid-item:not(.'+first_class+')', portfolio_grid).addClass('invis').animate({opacity : .1},speed);
  //     }
  //   }
    
  //   /* projects navigation action */
  //   jQuery('.portfolio-nav li a', container).click(function(){
                          
  //     /* Remove .active class from projects navigation */
  //     jQuery('.portfolio-nav li a', container).removeClass('active');
  //     var project_cat = '.' + jQuery(this).attr('class');
      
  //     if (project_cat == '.all') {
  //       /* Show all hidden boxes */
  //       var el = portfolio_grid.children('.invis').toggleClass('invis');
  //       if (filter_efx == 'hide') {
  //         el.fadeIn(speed);
          
  //         /* Run masonry class */
  //         portfolio_grid.masonry();
  //       } else {
  //         el.animate({opacity : 1},speed);
  //       }
  //     } else {
  //       var hide_el = portfolio_grid.children().not(project_cat).not('.invis').toggleClass('invis');
  //       var show_el = portfolio_grid.children(project_cat+'.invis').toggleClass('invis');
        
  //       if (filter_efx == 'hide') {
  //         /* Hide visible boxes */
  //         hide_el.fadeOut(speed);
  //         /* Show hidden boxes */
  //         show_el.fadeIn(speed);
  //         /* Run masonry class */
  //         portfolio_grid.masonry();
          
  //       } else {
  //         /* Hide visible boxes */
  //         hide_el.animate({opacity : .1},speed);
  //         /* Show hidden boxes */
  //         show_el.animate({opacity : 1},speed);
  //       }
        
  //     }

  //     /* Add .active class to projects navigation */
  //     jQuery(this).addClass('active');
  //     return false;
  //   });
  
  //   /* Hover effect */
  //   var portfolio_hover = {
  //     init : function() {
  //         var el = jQuery('.portfolio-item', container);
  //         el.hover(function(){
  //           jQuery('.portfolio-hover', this).stop().fadeTo(600, 0.70);
  //           jQuery('.portfolio-content', this).css('left', '-222px');
  //           jQuery('.portfolio-content', this).stop().animate({ left : '0px'}, { queue: false, duration: 450, easing: 'easeOutQuint' })
  //         }, function(){
  //           jQuery('.portfolio-hover', this).stop().fadeTo(800, 0);
  //           jQuery('.portfolio-content', this).stop().animate({ left : '222px'}, { queue: false, duration: 300, easing: 'easeOutQuint' })
  //         })
  //       }
  //   }
  //   portfolio_hover.init();
  
  // });
  
  /* News
   ------------------------------------------------------------------------*/
   
  /* Show first article */
  jQuery('.news-article:eq(0)').show();
  
  /* Add active class to first news item */
  jQuery('.news-list li:first-child').addClass('active');
  
  /* News list click event */
  jQuery('.news-list li').click(function(){
    if (!jQuery(this).is('.active')) {
      var index = jQuery(this).index();
      jQuery('.news-list li.active').removeClass('active');
      jQuery('.news-article').hide();
      jQuery('.news-article:eq('+ index +')').fadeIn(400, function(){
        if (jQuery.browser.msie){
          this.style.removeAttribute('filter');
        }
      });
      jQuery(this).addClass('active');
    }
  });
  
  /* News List */
  jQuery('.news-list').RDynamicList({
                    display_num : 5,
                    element_height : 65
                    });
  
  
  
  /* About
   ------------------------------------------------------------------------*/
  
  /* Slider */
  jQuery('#about-slider').RSlider({
                   delay      : 0,
                   duration     : 1000,
                   height     : 192,
                   width      : 624,
                   slices     : 6,
                   easing     : 'easeOutExpo',
                   pause_on_hover : true
                   });
  
  
  /* Accordion
   ------------------------------------------------------------------------*/
  jQuery('.accordion').RAccordion({element : 'li'});
  
  
  /* Toggle
   ------------------------------------------------------------------------*/
  jQuery('.toggle').RToggle({toggle_switch : '.switch'});
   
  
  /* Helper Functions
   ------------------------------------------------------------------------*/
   
  /* Images fade effect */
  jQuery('.fade').hover(function() {
    jQuery(this).stop().animate({ opacity : 0.7 }, 200);
   },function() {
    jQuery(this).stop().animate({ opacity : 1}, 500);
   });
  
  /* Zoom images */
  var zoom_offset = 100;
  zoom_offset = 100/2;
  jQuery('.img-zoom').hover(function() {
    jQuery(this).stop().animate({ width: '322px', height: '356px', top: '-'+zoom_offset+'px', left: '-'+zoom_offset+'px'}, 200);
   },function() {
    jQuery(this).stop().animate({ width: '222px', height: '256px', left: '0px', top: '0px'}, 500);
   });
  
  /* Tooltip */
  // jQuery('.tip').tipsy({
  //   fade : true,
  //   gravity: 's'
  // });
  
  
  /* Cufon Fonts
   ------------------------------------------------------------------------*/
  //Cufon.replace('h1, h2, h3, h4, h5, h6, #menu > li > a', {fontFamily: 'PT Sans Narrow', hover: 'true', textShadow: '#222 1px 1px'});
  Cufon.replace('#menu > li > a', {
    fontFamily: "Microsoft YaHei",
    hover: true,
    separate: 'characters',
    textShadow: '#111 0 1px'
  });
  Cufon.replace('.section-header > h2', {
    fontFamily: "Microsoft YaHei",
    separate: 'characters',
    textShadow: '#EEE 1px 1px;',
    color: '-linear-gradient(#333, #555)'
  });
  
/* End custom scripts */
});
