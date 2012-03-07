jQuery.noConflict();

jQuery(document).ready(function () {

  /* Smooth Scroller
  ------------------------------------------------------------------------*/

  /* Position fixed hack for iPad and iPhone */
  if (navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod') {

    var change_header_position = function() {
      jQuery('.fixed').css('top',  window.scrollY + "px");
    };

    jQuery('#menu, #logo, .latest').localScroll({
      onAfter : function(){
        change_header_position();
        Cufon.refresh('#menu > li > a');
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
  

  /* Download Hover Effect
   ------------------------------------------------------------------------*/
  var download_hover = {
    init : function() {
        var el = jQuery('.download-item');
        el.hover(function(){
          jQuery('.download-hover', this).stop().fadeTo(600, 0.70);
          jQuery('.download-content', this).css('left', '-222px');
          jQuery('.download-content', this).stop().animate({ left : '0px'}, { queue: false, duration: 450, easing: 'easeOutQuint' });
        }, function(){
          jQuery('.download-hover', this).stop().fadeTo(800, 0);
          jQuery('.download-content', this).stop().animate({ left : '222px'}, { queue: false, duration: 300, easing: 'easeOutQuint' });
        });
      }
  };
  download_hover.init();

  
  /* Achievement
   ------------------------------------------------------------------------*/
   
  /* Show first article */
  jQuery('.achievement-article:eq(0)').show();
  
  /* Add active class to first achievement item */
  jQuery('.achievement-list li:first-child').addClass('active');
  
  /* achievement list click event */
  jQuery('.achievement-list li a').click(function(e){
    e.preventDefault();
    var $li = jQuery(this).parent();
    if (!$li.is('.active')) {
      var index = $li.index();
      jQuery('.achievement-list li.active').removeClass('active');
      jQuery('.achievement-article').hide();
      jQuery('.achievement-article:eq('+ index +')').fadeIn(400, function(){
        if (jQuery.browser.msie){
          this.style.removeAttribute('filter');
        }
      });
      $li.addClass('active');
    }
  });

  /* History
   ------------------------------------------------------------------------*/

  jQuery('#timeline').timelinr({
     autoPlay: 'false',
     issuesTransparency: 1
  });

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
  
  
  /* Cufon Fonts
   ------------------------------------------------------------------------*/
  //Cufon.replace('h1, h2, h3, h4, h5, h6, #menu > li > a', {fontFamily: 'PT Sans Narrow', hover: 'true', textShadow: '#222 1px 1px'});
  Cufon.replace('#menu > li > a', {
    fontFamily: "FZLanTingHeiS-H-GB",
    hover: true,
    separate: 'characters',
    textShadow: '#111 0 1px'
  });
  Cufon.replace('.section-header > h2', {
    fontFamily: "FZLanTingHeiS-H-GB",
    separate: 'characters',
    textShadow: '#EEE 1px 1px;',
    color: '-linear-gradient(#333, #555)'
  });
 
/* End custom scripts */
});
