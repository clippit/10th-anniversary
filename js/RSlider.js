
(function ($) {
  var RSlider = function (element, options) {
      var opts = $['extend']({}, $['fn']['RSlider']['defaults'], options);
      var sliders = [];
      var $container = $(element);
      var varibles = {
        timer: '',
        animation: false,
        pause: false,
        current: 0,
        previous: 0,
        direction: 1,
        custom_effect: '',
        total: $('.rs-slide', $container)['size']() - 1
      };

      if (opts['width'] == 'data') {
        opts['width'] = $container['data']('width');
      }
      if (opts['height'] == 'data') {
        opts['height'] = $container['data']('height');
      }
      if (opts['delay'] == 'data') {
        opts['delay'] = $container['data']('delay') * 1000;
      }
      if (opts['easing'] == 'data') {
        opts['easing'] = $container['data']('easing');
      }
      if (opts['duration'] == 'data') {
        opts['duration'] = $container['data']('duration');
      }

      $('.rs-next-click', $container)['each'](function (index) {
        $(this)['click'](function () {
          if (varibles['animation'] === false) {
            _0x3184x1b();
            _0x3184xa('next');
          }
          return false;
        });
      });

      $('.rs-slide', $container)['each'](function (index) {
        sliders[index] = $(this);
        if ($(this)['data']('effect') == 'media') {
          $(this)['css']({
            display: 'block',
            opacity: 0,
            top: -opts['height'] + 'px'
          });
        }
      });

      if (sliders[0] !== undefined) {
        sliders[0]['css']({
          display: 'block',
          opacity: 1,
          top: 0
        });
      } else {
        return false;
      }

      if (varibles['total'] > 0) {
        $('.rs-next', $container)['bind']('click', function () {
          if (varibles['animation'] === false) {
            _0x3184x1b();
            _0x3184xa('next');
          }
          return false;
        });
        $('.rs-prev', $container)['bind']('click', function () {
          if (varibles['animation'] === false) {
            _0x3184x1b();
            _0x3184xa('prev');
          }
          return false;
        });

        for (var index = 1; index < varibles['total'] + 2; index++) {
          $('.rs-nav', $container)['append']('<a href="#"><span class="rs-number">' + index + '</span></a>');
        }
        $('.rs-nav a', $container)['eq'](0)['addClass']('active');
        $('.rs-nav a', $container)['each'](function (index) {
          $(this)['click'](function () {
            if (varibles['animation'] === false && !$(this)['is']('.active')) {
              varibles['previous'] = varibles['current'];
              varibles['current'] = index;
              if (varibles['current'] > varibles['previous']) {
                varibles['direction'] = 1;
              } else {
                varibles['direction'] = 0;
              }
              _0x3184x1b();
              _0x3184xa();
            }
            return false;
          });
        });
      } else {
        $('.rs-nav, .rs-next, .rs-prev', $container)['remove']();
      }

      var _0x3184xa = function (direction) {
          varibles['animation'] = true;
          if (direction == 'next') {
            if (varibles['current'] == varibles['total']) {
              varibles['previous'] = varibles['total'];
              varibles['current'] = 0;
            } else {
              varibles['previous'] = varibles['current'];
              varibles['current']++;
            }
            varibles['direction'] = 1;
          }
          if (direction == 'prev') {
            if (varibles['current'] === 0) {
              varibles['previous'] = 0;
              varibles['current'] = varibles['total'];
            } else {
              varibles['previous'] = varibles['current'];
              varibles['current']--;
            }
            varibles['direction'] = 0;
          }
          $('.rs-nav a', $container)['removeClass']('active');
          $('.rs-nav a', $container)['eq'](varibles['current'])['addClass']('active');
          opts['anim_start'](sliders[varibles['previous']], sliders[varibles['current']], varibles['previous'], varibles['current']);
          varibles['custom_effect'] = sliders[varibles['current']]['data']('effect');
          if (varibles['custom_effect'] === undefined) {
            varibles['custom_effect'] = opts['effect'];
          }
          if (varibles['custom_effect'] == 'random') {
            var _0x3184xc = new Array('fade', 'vertical', 'horizontal', 'fold', 'vertical_slice', 'horizontal_slice', 'vertical_mirror');
            varibles['custom_effect'] = _0x3184xc[Math['floor'](Math['random']() * (_0x3184xc['length'] + 1))];
            if (varibles['custom_effect'] === undefined) {
              varibles['custom_effect'] = 'fade';
            }
          }
          if (varibles['custom_effect'] == 'media') {
            sliders[varibles['current']]['css']({
              zIndex: 2,
              opacity: 0,
              top: 0
            })['animate']({
              opacity: 1
            }, opts['duration'], function () {
              sliders[varibles['current']]['css']('z-index', 1);
              if (sliders[varibles['previous']]['data']('effect') == 'media') {
                sliders[varibles['previous']]['css']({
                  zIndex: 1,
                  opacity: 0,
                  top: -opts['height'] + 'px'
                });
              } else {
                sliders[varibles['previous']]['css']('z-index', 1)['hide']();
              }
              varibles['animation'] = false;
              opts['anim_end']['call'](this);
            });
          }
          if (varibles['custom_effect'] == 'fade') {
            sliders[varibles['current']]['css']({
              zIndex: 2,
              top: 0
            })['fadeIn'](opts['duration'], function () {
              sliders[varibles['current']]['css']('z-index', 1);
              if (sliders[varibles['previous']]['data']('effect') == 'media') {
                sliders[varibles['previous']]['css']({
                  zIndex: 1,
                  opacity: 0,
                  top: -opts['height'] + 'px'
                });
              } else {
                sliders[varibles['previous']]['css']('z-index', 1)['hide']();
              }
              varibles['animation'] = false;
              opts['anim_end']['call'](this);
            });
          }
          if (varibles['custom_effect'] == 'vertical_mirror') {
            var imgSrc = sliders[varibles['current']]['find']('img')['attr']('src');
            var _0x3184xe = Math['round'](opts['width'] / 2);
            var _0x3184xf = {};
            var _0x3184x10 = {};
            sliders[varibles['current']]['find']('.rs-image')['before']('<div class="rs-slices" style="position:absolute;z-index:3;width:100%;height:100%;"></div>');
            sliders[varibles['current']]['find']('.rs-image')['hide']();
            sliders[varibles['current']]['find']('.rs-caption')['hide']();
            sliders[varibles['current']]['css']({
              zIndex: 2,
              top: 0
            })['show']();
            var _0x3184x11 = '<img src="' + imgSrc + '" style="position:absolute;right:-' + opts['width'] + 'px;top:0"/>';
            var _0x3184x12 = '<img src="' + imgSrc + '" style="position:absolute;left:-' + opts['width'] + 'px;top:0"/>';
            _0x3184xf['right'] = -_0x3184xe + 'px';
            _0x3184x10['left'] = -_0x3184xe + 'px';
            sliders[varibles['current']]['find']('.rs-slices')['append']('<div class="rs-slice" style="overflow:hidden;position:relative;float:left;width:' + _0x3184xe + 'px;height:' + opts['height'] + 'px">' + _0x3184x11 + '</div>');
            sliders[varibles['current']]['find']('.rs-slices')['append']('<div class="rs-slice" style="overflow:hidden;position:relative;float:left;width:' + _0x3184xe + 'px;height:' + opts['height'] + 'px">' + _0x3184x12 + '</div>');
            sliders[varibles['current']]['find']('.rs-slice:eq(0) img')['animate'](_0x3184xf, opts['duration'], opts['easing']);
            sliders[varibles['current']]['find']('.rs-slice:eq(1) img')['animate'](_0x3184x10, opts['duration'], opts['easing'], function () {
              if ($('.rs-caption', sliders[varibles['current']])['length']) {
                sliders[varibles['current']]['find']('.rs-caption')['fadeIn'](400, function () {
                  _0x3184x13('vertical_mirror');
                });
              } else {
                _0x3184x13('vertical_mirror');
              }
              sliders[varibles['current']]['find']('.rs-caption')['fadeIn'](400, function () {});
            });
          }
          if (varibles['custom_effect'] == 'vertical_slice') {
            sliders[varibles['current']]['find']('.rs-image')['hide']();
            sliders[varibles['current']]['find']('.rs-caption')['hide']();
            sliders[varibles['current']]['css']({
              zIndex: 2,
              top: 0
            })['show']();
            _0x3184x15('vertical');
          }
          if (varibles['custom_effect'] == 'horizontal_slice') {
            sliders[varibles['current']]['find']('.rs-image')['hide']();
            sliders[varibles['current']]['find']('.rs-caption')['hide']();
            sliders[varibles['current']]['css']({
              zIndex: 2,
              top: 0
            })['show']();
            _0x3184x15('horizontal');
          }
          if (varibles['custom_effect'] == 'vertical') {
            if (varibles['direction'] == 1) {
              sliders[varibles['current']]['css']({
                display: 'block',
                top: opts['height'] + 'px'
              })['animate']({
                top: 0
              }, opts['duration'], opts['easing']);
              sliders[varibles['previous']]['animate']({
                top: -opts['height'] + 'px'
              }, opts['duration'], opts['easing'], function () {
                if (sliders[varibles['previous']]['data']('effect') == 'media') {
                  sliders[varibles['previous']]['css']({
                    zIndex: 1,
                    opacity: 0,
                    top: -opts['height'] + 'px'
                  });
                } else {
                  sliders[varibles['previous']]['css']({
                    display: 'none',
                    top: 0,
                    zIndex: 1
                  });
                }
                varibles['animation'] = false;
                opts['anim_end']['call'](this);
              });
            } else {
              sliders[varibles['current']]['css']({
                display: 'block',
                top: -opts['height'] + 'px'
              })['animate']({
                top: 0
              }, opts['duration'], opts['easing']);
              sliders[varibles['previous']]['animate']({
                top: opts['height'] + 'px'
              }, opts['duration'], opts['easing'], function () {
                if (sliders[varibles['previous']]['data']('effect') == 'media') {
                  sliders[varibles['previous']]['css']({
                    zIndex: 1,
                    opacity: 0,
                    top: -opts['height'] + 'px'
                  });
                } else {
                  sliders[varibles['previous']]['css']({
                    display: 'none',
                    top: 0,
                    zIndex: 1
                  });
                }
                varibles['animation'] = false;
                opts['anim_end']['call'](this);
              });
            }
          }
          if (varibles['custom_effect'] == 'horizontal') {
            if (varibles['direction'] == 1) {
              sliders[varibles['current']]['css']({
                display: 'block',
                left: opts['width'] + 'px',
                top: 0
              })['animate']({
                left: 0
              }, opts['duration'], opts['easing']);
              sliders[varibles['previous']]['animate']({
                left: -opts['width'] + 'px'
              }, opts['duration'], opts['easing'], function () {
                if (sliders[varibles['previous']]['data']('effect') == 'media') {
                  sliders[varibles['previous']]['css']({
                    zIndex: 1,
                    left: 0,
                    opacity: 0,
                    top: -opts['height'] + 'px'
                  });
                } else {
                  sliders[varibles['previous']]['css']({
                    display: 'none',
                    left: 0,
                    zIndex: 1
                  });
                }
                varibles['animation'] = false;
                opts['anim_end']['call'](this);
              });
            } else {
              sliders[varibles['current']]['css']({
                display: 'block',
                left: -opts['width'] + 'px',
                top: 0
              })['animate']({
                left: 0
              }, opts['duration'], opts['easing']);
              sliders[varibles['previous']]['animate']({
                left: opts['width'] + 'px'
              }, opts['duration'], opts['easing'], function () {
                if (sliders[varibles['previous']]['data']('effect') == 'media') {
                  sliders[varibles['previous']]['css']({
                    zIndex: 1,
                    left: 0,
                    opacity: 0,
                    top: -opts['height'] + 'px'
                  });
                } else {
                  sliders[varibles['previous']]['css']({
                    display: 'none',
                    left: 0,
                    zIndex: 1
                  });
                }
                varibles['animation'] = false;
                opts['anim_end']['call'](this);
              });
            }
          }
          if (varibles['custom_effect'] == 'fold') {
            if (varibles['direction'] == 1) {
              sliders[varibles['current']]['css']({
                zIndex: 1,
                display: 'block',
                top: 0
              });
              sliders[varibles['previous']]['css']('z-index', 2)['animate']({
                left: opts['width'] + 'px'
              }, opts['duration'], opts['easing'], function () {
                if (sliders[varibles['previous']]['data']('effect') == 'media') {
                  sliders[varibles['previous']]['css']({
                    zIndex: 1,
                    left: 0,
                    opacity: 0,
                    top: -opts['height'] + 'px'
                  });
                } else {
                  sliders[varibles['previous']]['css']({
                    display: 'none',
                    left: 0,
                    zIndex: 1
                  });
                }
                varibles['animation'] = false;
                opts['anim_end']['call'](this);
              });
            } else {
              sliders[varibles['current']]['css']({
                zIndex: 1,
                display: 'block',
                top: 0
              });
              sliders[varibles['previous']]['css']('z-index', 2)['animate']({
                left: -opts['width'] + 'px'
              }, opts['duration'], opts['easing'], function () {
                if (sliders[varibles['previous']]['data']('effect') == 'media') {
                  sliders[varibles['previous']]['css']({
                    zIndex: 1,
                    left: 0,
                    opacity: 0,
                    top: -opts['height'] + 'px'
                  });
                } else {
                  sliders[varibles['previous']]['css']({
                    display: 'none',
                    left: 0,
                    zIndex: 1
                  });
                }
                varibles['animation'] = false;
                opts['anim_end']['call'](this);
              });
            }
          }
        };

      var _0x3184x13 = function (effect) {
          if (effect == 'vertical_slice' || effect == 'horizontal_slice' || effect == 'vertical_mirror') {
            sliders[varibles['current']]['css']('z-index', 1);
            sliders[varibles['current']]['find']('.rs-image')['show']();
            sliders[varibles['current']]['find']('.rs-slices')['remove']();
            if (sliders[varibles['previous']]['data']('effect') == 'media') {
              sliders[varibles['previous']]['css']({
                zIndex: 1,
                opacity: 0,
                top: -opts['height'] + 'px'
              });
            } else {
              sliders[varibles['previous']]['css']('z-index', 1)['hide']();
            }
            varibles['animation'] = false;
            opts['anim_end']['call'](this);
          }
        };
        
      var _0x3184x15 = function (_0x3184x16) {
          var imgSrc = sliders[varibles['current']]['find']('img')['attr']('src');
          var _0x3184xe = opts['width'] / opts['slices'];
          var _0x3184x17 = opts['height'] / opts['slices'];
          var _0x3184x18 = 0;
          sliders[varibles['current']]['find']('.rs-image')['before']('<div class="rs-slices" style="position:absolute;z-index:3;width:100%;height:100%;"></div>');
          for (var index = 0; index < opts['slices']; index++) {
            var _0x3184x19 = {},
                _0x3184x1a;
            if (_0x3184x16 == 'vertical') {
              if (varibles['direction'] == 1) {
                _0x3184x1a = '<img src="' + imgSrc + '" style="position:absolute;left:-' + opts['width'] + 'px;top:0"/>';
                _0x3184x19['left'] = -(index * _0x3184xe);
              } else {
                _0x3184x1a = '<img src="' + imgSrc + '" style="position:absolute;right:-' + opts['width'] + 'px;top:0"/>';
                _0x3184x19['right'] = -((opts['slices'] - 1 - index) * _0x3184xe);
              }
              sliders[varibles['current']]['find']('.rs-slices')['append']('<div class="rs-slice" style="overflow:hidden;position:relative;float:left;width:' + _0x3184xe + 'px;height:' + opts['height'] + 'px">' + _0x3184x1a + '</div>');
            } else {
              if (varibles['direction'] == 1) {
                _0x3184x1a = '<img src="' + imgSrc + '" style="position:absolute;top:-' + opts['height'] + 'px;left:0"/>';
                _0x3184x19['top'] = -(index * _0x3184x17);
              } else {
                _0x3184x1a = '<img src="' + imgSrc + '" style="position:absolute;bottom:-' + opts['height'] + 'px;left:0"/>';
                _0x3184x19['bottom'] = -((opts['slices'] - 1 - index) * _0x3184x17);
              }
              sliders[varibles['current']]['find']('.rs-slices')['append']('<div class="rs-slice" style="overflow:hidden;position:relative;display:block;width:' + opts['width'] + 'px;height:' + _0x3184x17 + 'px">' + _0x3184x1a + '</div>');
            }
            if (index == opts['slices'] - 1) {
              sliders[varibles['current']]['find']('.rs-slice:eq(' + index + ') img')['animate'](_0x3184x19, (300 + opts['duration']), function () {
                if ($('.rs-caption', sliders[varibles['current']])['length']) {
                  sliders[varibles['current']]['find']('.rs-caption')['fadeIn'](400, function () {
                    _0x3184x13('vertical_slice');
                  });
                } else {
                  _0x3184x13('vertical_slice');
                }
              });
            } else {
              sliders[varibles['current']]['find']('.rs-slice:eq(' + index + ') img')['animate'](_0x3184x19, (opts['duration'] + _0x3184x18));
            }
            _0x3184x18 = +200;
          }
        };
      if (opts['pause_on_hover']) {
        $('.rs-content', $container)['bind']({
          mouseenter: function () {
            _0x3184x1c();
          },
          mouseleave: function () {
            _0x3184x1b();
          }
        });
      }
      var _0x3184x1b = function () {
          if (opts['delay'] > 0 && varibles['total'] > 0 && varibles['pause'] === false) {
            clearInterval(varibles['timer']);
            varibles['timer'] = setInterval(function () {
              _0x3184xa('next');
            }, opts['delay']);
          }
        };
      var _0x3184x1c = function () {
          clearInterval(varibles['timer']);
        };
      if (opts['delay'] > 0 && varibles['total'] > 0) {
        $('.rs-timer', $container)['addClass']('rs-pause');
      } else {
        $('.rs-timer', $container)['remove']();
      }
      $('.rs-timer', $container)['toggle'](function () {
        varibles['pause'] = true;
        _0x3184x1c();
        $(this)['removeClass']('rs-pause')['addClass']('rs-play');
        return false;
      }, function () {
        varibles['pause'] = false;
        _0x3184x1b();
        $(this)['removeClass']('rs-play')['addClass']('rs-pause');
        return false;
      });
      _0x3184x1b();
      opts['after_load']['call'](this);
    };
  $['fn']['RSlider'] = function (options) {
    return this['each'](function () {
      var theSlider = new RSlider(this, options);
    });
  };
  $['fn']['RSlider']['defaults'] = {
    delay: 5000,
    duration: 1000,
    height: 480,
    width: 960,
    slices: 3,
    easing: 'swing',
    effect: 'fade',
    pause_on_hover: true,
    after_load: function () {},
    anim_start: function (_0x3184x1e, _0x3184x1f, _0x3184x20, _0x3184x21) {},
    anim_end: function () {}
  };
})(jQuery);