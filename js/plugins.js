// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.

/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);


/*
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 0.7
 */
(function(e){e.fn.onePageNav=function(j){var g=e.extend({},e.fn.onePageNav.defaults,j),c={};c.sections={};c.bindNav=function(b,d,a){var f=b.parent(),h=b.attr("href"),i=e(window);if(!f.hasClass(a.currentClass)){a.begin&&a.begin();c.adjustNav(d,f,a.currentClass);i.unbind(".onePageNav");e.scrollTo(h,a.scrollSpeed,{offset:{top:-a.scrollOffset},onAfter:function(){if(a.changeHash)window.location.hash=h;i.bind("scroll.onePageNav",function(){c.scrollChange(d,a)});a.end&&a.end()}})}};c.adjustNav=function(b,
d,a){b.find("."+a).removeClass(a);d.addClass(a)};c.getPositions=function(b,d){b.find("a").each(function(){var a=e(this).attr("href"),f=e(a).offset();f=f.top;c.sections[a.substr(1)]=Math.round(f)-d.scrollOffset})};c.getSection=function(b){var d="",a=Math.round(e(window).height()/2);for(var f in c.sections)if(c.sections[f]-a<b)d=f;return d};c.scrollChange=function(b,d){c.getPositions(b,d);var a=e(window).scrollTop();a=c.getSection(a);a!==""&&c.adjustNav(b,b.find("a[href=#"+a+"]").parent(),d.currentClass)};
c.init=function(b,d){var a=false;b.find("a").bind("click",function(f){c.bindNav(e(this),b,d);f.preventDefault()});c.getPositions(b,d);e(window).bind("scroll.onePageNav",function(){a=true});setInterval(function(){if(a){a=false;c.scrollChange(b,d)}},250)};return this.each(function(){var b=e(this),d=e.meta?e.extend({},g,b.data()):g;c.init(b,d)})};e.fn.onePageNav.defaults={currentClass:"current",changeHash:false,scrollSpeed:750,scrollOffset:0,begin:false,end:false}})(jQuery);