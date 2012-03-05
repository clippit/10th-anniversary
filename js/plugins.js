// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Copyright (c) 2008 George McGinley Smith and (c) 2001 Robert Penner
 * Open source under the BSD License. (http://www.opensource.org/licenses/bsd-license.php)
*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});



/**
 * jQuery.LocalScroll - Animated scrolling navigation, using anchors.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 3/11/2009
 * @author Ariel Flesler
 * @version 1.2.7
 **/


;(function($){var l=location.href.replace(/#.*/,'');var g=$.localScroll=function(a){$('body').localScroll(a)};g.defaults={duration:1e3,axis:'y',event:'click',stop:true,target:window,reset:true};g.hash=function(a){if(location.hash){a=$.extend({},g.defaults,a);a.hash=false;if(a.reset){var e=a.duration;delete a.duration;$(a.target).scrollTo(0,a);a.duration=e}i(0,location,a)}};$.fn.localScroll=function(b){b=$.extend({},g.defaults,b);return b.lazy?this.bind(b.event,function(a){var e=$([a.target,a.target.parentNode]).filter(d)[0];if(e)i(a,e,b)}):this.find('a,area').filter(d).bind(b.event,function(a){i(a,this,b)}).end().end();function d(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==l&&(!b.filter||$(this).is(b.filter))}};function i(a,e,b){var d=e.hash.slice(1),f=document.getElementById(d)||document.getElementsByName(d)[0];if(!f)return;if(a)a.preventDefault();var h=$(b.target);if(b.lock&&h.is(':animated')||b.onBefore&&b.onBefore.call(b,a,f,h)===false)return;if(b.stop)h.stop(true);if(b.hash){var j=f.id==d?'id':'name',k=$('<a> </a>').attr(j,d).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});f[j]='';$('body').prepend(k);location=e.hash;k.remove();f[j]=d}h.scrollTo(f,b).trigger('notify.serialScroll',[f])}})(jQuery);


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
 *  Slider
 */

(function(d){var q=function(m,q){var b=d.extend({},d.fn.RSlider.defaults,q),c=[],e=d(m),a={timer:"",animation:!1,pause:!1,current:0,previous:0,direction:1,custom_effect:"",total:d(".rs-slide",e).size()-1};"data"==b.width&&(b.width=e.data("width"));"data"==b.height&&(b.height=e.data("height"));"data"==b.delay&&(b.delay=1E3*e.data("delay"));"data"==b.easing&&(b.easing=e.data("easing"));"data"==b.duration&&(b.duration=e.data("duration"));d(".rs-next-click",e).each(function(){d(this).click(function(){!1===
a.animation&&(f(),g("next"));return!1})});d(".rs-slide",e).each(function(a){c[a]=d(this);"media"==d(this).data("effect")&&d(this).css({display:"block",opacity:0,top:-b.height+"px"})});if(void 0!==c[0])c[0].css({display:"block",opacity:1,top:0});else return!1;if(0<a.total){d(".rs-next",e).bind("click",function(){!1===a.animation&&(f(),g("next"));return!1});d(".rs-prev",e).bind("click",function(){!1===a.animation&&(f(),g("prev"));return!1});for(var p=1;p<a.total+2;p++)d(".rs-nav",e).append('<a href="#"><span class="rs-number">'+
p+"</span></a>");d(".rs-nav a",e).eq(0).addClass("active");d(".rs-nav a",e).each(function(b){d(this).click(function(){!1===a.animation&&!d(this).is(".active")&&(a.previous=a.current,a.current=b,a.direction=a.current>a.previous?1:0,f(),g());return!1})})}else d(".rs-nav, .rs-next, .rs-prev",e).remove();var g=function(h){a.animation=!0;"next"==h&&(a.current==a.total?(a.previous=a.total,a.current=0):(a.previous=a.current,a.current++),a.direction=1);"prev"==h&&(0===a.current?(a.previous=0,a.current=a.total):
(a.previous=a.current,a.current--),a.direction=0);d(".rs-nav a",e).removeClass("active");d(".rs-nav a",e).eq(a.current).addClass("active");b.anim_start(c[a.previous],c[a.current],a.previous,a.current);a.custom_effect=c[a.current].data("effect");void 0===a.custom_effect&&(a.custom_effect=b.effect);"random"==a.custom_effect&&(h="fade,vertical,horizontal,fold,vertical_slice,horizontal_slice,vertical_mirror".split(","),a.custom_effect=h[Math.floor(Math.random()*(h.length+1))],void 0===a.custom_effect&&
(a.custom_effect="fade"));"media"==a.custom_effect&&c[a.current].css({zIndex:2,opacity:0,top:0}).animate({opacity:1},b.duration,function(){c[a.current].css("z-index",1);"media"==c[a.previous].data("effect")?c[a.previous].css({zIndex:1,opacity:0,top:-b.height+"px"}):c[a.previous].css("z-index",1).hide();a.animation=!1;b.anim_end.call(this)});"fade"==a.custom_effect&&c[a.current].css({zIndex:2,top:0}).fadeIn(b.duration,function(){c[a.current].css("z-index",1);"media"==c[a.previous].data("effect")?c[a.previous].css({zIndex:1,
opacity:0,top:-b.height+"px"}):c[a.previous].css("z-index",1).hide();a.animation=!1;b.anim_end.call(this)});if("vertical_mirror"==a.custom_effect){var n=c[a.current].find("img").attr("src"),h=Math.round(b.width/2),f={},j={};c[a.current].find(".rs-image").before('<div class="rs-slices" style="position:absolute;z-index:3;width:100%;height:100%;"></div>');c[a.current].find(".rs-image").hide();c[a.current].find(".rs-caption").hide();c[a.current].css({zIndex:2,top:0}).show();var g='<img src="'+n+'" style="position:absolute;right:-'+
b.width+'px;top:0"/>',n='<img src="'+n+'" style="position:absolute;left:-'+b.width+'px;top:0"/>';f.right=-h+"px";j.left=-h+"px";c[a.current].find(".rs-slices").append('<div class="rs-slice" style="overflow:hidden;position:relative;float:left;width:'+h+"px;height:"+b.height+'px">'+g+"</div>");c[a.current].find(".rs-slices").append('<div class="rs-slice" style="overflow:hidden;position:relative;float:left;width:'+h+"px;height:"+b.height+'px">'+n+"</div>");c[a.current].find(".rs-slice:eq(0) img").animate(f,
b.duration,b.easing);c[a.current].find(".rs-slice:eq(1) img").animate(j,b.duration,b.easing,function(){d(".rs-caption",c[a.current]).length?c[a.current].find(".rs-caption").fadeIn(400,function(){o("vertical_mirror")}):o("vertical_mirror");c[a.current].find(".rs-caption").fadeIn(400,function(){})})}"vertical_slice"==a.custom_effect&&(c[a.current].find(".rs-image").hide(),c[a.current].find(".rs-caption").hide(),c[a.current].css({zIndex:2,top:0}).show(),r("vertical"));"horizontal_slice"==a.custom_effect&&
(c[a.current].find(".rs-image").hide(),c[a.current].find(".rs-caption").hide(),c[a.current].css({zIndex:2,top:0}).show(),r("horizontal"));"vertical"==a.custom_effect&&(1==a.direction?(c[a.current].css({display:"block",top:b.height+"px"}).animate({top:0},b.duration,b.easing),c[a.previous].animate({top:-b.height+"px"},b.duration,b.easing,function(){"media"==c[a.previous].data("effect")?c[a.previous].css({zIndex:1,opacity:0,top:-b.height+"px"}):c[a.previous].css({display:"none",top:0,zIndex:1});a.animation=
!1;b.anim_end.call(this)})):(c[a.current].css({display:"block",top:-b.height+"px"}).animate({top:0},b.duration,b.easing),c[a.previous].animate({top:b.height+"px"},b.duration,b.easing,function(){"media"==c[a.previous].data("effect")?c[a.previous].css({zIndex:1,opacity:0,top:-b.height+"px"}):c[a.previous].css({display:"none",top:0,zIndex:1});a.animation=!1;b.anim_end.call(this)})));"horizontal"==a.custom_effect&&(1==a.direction?(c[a.current].css({display:"block",left:b.width+"px",top:0}).animate({left:0},
b.duration,b.easing),c[a.previous].animate({left:-b.width+"px"},b.duration,b.easing,function(){"media"==c[a.previous].data("effect")?c[a.previous].css({zIndex:1,left:0,opacity:0,top:-b.height+"px"}):c[a.previous].css({display:"none",left:0,zIndex:1});a.animation=!1;b.anim_end.call(this)})):(c[a.current].css({display:"block",left:-b.width+"px",top:0}).animate({left:0},b.duration,b.easing),c[a.previous].animate({left:b.width+"px"},b.duration,b.easing,function(){"media"==c[a.previous].data("effect")?
c[a.previous].css({zIndex:1,left:0,opacity:0,top:-b.height+"px"}):c[a.previous].css({display:"none",left:0,zIndex:1});a.animation=!1;b.anim_end.call(this)})));"fold"==a.custom_effect&&(1==a.direction?(c[a.current].css({zIndex:1,display:"block",top:0}),c[a.previous].css("z-index",2).animate({left:b.width+"px"},b.duration,b.easing,function(){"media"==c[a.previous].data("effect")?c[a.previous].css({zIndex:1,left:0,opacity:0,top:-b.height+"px"}):c[a.previous].css({display:"none",left:0,zIndex:1});a.animation=
!1;b.anim_end.call(this)})):(c[a.current].css({zIndex:1,display:"block",top:0}),c[a.previous].css("z-index",2).animate({left:-b.width+"px"},b.duration,b.easing,function(){"media"==c[a.previous].data("effect")?c[a.previous].css({zIndex:1,left:0,opacity:0,top:-b.height+"px"}):c[a.previous].css({display:"none",left:0,zIndex:1});a.animation=!1;b.anim_end.call(this)})))},o=function(d){if("vertical_slice"==d||"horizontal_slice"==d||"vertical_mirror"==d)c[a.current].css("z-index",1),c[a.current].find(".rs-image").show(),
c[a.current].find(".rs-slices").remove(),"media"==c[a.previous].data("effect")?c[a.previous].css({zIndex:1,opacity:0,top:-b.height+"px"}):c[a.previous].css("z-index",1).hide(),a.animation=!1,b.anim_end.call(this)},r=function(e){var f=c[a.current].find("img").attr("src"),g=b.width/b.slices,j=b.height/b.slices,m=0;c[a.current].find(".rs-image").before('<div class="rs-slices" style="position:absolute;z-index:3;width:100%;height:100%;"></div>');for(var i=0;i<b.slices;i++){var k={},l;"vertical"==e?(1==
a.direction?(l='<img src="'+f+'" style="position:absolute;left:-'+b.width+'px;top:0"/>',k.left=-(i*g)):(l='<img src="'+f+'" style="position:absolute;right:-'+b.width+'px;top:0"/>',k.right=-((b.slices-1-i)*g)),c[a.current].find(".rs-slices").append('<div class="rs-slice" style="overflow:hidden;position:relative;float:left;width:'+g+"px;height:"+b.height+'px">'+l+"</div>")):(1==a.direction?(l='<img src="'+f+'" style="position:absolute;top:-'+b.height+'px;left:0"/>',k.top=-(i*j)):(l='<img src="'+f+'" style="position:absolute;bottom:-'+
b.height+'px;left:0"/>',k.bottom=-((b.slices-1-i)*j)),c[a.current].find(".rs-slices").append('<div class="rs-slice" style="overflow:hidden;position:relative;display:block;width:'+b.width+"px;height:"+j+'px">'+l+"</div>"));i==b.slices-1?c[a.current].find(".rs-slice:eq("+i+") img").animate(k,300+b.duration,function(){d(".rs-caption",c[a.current]).length?c[a.current].find(".rs-caption").fadeIn(400,function(){o("vertical_slice")}):o("vertical_slice")}):c[a.current].find(".rs-slice:eq("+i+") img").animate(k,
b.duration+m);m=200}};b.pause_on_hover&&d(".rs-content",e).bind({mouseenter:function(){clearInterval(a.timer)},mouseleave:function(){f()}});var f=function(){0<b.delay&&0<a.total&&!1===a.pause&&(clearInterval(a.timer),a.timer=setInterval(function(){g("next")},b.delay))};0<b.delay&&0<a.total?d(".rs-timer",e).addClass("rs-pause"):d(".rs-timer",e).remove();d(".rs-timer",e).toggle(function(){a.pause=!0;clearInterval(a.timer);d(this).removeClass("rs-pause").addClass("rs-play");return!1},function(){a.pause=
!1;f();d(this).removeClass("rs-play").addClass("rs-pause");return!1});f();b.after_load.call(this)};d.fn.RSlider=function(d){return this.each(function(){new q(this,d)})};d.fn.RSlider.defaults={delay:5E3,duration:1E3,height:480,width:960,slices:3,easing:"swing",effect:"fade",pause_on_hover:!0,after_load:function(){},anim_start:function(){},anim_end:function(){}}})(jQuery);



/*
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 0.7  * modified by clippit *
 */
(function(e){e.fn.onePageNav=function(i){var g=e.extend({},e.fn.onePageNav.defaults,i),d={sections:{}};d.bindNav=function(b,c,a){var f=b.parent(),g=b.attr("href"),h=e(window);f.hasClass(a.currentClass)||(a.begin&&a.begin(),d.adjustNav(c,f,a.currentClass),h.unbind(".onePageNav"),e.scrollTo(g,a.scrollSpeed,{easing:a.easing,offset:{top:-a.scrollOffset},onAfter:function(){a.changeHash&&(window.location.hash=g);h.bind("scroll.onePageNav",function(){d.scrollChange(c,a)});a.end&&a.end()}}))};d.adjustNav=
function(b,c,a){b=b.find("."+a);return b.find("a").attr("href")!=c.find("a").attr("href")?(b.removeClass(a),c.addClass(a),!0):!1};d.getPositions=function(b,c){b.find("a").each(function(){var a=e(this).attr("href"),b=e(a).offset().top;d.sections[a.substr(1)]=Math.round(b)-c.scrollOffset})};d.getSection=function(b){var c="",a=Math.round(e(window).height()/2),f;for(f in d.sections)d.sections[f]-a<b&&(c=f);return c};d.scrollChange=function(b,c){d.getPositions(b,c);var a=e(window).scrollTop(),a=d.getSection(a);
""!==a&&d.adjustNav(b,b.find("a[href=#"+a+"]").parent(),c.currentClass)&&c.end&&c.end()};d.init=function(b,c){var a=!1;b.find("a").bind("click",function(a){d.bindNav(e(this),b,c);a.preventDefault()});d.getPositions(b,c);e(window).bind("scroll.onePageNav",function(){a=!0});setInterval(function(){a&&(a=!1,d.scrollChange(b,c))},250)};return this.each(function(){var b=e(this),c=e.meta?e.extend({},g,b.data()):g;d.init(b,c)})};e.fn.onePageNav.defaults={currentClass:"current",changeHash:!1,scrollSpeed:750,
scrollOffset:0,easing:"easeInOutCirc",begin:!1,end:!1}})(jQuery);



(function ($) {

  /*
   *  R-Accordion
   *  Copyright (c) 2011 Rascals Labs
   *  http://www.rascals.eu
   *  rascals@rascals.eu
   *  ver 1.0
   */

  jQuery.fn.RAccordion = function(options) {
    
    return this.each(function() {
      var opts = jQuery.extend({
        'element' : 'li'
      }, options);
           
      /* List variables */
      var accordion = $(this);

      /* Show active element */
      $('.active .hidden-content', accordion).show();
      
      /* Click on accordion list item */
      $(opts.element, this).click(function () {
        if (!$(this).is('.active')) {
          
          /* Hide all active items */
          $('.active', accordion).removeClass('active').find('.hidden-content').slideUp(400);
          
          /* Add active class to this item */
          $(this).addClass('active');
          $('.hidden-content', this).slideDown(400);
        }
        return false;
      });
      
    });
  };

})(jQuery);

(function ($) {

  /*
   *  R-Toggle
   *  Copyright (c) 2011 Rascals Labs
   *  http://www.rascals.eu
   *  rascals@rascals.eu
   *  ver 1.0
   */

  jQuery.fn.RToggle = function(options) {
    
    return this.each(function() {
      var opts = jQuery.extend({
        'toggle_switch' : 'li'
      }, options);
           
      /* List variables */
      var toggle = $(this);

      /* Show active element */
      if (toggle.is('.active')) {
        $(opts.toggle_switch, toggle).addClass('active');
        $('.hidden-content', toggle).show();
      }
  
      /* Click on toggle list item*/
      $(opts.toggle_switch, toggle).click(function () {
        if ($(this).is('.active')) {
          $(this).removeClass('active');
          $('.hidden-content', toggle).slideUp(400);
        } else {
          $(this).addClass('active');
          $('.hidden-content', toggle).slideDown(400);
        }
        return false;
      });
      
    });
  };

})(jQuery);