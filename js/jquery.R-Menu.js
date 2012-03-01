/* 
 *  R-Menu ver 1.2
 *  Copyright (c) 2011 Rascals Labs. 
 *	All Right Reserved.
 *  You may not modify and/or redistribute this file.
 *  http://www.rascals.eu
 *  rascals@rascals.eu
 */

;(function ($) {

    jQuery.fn.RMenu = function(options) {
		
		/* Defaults are below */
		var opts = $.extend({}, $.fn.RMenu.defaults, options);
		
		/* Variables */
		var menu = $('li', this);
		
		/* Add level clases to menu */
		$(this).addClass('level0');
		$('> li > ul', this).addClass('level1');
		$('> li > ul > li > ul', this).addClass('level2');
		$('> li > ul > li > ul > li > ul', this).addClass('level3');
		
		$('> li > a', this).addClass('level0');
		$('> li > ul > li > a', this).addClass('level1');
		$('> li > ul > li > ul > li > a', this).addClass('level2');
		
		/* Remove title attribute from <a> tag */
        $('a', this).removeAttr('title');
		
		/* Bulid Sub Menu List */
		bulid_menu();
		
		/* Hover menu function */
        menu.hover(function () {
			var ul = $(this).find('ul:first'),
			top = opts.menu_height;
			ul.css('top', opts.menu_height+'px');
			
			/* First Level */
			if ($('a', this).is('.level0')) {
				
			/* Sub Levels */	
			} else {
				ul.css('top', '-1px');
				top = -1;
			}
			
			/* Fade Effect */
			if (opts.fade_effect == 'true') {
				ul.css({
					'visibility' : 'visible',
					'opacity' : 0,
					'top' : (top-20)+'px'
				}).animate({																		
					opacity : 1,
					'top' : top+'px'
				}, 400, function() {
					if (jQuery.browser.msie){ 
						this.style.removeAttribute('filter')
					}																	
				});
			} else { 
				ul.css('visibility', 'visible')
			}
			
        },
        function () {
			var ul = $(this).find('ul:first');
		
			/* Sub Levels */
            ul.css('visibility', 'hidden');
        });
		
		/* Helper functions */
		
		/* Color Effect */
		function color_effect(element, color, duration) {
			element.stop().animate({ 'background-color' : color }, duration);
			return false;
		}
		
		/* Resize Browser Window Function */
		$(window).resize(function() {
			bulid_menu(menu, opts);			  
			return false;
		});
		
		/* Bulid Sub Menu List */
		function bulid_menu() {
			menu.each(function() {
				var pos_nav = menu.parent().offset(),
				right_edge = $(document).scrollLeft()+$(window).width(),
				menu_pos;
				
				if($('> ul',this).length>0) menu_pos = $(this).find('ul').offset().left+opts.sub_menu_width;
				
				if(menu_pos >= right_edge) {
					if ($(this).parent().hasClass('level0')) {
					    $('> ul', this).css('left', -(opts.sub_menu_width) + $(this).width() +'px');
					} else {
						
					    $(this).find('ul').css('left', -opts.sub_menu_width +'px');
					}
				 
				} else {
					if ($(this).parent().hasClass('level0'))
					$(this).find('ul').css('left', '0');
					
					$(this).find('ul:not(:first)').css('left', '100%');
				}
			})
			return false;
		}
		
    }
	
	/* Defaults options */
	$.fn.RMenu.defaults = {
			sub_menu_width		: '160',
			menu_height 		: '40',
			fade_effect 		: 'true',
			menu_bg 			: '#111',
			menu_bg_hover	 	: '#cc3333',
			sub_menu_bg 		: '#222',
			sub_menu_bg_hover 	: '#cc3333'
	};
	 

})(jQuery);