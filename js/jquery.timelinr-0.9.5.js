/* ----------------------------------
jQuery Timelinr 0.9.5
tested with jQuery v1.6+

Copyright 2011, CSSLab.cl
Free under the MIT license.
http://www.opensource.org/licenses/mit-license.php

instructions: http://www.csslab.cl/2011/08/18/jquery-timelinr/
---------------------------------- */
(function ($) {
$.fn.timelinr = function(options){
  // default plugin settings
  var settings = $.extend({
    orientation:              'horizontal',   // value: horizontal | vertical, default to horizontal
    containerDiv:             '#timeline',    // value: any HTML tag or #id, default to #timeline
    datesDiv:                 '#dates',     // value: any HTML tag or #id, default to #dates
    datesSelectedClass:       'selected',     // value: any class, default to selected
    datesSpeed:               'normal',     // value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to normal
    issuesDiv:                '#issues',      // value: any HTML tag or #id, default to #issues
    issuesSelectedClass:      'selected',     // value: any class, default to selected
    issuesSpeed:              'fast',       // value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to fast
    issuesTransparency:       0.2,        // value: integer between 0 and 1 (recommended), default to 0.2
    issuesTransparencySpeed:  500,        // value: integer between 100 and 1000 (recommended), default to 500 (normal)
    prevButton:               '#prev',      // value: any HTML tag or #id, default to #prev
    nextButton:               '#next',      // value: any HTML tag or #id, default to #next
    arrowKeys:                'false',      // value: true | false, default to false
    startAt:                  1,          // value: integer, default to 1 (first)
    autoPlay:                 'false',      // value: true | false, default to false
    autoPlayDirection:        'forward',      // value: forward | backward, default to forward
    autoPlayPause:            2000        // value: integer (1000 = 1 seg), default to 2000 (2segs)
    
  }, options);

  $(function(){
    // setting variables... many of them
    var howManyDates = $(settings.datesDiv+'>li').length,
        howManyIssues = $(settings.issuesDiv+'>li').length,
        currentDate = $(settings.datesDiv).find('a.'+settings.datesSelectedClass),
        currentIssue = $(settings.issuesDiv).find('li.'+settings.issuesSelectedClass),
        widthContainer = $(settings.containerDiv).width(),
        heightContainer = $(settings.containerDiv).height(),
        widthIssues = $(settings.issuesDiv).width(),
        heightIssues = $(settings.issuesDiv).height(),
        widthIssue = $(settings.issuesDiv+'>li').width(),
        heightIssue = $(settings.issuesDiv+'>li').height(),
        widthDates = $(settings.datesDiv).width(),
        heightDates = $(settings.datesDiv).height(),
        widthDate = $(settings.datesDiv+' li').width(),
        heightDate = $(settings.datesDiv+' li').height();
    
    // set positions!
    var defaultPositionDates;
    if(settings.orientation == 'horizontal') {
      $(settings.issuesDiv).width(widthIssue*howManyIssues);
      $(settings.datesDiv).width(widthDate*howManyDates).css('marginLeft',widthContainer/2-widthDate/2);
      defaultPositionDates = parseInt($(settings.datesDiv).css('marginLeft').substring(0,$(settings.datesDiv).css('marginLeft').indexOf('px')),10);
    } else if(settings.orientation == 'vertical') {
      $(settings.issuesDiv).height(heightIssue*howManyIssues);
      $(settings.datesDiv).height(heightDate*howManyDates).css('marginTop',heightContainer/2-heightDate/2);
      defaultPositionDates = parseInt($(settings.datesDiv).css('marginTop').substring(0,$(settings.datesDiv).css('marginTop').indexOf('px')),10);
    }
    
    $(settings.datesDiv+' a').click(function(event){
      event.preventDefault();
      // first vars
      var whichIssue = $(this).text();
      var currentIndex = $(this).parent().prevAll().length;

      // moving the elements
      if(settings.orientation == 'horizontal') {
        $(settings.issuesDiv).animate({'marginLeft':-widthIssue*currentIndex},{queue:false, duration:settings.issuesSpeed});
      } else if(settings.orientation == 'vertical') {
        $(settings.issuesDiv).animate({'marginTop':-heightIssue*currentIndex},{queue:false, duration:settings.issuesSpeed});
      }
      $(settings.issuesDiv+' li').animate({'opacity':settings.issuesTransparency},{queue:false, duration:settings.issuesSpeed}).removeClass(settings.issuesSelectedClass).eq(currentIndex).addClass(settings.issuesSelectedClass).fadeTo(settings.issuesTransparencySpeed,1);
      
      // now moving the dates
      $(settings.datesDiv+' a').removeClass(settings.datesSelectedClass);
      $(this).addClass(settings.datesSelectedClass);
      if(settings.orientation == 'horizontal') {
        $(settings.datesDiv).animate({'marginLeft':defaultPositionDates-(widthDate*currentIndex)},{queue:false, duration:'settings.datesSpeed'});
      } else if(settings.orientation == 'vertical') {
        $(settings.datesDiv).animate({'marginTop':defaultPositionDates-(heightDate*currentIndex)},{queue:false, duration:'settings.datesSpeed'});
      }
    });

    $(settings.nextButton).bind('click', function(event){
      event.preventDefault();
      var currentPositionIssues, currentIssueIndex, currentPositionDates, currentIssueDate;
      if(settings.orientation == 'horizontal') {
        currentPositionIssues = parseInt($(settings.issuesDiv).css('marginLeft').substring(0,$(settings.issuesDiv).css('marginLeft').indexOf('px')),10);
        currentIssueIndex = currentPositionIssues/widthIssue;
        currentPositionDates = parseInt($(settings.datesDiv).css('marginLeft').substring(0,$(settings.datesDiv).css('marginLeft').indexOf('px')),10);
        currentIssueDate = currentPositionDates-widthDate;
        if(currentPositionIssues <= -(widthIssue*howManyIssues-(widthIssue))) {
          $(settings.issuesDiv).stop();
          $(settings.datesDiv+' li:last-child a').click();
        } else {
          if (!$(settings.issuesDiv).is(':animated')) {
            $(settings.issuesDiv).animate({'marginLeft':currentPositionIssues-widthIssue},{queue:false, duration:settings.issuesSpeed});
            $(settings.issuesDiv+' li').animate({'opacity':settings.issuesTransparency},{queue:false, duration:settings.issuesSpeed});
            $(settings.issuesDiv+' li.'+settings.issuesSelectedClass).removeClass(settings.issuesSelectedClass).next().fadeTo(settings.issuesTransparencySpeed, 1).addClass(settings.issuesSelectedClass);
            $(settings.datesDiv).animate({'marginLeft':currentIssueDate},{queue:false, duration:'settings.datesSpeed'});
            $(settings.datesDiv+' a.'+settings.datesSelectedClass).removeClass(settings.datesSelectedClass).parent().next().children().addClass(settings.datesSelectedClass);
          }
        }
      } else if(settings.orientation == 'vertical') {
        currentPositionIssues = parseInt($(settings.issuesDiv).css('marginTop').substring(0,$(settings.issuesDiv).css('marginTop').indexOf('px')),10);
        currentIssueIndex = currentPositionIssues/heightIssue;
        currentPositionDates = parseInt($(settings.datesDiv).css('marginTop').substring(0,$(settings.datesDiv).css('marginTop').indexOf('px')),10);
        currentIssueDate = currentPositionDates-heightDate;
        if(currentPositionIssues <= -(heightIssue*howManyIssues-(heightIssue))) {
          $(settings.issuesDiv).stop();
          $(settings.datesDiv+' li:last-child a').click();
        } else {
          if (!$(settings.issuesDiv).is(':animated')) {
            $(settings.issuesDiv).animate({'marginTop':currentPositionIssues-heightIssue},{queue:false, duration:settings.issuesSpeed});
            $(settings.issuesDiv+' li').animate({'opacity':settings.issuesTransparency},{queue:false, duration:settings.issuesSpeed});
            $(settings.issuesDiv+' li.'+settings.issuesSelectedClass).removeClass(settings.issuesSelectedClass).next().fadeTo(settings.issuesTransparencySpeed, 1).addClass(settings.issuesSelectedClass);
            $(settings.datesDiv).animate({'marginTop':currentIssueDate},{queue:false, duration:'settings.datesSpeed'});
            $(settings.datesDiv+' a.'+settings.datesSelectedClass).removeClass(settings.datesSelectedClass).parent().next().children().addClass(settings.datesSelectedClass);
          }
        }
      }
    });

    $(settings.prevButton).click(function(event){
      event.preventDefault();
      var currentPositionIssues, currentIssueIndex, currentPositionDates, currentIssueDate;
      if(settings.orientation == 'horizontal') {
        currentPositionIssues = parseInt($(settings.issuesDiv).css('marginLeft').substring(0,$(settings.issuesDiv).css('marginLeft').indexOf('px')),10);
        currentIssueIndex = currentPositionIssues/widthIssue;
        currentPositionDates = parseInt($(settings.datesDiv).css('marginLeft').substring(0,$(settings.datesDiv).css('marginLeft').indexOf('px')),10);
        currentIssueDate = currentPositionDates+widthDate;
        if(currentPositionIssues >= 0) {
          $(settings.issuesDiv).stop();
          $(settings.datesDiv+' li:first-child a').click();
        } else {
          if (!$(settings.issuesDiv).is(':animated')) {
            $(settings.issuesDiv).animate({'marginLeft':currentPositionIssues+widthIssue},{queue:false, duration:settings.issuesSpeed});
            $(settings.issuesDiv+' li').animate({'opacity':settings.issuesTransparency},{queue:false, duration:settings.issuesSpeed});
            $(settings.issuesDiv+' li.'+settings.issuesSelectedClass).removeClass(settings.issuesSelectedClass).prev().fadeTo(settings.issuesTransparencySpeed, 1).addClass(settings.issuesSelectedClass);
            $(settings.datesDiv).animate({'marginLeft':currentIssueDate},{queue:false, duration:'settings.datesSpeed'});
            $(settings.datesDiv+' a.'+settings.datesSelectedClass).removeClass(settings.datesSelectedClass).parent().prev().children().addClass(settings.datesSelectedClass);
          }
        }
      } else if(settings.orientation == 'vertical') {
        currentPositionIssues = parseInt($(settings.issuesDiv).css('marginTop').substring(0,$(settings.issuesDiv).css('marginTop').indexOf('px')),10);
        currentIssueIndex = currentPositionIssues/heightIssue;
        currentPositionDates = parseInt($(settings.datesDiv).css('marginTop').substring(0,$(settings.datesDiv).css('marginTop').indexOf('px')),10);
        currentIssueDate = currentPositionDates+heightDate;
        if(currentPositionIssues >= 0) {
          $(settings.issuesDiv).stop();
          $(settings.datesDiv+' li:first-child a').click();
        } else {
          if (!$(settings.issuesDiv).is(':animated')) {
            $(settings.issuesDiv).animate({'marginTop':currentPositionIssues+heightIssue},{queue:false, duration:settings.issuesSpeed});
            $(settings.issuesDiv+' li').animate({'opacity':settings.issuesTransparency},{queue:false, duration:settings.issuesSpeed});
            $(settings.issuesDiv+' li.'+settings.issuesSelectedClass).removeClass(settings.issuesSelectedClass).prev().fadeTo(settings.issuesTransparencySpeed, 1).addClass(settings.issuesSelectedClass);
            $(settings.datesDiv).animate({'marginTop':currentIssueDate},{queue:false, duration:'settings.datesSpeed'},{queue:false, duration:settings.issuesSpeed});
            $(settings.datesDiv+' a.'+settings.datesSelectedClass).removeClass(settings.datesSelectedClass).parent().prev().children().addClass(settings.datesSelectedClass);
          }
        }
      }
    });
    
    // keyboard navigation, added since 0.9.1
    if(settings.arrowKeys=='true') {
      if(settings.orientation=='horizontal') {
        $(document).keydown(function(event){
          if (event.keyCode == 39) {
               $(settings.nextButton).click();
            }
          if (event.keyCode == 37) {
               $(settings.prevButton).click();
            }
        });
      } else if(settings.orientation=='vertical') {
        $(document).keydown(function(event){
          if (event.keyCode == 40) {
               $(settings.nextButton).click();
            }
          if (event.keyCode == 38) {
               $(settings.prevButton).click();
            }
        });
      }
    }
    
    // default position startAt, added since 0.9.3
    $(settings.datesDiv+' li').eq(settings.startAt-1).find('a').trigger('click');
    
  });
};
})(jQuery);