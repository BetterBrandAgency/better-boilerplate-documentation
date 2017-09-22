"use strict";

(function (d) {
	var config = {
		kitId: 'qsi0rtb',
		scriptTimeout: 3000,
		async: true
	},
	    h = d.documentElement,
	    t = setTimeout(function () {
		h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
	}, config.scriptTimeout),
	    tk = d.createElement("script"),
	    f = false,
	    s = d.getElementsByTagName("script")[0],
	    a;h.className += " wf-loading";tk.src = 'https://use.typekit.net/' + config.kitId + '.js';tk.async = true;tk.onload = tk.onreadystatechange = function () {
		a = this.readyState;if (f || a && a != "complete" && a != "loaded") return;f = true;clearTimeout(t);try {
			Typekit.load(config);
		} catch (e) {}
	};s.parentNode.insertBefore(tk, s);
})(document);
'use strict';

//
// Breakpoint Identifier
//

function updateIdenfifier() {
	var window_width = window.innerWidth;
	var window_height = window.innerHeight;
	var identifier = document.getElementsByClassName('breakpoint-identifier')[0];

	identifier.setAttribute('data-width', window_width);
	identifier.setAttribute('data-height', window_height);
}

window.onload = function () {
	updateIdenfifier();
};

window.onresize = function () {
	updateIdenfifier();
};
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Featherlight - ultra slim jQuery lightbox
 * Version 1.7.8 - http://noelboss.github.io/featherlight/
 *
 * Copyright 2017, Noël Raoul Bossart (http://www.noelboss.com)
 * MIT Licensed.
**/
!function (a) {
  "use strict";
  function b(a, c) {
    if (!(this instanceof b)) {
      var d = new b(a, c);return d.open(), d;
    }this.id = b.id++, this.setup(a, c), this.chainCallbacks(b._callbackChain);
  }function c(a, b) {
    var c = {};for (var d in a) {
      d in b && (c[d] = a[d], delete a[d]);
    }return c;
  }function d(a, b) {
    var c = {},
        d = new RegExp("^" + b + "([A-Z])(.*)");for (var e in a) {
      var f = e.match(d);if (f) {
        var g = (f[1] + f[2].replace(/([A-Z])/g, "-$1")).toLowerCase();c[g] = a[e];
      }
    }return c;
  }if ("undefined" == typeof a) return void ("console" in window && window.console.info("Too much lightness, Featherlight needs jQuery."));var e = [],
      f = function f(b) {
    return e = a.grep(e, function (a) {
      return a !== b && a.$instance.closest("body").length > 0;
    });
  },
      g = { allowfullscreen: 1, frameborder: 1, height: 1, longdesc: 1, marginheight: 1, marginwidth: 1, name: 1, referrerpolicy: 1, scrolling: 1, sandbox: 1, src: 1, srcdoc: 1, width: 1 },
      h = { keyup: "onKeyUp", resize: "onResize" },
      i = function i(c) {
    a.each(b.opened().reverse(), function () {
      return c.isDefaultPrevented() || !1 !== this[h[c.type]](c) ? void 0 : (c.preventDefault(), c.stopPropagation(), !1);
    });
  },
      j = function j(c) {
    if (c !== b._globalHandlerInstalled) {
      b._globalHandlerInstalled = c;var d = a.map(h, function (a, c) {
        return c + "." + b.prototype.namespace;
      }).join(" ");a(window)[c ? "on" : "off"](d, i);
    }
  };b.prototype = { constructor: b, namespace: "featherlight", targetAttr: "data-featherlight", variant: null, resetCss: !1, background: null, openTrigger: "click", closeTrigger: "click", filter: null, root: "body", openSpeed: 250, closeSpeed: 250, closeOnClick: "background", closeOnEsc: !0, closeIcon: "&#10005;", loading: "", persist: !1, otherClose: null, beforeOpen: a.noop, beforeContent: a.noop, beforeClose: a.noop, afterOpen: a.noop, afterContent: a.noop, afterClose: a.noop, onKeyUp: a.noop, onResize: a.noop, type: null, contentFilters: ["jquery", "image", "html", "ajax", "iframe", "text"], setup: function setup(b, c) {
      "object" != (typeof b === "undefined" ? "undefined" : _typeof(b)) || b instanceof a != !1 || c || (c = b, b = void 0);var d = a.extend(this, c, { target: b }),
          e = d.resetCss ? d.namespace + "-reset" : d.namespace,
          f = a(d.background || ['<div class="' + e + "-loading " + e + '">', '<div class="' + e + '-content">', '<button class="' + e + "-close-icon " + d.namespace + '-close" aria-label="Close">', d.closeIcon, "</button>", '<div class="' + d.namespace + '-inner">' + d.loading + "</div>", "</div>", "</div>"].join("")),
          g = "." + d.namespace + "-close" + (d.otherClose ? "," + d.otherClose : "");return d.$instance = f.clone().addClass(d.variant), d.$instance.on(d.closeTrigger + "." + d.namespace, function (b) {
        var c = a(b.target);("background" === d.closeOnClick && c.is("." + d.namespace) || "anywhere" === d.closeOnClick || c.closest(g).length) && (d.close(b), b.preventDefault());
      }), this;
    }, getContent: function getContent() {
      if (this.persist !== !1 && this.$content) return this.$content;var b = this,
          c = this.constructor.contentFilters,
          d = function d(a) {
        return b.$currentTarget && b.$currentTarget.attr(a);
      },
          e = d(b.targetAttr),
          f = b.target || e || "",
          g = c[b.type];if (!g && f in c && (g = c[f], f = b.target && e), f = f || d("href") || "", !g) for (var h in c) {
        b[h] && (g = c[h], f = b[h]);
      }if (!g) {
        var i = f;if (f = null, a.each(b.contentFilters, function () {
          return g = c[this], g.test && (f = g.test(i)), !f && g.regex && i.match && i.match(g.regex) && (f = i), !f;
        }), !f) return "console" in window && window.console.error("Featherlight: no content filter found " + (i ? ' for "' + i + '"' : " (no target specified)")), !1;
      }return g.process.call(b, f);
    }, setContent: function setContent(b) {
      var c = this;return b.is("iframe") && c.$instance.addClass(c.namespace + "-iframe"), c.$instance.removeClass(c.namespace + "-loading"), c.$instance.find("." + c.namespace + "-inner").not(b).slice(1).remove().end().replaceWith(a.contains(c.$instance[0], b[0]) ? "" : b), c.$content = b.addClass(c.namespace + "-inner"), c;
    }, open: function open(b) {
      var c = this;if (c.$instance.hide().appendTo(c.root), !(b && b.isDefaultPrevented() || c.beforeOpen(b) === !1)) {
        b && b.preventDefault();var d = c.getContent();if (d) return e.push(c), j(!0), c.$instance.fadeIn(c.openSpeed), c.beforeContent(b), a.when(d).always(function (a) {
          c.setContent(a), c.afterContent(b);
        }).then(c.$instance.promise()).done(function () {
          c.afterOpen(b);
        });
      }return c.$instance.detach(), a.Deferred().reject().promise();
    }, close: function close(b) {
      var c = this,
          d = a.Deferred();return c.beforeClose(b) === !1 ? d.reject() : (0 === f(c).length && j(!1), c.$instance.fadeOut(c.closeSpeed, function () {
        c.$instance.detach(), c.afterClose(b), d.resolve();
      })), d.promise();
    }, resize: function resize(a, b) {
      if (a && b) {
        this.$content.css("width", "").css("height", "");var c = Math.max(a / (this.$content.parent().width() - 1), b / (this.$content.parent().height() - 1));c > 1 && (c = b / Math.floor(b / c), this.$content.css("width", "" + a / c + "px").css("height", "" + b / c + "px"));
      }
    }, chainCallbacks: function chainCallbacks(b) {
      for (var c in b) {
        this[c] = a.proxy(b[c], this, a.proxy(this[c], this));
      }
    } }, a.extend(b, { id: 0, autoBind: "[data-featherlight]", defaults: b.prototype, contentFilters: { jquery: { regex: /^[#.]\w/, test: function test(b) {
          return b instanceof a && b;
        }, process: function process(b) {
          return this.persist !== !1 ? a(b) : a(b).clone(!0);
        } }, image: { regex: /\.(png|jpg|jpeg|gif|tiff|bmp|svg)(\?\S*)?$/i, process: function process(b) {
          var c = this,
              d = a.Deferred(),
              e = new Image(),
              f = a('<img src="' + b + '" alt="" class="' + c.namespace + '-image" />');return e.onload = function () {
            f.naturalWidth = e.width, f.naturalHeight = e.height, d.resolve(f);
          }, e.onerror = function () {
            d.reject(f);
          }, e.src = b, d.promise();
        } }, html: { regex: /^\s*<[\w!][^<]*>/, process: function process(b) {
          return a(b);
        } }, ajax: { regex: /./, process: function process(b) {
          var c = a.Deferred(),
              d = a("<div></div>").load(b, function (a, b) {
            "error" !== b && c.resolve(d.contents()), c.fail();
          });return c.promise();
        } }, iframe: { process: function process(b) {
          var e = new a.Deferred(),
              f = a("<iframe/>"),
              h = d(this, "iframe"),
              i = c(h, g);return f.hide().attr("src", b).attr(i).css(h).on("load", function () {
            e.resolve(f.show());
          }).appendTo(this.$instance.find("." + this.namespace + "-content")), e.promise();
        } }, text: { process: function process(b) {
          return a("<div>", { text: b });
        } } }, functionAttributes: ["beforeOpen", "afterOpen", "beforeContent", "afterContent", "beforeClose", "afterClose"], readElementConfig: function readElementConfig(b, c) {
      var d = this,
          e = new RegExp("^data-" + c + "-(.*)"),
          f = {};return b && b.attributes && a.each(b.attributes, function () {
        var b = this.name.match(e);if (b) {
          var c = this.value,
              g = a.camelCase(b[1]);if (a.inArray(g, d.functionAttributes) >= 0) c = new Function(c);else try {
            c = JSON.parse(c);
          } catch (h) {}f[g] = c;
        }
      }), f;
    }, extend: function extend(b, c) {
      var d = function d() {
        this.constructor = b;
      };return d.prototype = this.prototype, b.prototype = new d(), b.__super__ = this.prototype, a.extend(b, this, c), b.defaults = b.prototype, b;
    }, attach: function attach(b, c, d) {
      var e = this;"object" != (typeof c === "undefined" ? "undefined" : _typeof(c)) || c instanceof a != !1 || d || (d = c, c = void 0), d = a.extend({}, d);var f,
          g = d.namespace || e.defaults.namespace,
          h = a.extend({}, e.defaults, e.readElementConfig(b[0], g), d),
          i = function i(g) {
        var i = a(g.currentTarget),
            j = a.extend({ $source: b, $currentTarget: i }, e.readElementConfig(b[0], h.namespace), e.readElementConfig(g.currentTarget, h.namespace), d),
            k = f || i.data("featherlight-persisted") || new e(c, j);"shared" === k.persist ? f = k : k.persist !== !1 && i.data("featherlight-persisted", k), j.$currentTarget.blur && j.$currentTarget.blur(), k.open(g);
      };return b.on(h.openTrigger + "." + h.namespace, h.filter, i), i;
    }, current: function current() {
      var a = this.opened();return a[a.length - 1] || null;
    }, opened: function opened() {
      var b = this;return f(), a.grep(e, function (a) {
        return a instanceof b;
      });
    }, close: function close(a) {
      var b = this.current();return b ? b.close(a) : void 0;
    }, _onReady: function _onReady() {
      var b = this;b.autoBind && (a(b.autoBind).each(function () {
        b.attach(a(this));
      }), a(document).on("click", b.autoBind, function (c) {
        if (!c.isDefaultPrevented()) {
          var d = b.attach(a(c.currentTarget));d(c);
        }
      }));
    }, _callbackChain: { onKeyUp: function onKeyUp(b, c) {
        return 27 === c.keyCode ? (this.closeOnEsc && a.featherlight.close(c), !1) : b(c);
      }, beforeOpen: function beforeOpen(b, c) {
        return a(document.documentElement).addClass("with-featherlight"), this._previouslyActive = document.activeElement, this._$previouslyTabbable = a("a, input, select, textarea, iframe, button, iframe, [contentEditable=true]").not("[tabindex]").not(this.$instance.find("button")), this._$previouslyWithTabIndex = a("[tabindex]").not('[tabindex="-1"]'), this._previousWithTabIndices = this._$previouslyWithTabIndex.map(function (b, c) {
          return a(c).attr("tabindex");
        }), this._$previouslyWithTabIndex.add(this._$previouslyTabbable).attr("tabindex", -1), document.activeElement.blur && document.activeElement.blur(), b(c);
      }, afterClose: function afterClose(c, d) {
        var e = c(d),
            f = this;return this._$previouslyTabbable.removeAttr("tabindex"), this._$previouslyWithTabIndex.each(function (b, c) {
          a(c).attr("tabindex", f._previousWithTabIndices[b]);
        }), this._previouslyActive.focus(), 0 === b.opened().length && a(document.documentElement).removeClass("with-featherlight"), e;
      }, onResize: function onResize(a, b) {
        return this.resize(this.$content.naturalWidth, this.$content.naturalHeight), a(b);
      }, afterContent: function afterContent(a, b) {
        var c = a(b);return this.$instance.find("[autofocus]:not([disabled])").focus(), this.onResize(b), c;
      } } }), a.featherlight = b, a.fn.featherlight = function (a, c) {
    return b.attach(this, a, c), this;
  }, a(document).ready(function () {
    b._onReady();
  });
}(jQuery);
"use strict";

/**
 * Featherlight Gallery – an extension for the ultra slim jQuery lightbox
 * Version 1.7.8 - http://noelboss.github.io/featherlight/
 *
 * Copyright 2017, Noël Raoul Bossart (http://www.noelboss.com)
 * MIT Licensed.
**/!function (a) {
  "use strict";
  function b(c, d) {
    if (!(this instanceof b)) {
      var e = new b(a.extend({ $source: c, $currentTarget: c.first() }, d));return e.open(), e;
    }a.featherlight.apply(this, arguments), this.chainCallbacks(h);
  }var c = function c(a) {
    window.console && window.console.warn && window.console.warn("FeatherlightGallery: " + a);
  };if ("undefined" == typeof a) return c("Too much lightness, Featherlight needs jQuery.");if (!a.featherlight) return c("Load the featherlight plugin before the gallery plugin");var d = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
      e = a.event && a.event.special.swipeleft && a,
      f = window.Hammer && function (a) {
    var b = new window.Hammer.Manager(a[0]);return b.add(new window.Hammer.Swipe()), b;
  },
      g = d && (e || f);d && !g && c("No compatible swipe library detected; one must be included before featherlightGallery for swipe motions to navigate the galleries.");var h = { afterClose: function afterClose(a, b) {
      var c = this;return c.$instance.off("next." + c.namespace + " previous." + c.namespace), c._swiper && (c._swiper.off("swipeleft", c._swipeleft).off("swiperight", c._swiperight), c._swiper = null), a(b);
    }, beforeOpen: function beforeOpen(a, b) {
      var c = this;return c.$instance.on("next." + c.namespace + " previous." + c.namespace, function (a) {
        var b = "next" === a.type ? 1 : -1;c.navigateTo(c.currentNavigation() + b);
      }), g && (c._swiper = g(c.$instance).on("swipeleft", c._swipeleft = function () {
        c.$instance.trigger("next");
      }).on("swiperight", c._swiperight = function () {
        c.$instance.trigger("previous");
      }), c.$instance.addClass(this.namespace + "-swipe-aware", g)), c.$instance.find("." + c.namespace + "-content").append(c.createNavigation("previous")).append(c.createNavigation("next")), a(b);
    }, beforeContent: function beforeContent(a, b) {
      var c = this.currentNavigation(),
          d = this.slides().length;return this.$instance.toggleClass(this.namespace + "-first-slide", 0 === c).toggleClass(this.namespace + "-last-slide", c === d - 1), a(b);
    }, onKeyUp: function onKeyUp(a, b) {
      var c = { 37: "previous", 39: "next" }[b.keyCode];return c ? (this.$instance.trigger(c), !1) : a(b);
    } };a.featherlight.extend(b, { autoBind: "[data-featherlight-gallery]" }), a.extend(b.prototype, { previousIcon: "&#9664;", nextIcon: "&#9654;", galleryFadeIn: 100, galleryFadeOut: 300, slides: function slides() {
      return this.filter ? this.$source.find(this.filter) : this.$source;
    }, images: function images() {
      return c("images is deprecated, please use slides instead"), this.slides();
    }, currentNavigation: function currentNavigation() {
      return this.slides().index(this.$currentTarget);
    }, navigateTo: function navigateTo(b) {
      var c = this,
          d = c.slides(),
          e = d.length,
          f = c.$instance.find("." + c.namespace + "-inner");return b = (b % e + e) % e, c.$currentTarget = d.eq(b), c.beforeContent(), a.when(c.getContent(), f.fadeTo(c.galleryFadeOut, .2)).always(function (a) {
        c.setContent(a), c.afterContent(), a.fadeTo(c.galleryFadeIn, 1);
      });
    }, createNavigation: function createNavigation(b) {
      var c = this;return a('<span title="' + b + '" class="' + this.namespace + "-" + b + '"><span>' + this[b + "Icon"] + "</span></span>").click(function () {
        a(this).trigger(b + "." + c.namespace);
      });
    } }), a.featherlightGallery = b, a.fn.featherlightGallery = function (a) {
    return b.attach(this, a), this;
  }, a(document).ready(function () {
    b._onReady();
  });
}(jQuery);
"use strict";

/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!function (e) {
    e.fn.niceSelect = function (t) {
        function s(t) {
            t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));var s = t.next(),
                n = t.find("option"),
                i = t.find("option:selected");s.find(".current").html(i.data("display") || i.text()), n.each(function (t) {
                var n = e(this),
                    i = n.data("display");s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()));
            });
        }if ("string" == typeof t) return "update" == t ? this.each(function () {
            var t = e(this),
                n = e(this).next(".nice-select"),
                i = n.hasClass("open");n.length && (n.remove(), s(t), i && t.next().trigger("click"));
        }) : "destroy" == t ? (this.each(function () {
            var t = e(this),
                s = e(this).next(".nice-select");s.length && (s.remove(), t.css("display", ""));
        }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;this.hide(), this.each(function () {
            var t = e(this);t.next().hasClass("nice-select") || s(t);
        }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function (t) {
            var s = e(this);e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus();
        }), e(document).on("click.nice_select", function (t) {
            0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option");
        }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) {
            var s = e(this),
                n = s.closest(".nice-select");n.find(".selected").removeClass("selected"), s.addClass("selected");var i = s.data("display") || s.text();n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change");
        }), e(document).on("keydown.nice_select", ".nice-select", function (t) {
            var s = e(this),
                n = e(s.find(".focus") || s.find(".list .option.selected"));if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1;if (40 == t.keyCode) {
                if (s.hasClass("open")) {
                    var i = n.nextAll(".option:not(.disabled)").first();i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus"));
                } else s.trigger("click");return !1;
            }if (38 == t.keyCode) {
                if (s.hasClass("open")) {
                    var l = n.prevAll(".option:not(.disabled)").first();l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus"));
                } else s.trigger("click");return !1;
            }if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");else if (9 == t.keyCode && s.hasClass("open")) return !1;
        });var n = document.createElement("a").style;return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this;
    };
}(jQuery);
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;(function () {
	'use strict';

	/**
  * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
  *
  * @codingstandard ftlabs-jsv2
  * @copyright The Financial Times Limited [All Rights Reserved]
  * @license MIT License (see LICENSE.txt)
  */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/

	/**
  * Instantiate fast-clicking listeners on the specified layer.
  *
  * @constructor
  * @param {Element} layer The layer to listen on
  * @param {Object} [options={}] The options to override the defaults
  */

	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
   * Whether a click is currently being tracked.
   *
   * @type boolean
   */
		this.trackingClick = false;

		/**
   * Timestamp for when click tracking started.
   *
   * @type number
   */
		this.trackingClickStart = 0;

		/**
   * The element being tracked for a click.
   *
   * @type EventTarget
   */
		this.targetElement = null;

		/**
   * X-coordinate of touch start event.
   *
   * @type number
   */
		this.touchStartX = 0;

		/**
   * Y-coordinate of touch start event.
   *
   * @type number
   */
		this.touchStartY = 0;

		/**
   * ID of the last touch, retrieved from Touch.identifier.
   *
   * @type number
   */
		this.lastTouchIdentifier = 0;

		/**
   * Touchmove boundary, beyond which a click will be cancelled.
   *
   * @type number
   */
		this.touchBoundary = options.touchBoundary || 10;

		/**
   * The FastClick layer.
   *
   * @type Element
   */
		this.layer = layer;

		/**
   * The minimum time between tap(touchstart and touchend) events
   *
   * @type number
   */
		this.tapDelay = options.tapDelay || 200;

		/**
   * The maximum time for a tap
   *
   * @type number
   */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function () {
				return method.apply(context, arguments);
			};
		}

		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function (type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function (type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function (event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function (event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
 * Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
 *
 * @type boolean
 */
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
  * Android requires exceptions.
  *
  * @type boolean
  */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;

	/**
  * iOS requires exceptions.
  *
  * @type boolean
  */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;

	/**
  * iOS 4 requires an exception for select elements.
  *
  * @type boolean
  */
	var deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent);

	/**
  * iOS 6.0-7.* requires the target element to be manually derived
  *
  * @type boolean
  */
	var deviceIsIOSWithBadTarget = deviceIsIOS && /OS [6-7]_\d/.test(navigator.userAgent);

	/**
  * BlackBerry requires exceptions.
  *
  * @type boolean
  */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
  * Determine whether a given element requires a native click.
  *
  * @param {EventTarget|Element} target Target DOM element
  * @returns {boolean} Returns true if the element needs a native click
  */
	FastClick.prototype.needsClick = function (target) {
		switch (target.nodeName.toLowerCase()) {

			// Don't send a synthetic click to disabled inputs (issue #62)
			case 'button':
			case 'select':
			case 'textarea':
				if (target.disabled) {
					return true;
				}

				break;
			case 'input':

				// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
				if (deviceIsIOS && target.type === 'file' || target.disabled) {
					return true;
				}

				break;
			case 'label':
			case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
			case 'video':
				return true;
		}

		return (/\bneedsclick\b/.test(target.className)
		);
	};

	/**
  * Determine whether a given element requires a call to focus to simulate click into element.
  *
  * @param {EventTarget|Element} target Target DOM element
  * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
  */
	FastClick.prototype.needsFocus = function (target) {
		switch (target.nodeName.toLowerCase()) {
			case 'textarea':
				return true;
			case 'select':
				return !deviceIsAndroid;
			case 'input':
				switch (target.type) {
					case 'button':
					case 'checkbox':
					case 'file':
					case 'image':
					case 'radio':
					case 'submit':
						return false;
				}

				// No point in attempting to focus disabled inputs
				return !target.disabled && !target.readOnly;
			default:
				return (/\bneedsfocus\b/.test(target.className)
				);
		}
	};

	/**
  * Send a click event to the specified element.
  *
  * @param {EventTarget|Element} targetElement
  * @param {Event} event
  */
	FastClick.prototype.sendClick = function (targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function (targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};

	/**
  * @param {EventTarget|Element} targetElement
  */
	FastClick.prototype.focus = function (targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};

	/**
  * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
  *
  * @param {EventTarget|Element} targetElement
  */
	FastClick.prototype.updateScrollParent = function (targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};

	/**
  * @param {EventTarget} targetElement
  * @returns {Element|EventTarget}
  */
	FastClick.prototype.getTargetElementFromEventTarget = function (eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};

	/**
  * On touch start, record the position and scroll offset.
  *
  * @param {Event} event
  * @returns {boolean}
  */
	FastClick.prototype.onTouchStart = function (event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if (event.timeStamp - this.lastClickTime < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};

	/**
  * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
  *
  * @param {Event} event
  * @returns {boolean}
  */
	FastClick.prototype.touchHasMoved = function (event) {
		var touch = event.changedTouches[0],
		    boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};

	/**
  * Update the last position.
  *
  * @param {Event} event
  * @returns {boolean}
  */
	FastClick.prototype.onTouchMove = function (event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};

	/**
  * Attempt to find the labelled control for the given label element.
  *
  * @param {EventTarget|HTMLLabelElement} labelElement
  * @returns {Element|null}
  */
	FastClick.prototype.findControl = function (labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};

	/**
  * On touch end, determine whether to send a click event at once.
  *
  * @param {Event} event
  * @returns {boolean}
  */
	FastClick.prototype.onTouchEnd = function (event) {
		var forElement,
		    trackingClickStart,
		    targetTagName,
		    scrollParent,
		    touch,
		    targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if (event.timeStamp - this.lastClickTime < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if (event.timeStamp - this.trackingClickStart > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if (event.timeStamp - trackingClickStart > 100 || deviceIsIOS && window.top !== window && targetTagName === 'input') {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};

	/**
  * On touch cancel, stop tracking the click.
  *
  * @returns {void}
  */
	FastClick.prototype.onTouchCancel = function () {
		this.trackingClick = false;
		this.targetElement = null;
	};

	/**
  * Determine mouse events which should be permitted.
  *
  * @param {Event} event
  * @returns {boolean}
  */
	FastClick.prototype.onMouse = function (event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};

	/**
  * On actual clicks, determine whether this is a touch-generated click, a click action occurring
  * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
  * an actual click which should be permitted.
  *
  * @param {Event} event
  * @returns {boolean}
  */
	FastClick.prototype.onClick = function (event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};

	/**
  * Remove all FastClick's event listeners.
  *
  * @returns {void}
  */
	FastClick.prototype.destroy = function () {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};

	/**
  * Check whether FastClick is needed.
  *
  * @param {Element} layer The layer to listen on
  */
	FastClick.notNeeded = function (layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

				// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};

	/**
  * Factory method for creating a FastClick object
  *
  * @param {Element} layer The layer to listen on
  * @param {Object} [options={}] The options to override the defaults
  */
	FastClick.attach = function (layer, options) {
		return new FastClick(layer, options);
	};

	if (typeof define === 'function' && _typeof(define.amd) === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function () {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
})();
/*! showdown v 1.7.4 - 08-09-2017 */
(function(){function a(a){"use strict";var b={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",type:"string"},rawPrefixHeaderId:{defaultValue:!1,describe:'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',type:"boolean"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},rawHeaderId:{defaultValue:!1,describe:"Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids",type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},literalMidWordAsterisks:{defaultValue:!1,describe:"Parse midword asterisks as literal asterisks",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,description:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,description:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,description:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,description:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,description:"Enables github @mentions",type:"boolean"},ghMentionsLink:{defaultValue:"https://github.com/{u}",description:"Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",type:"string"},encodeEmails:{defaultValue:!0,description:"Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",type:"boolean"},openLinksInNewWindow:{defaultValue:!1,description:"Open all links in new windows",type:"boolean"},backslashEscapesHTMLTags:{defaultValue:!1,description:"Support for HTML Tag escaping. ex: <div>foo</div>",type:"boolean"}};if(!1===a)return JSON.parse(JSON.stringify(b));var c={};for(var d in b)b.hasOwnProperty(d)&&(c[d]=b[d].defaultValue);return c}function b(a,b){"use strict";var c=b?"Error in "+b+" extension->":"Error in unnamed extension",e={valid:!0,error:""};d.helper.isArray(a)||(a=[a]);for(var f=0;f<a.length;++f){var g=c+" sub-extension "+f+": ",h=a[f];if("object"!=typeof h)return e.valid=!1,e.error=g+"must be an object, but "+typeof h+" given",e;if(!d.helper.isString(h.type))return e.valid=!1,e.error=g+'property "type" must be a string, but '+typeof h.type+" given",e;var i=h.type=h.type.toLowerCase();if("language"===i&&(i=h.type="lang"),"html"===i&&(i=h.type="output"),"lang"!==i&&"output"!==i&&"listener"!==i)return e.valid=!1,e.error=g+"type "+i+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',e;if("listener"===i){if(d.helper.isUndefined(h.listeners))return e.valid=!1,e.error=g+'. Extensions of type "listener" must have a property called "listeners"',e}else if(d.helper.isUndefined(h.filter)&&d.helper.isUndefined(h.regex))return e.valid=!1,e.error=g+i+' extensions must define either a "regex" property or a "filter" method',e;if(h.listeners){if("object"!=typeof h.listeners)return e.valid=!1,e.error=g+'"listeners" property must be an object but '+typeof h.listeners+" given",e;for(var j in h.listeners)if(h.listeners.hasOwnProperty(j)&&"function"!=typeof h.listeners[j])return e.valid=!1,e.error=g+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+j+" must be a function but "+typeof h.listeners[j]+" given",e}if(h.filter){if("function"!=typeof h.filter)return e.valid=!1,e.error=g+'"filter" must be a function, but '+typeof h.filter+" given",e}else if(h.regex){if(d.helper.isString(h.regex)&&(h.regex=new RegExp(h.regex,"g")),!(h.regex instanceof RegExp))return e.valid=!1,e.error=g+'"regex" property must either be a string or a RegExp object, but '+typeof h.regex+" given",e;if(d.helper.isUndefined(h.replace))return e.valid=!1,e.error=g+'"regex" extensions must implement a replace string or function',e}}return e}function c(a,b){"use strict";return"¨E"+b.charCodeAt(0)+"E"}var d={},e={},f={},g=a(!0),h="vanilla",i={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0,backslashEscapesHTMLTags:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:a(!0),allOn:function(){"use strict";var b=a(!0),c={};for(var d in b)b.hasOwnProperty(d)&&(c[d]=!0);return c}()};d.helper={},d.extensions={},d.setOption=function(a,b){"use strict";return g[a]=b,this},d.getOption=function(a){"use strict";return g[a]},d.getOptions=function(){"use strict";return g},d.resetOptions=function(){"use strict";g=a(!0)},d.setFlavor=function(a){"use strict";if(!i.hasOwnProperty(a))throw Error(a+" flavor was not found");d.resetOptions();var b=i[a];h=a;for(var c in b)b.hasOwnProperty(c)&&(g[c]=b[c])},d.getFlavor=function(){"use strict";return h},d.getFlavorOptions=function(a){"use strict";if(i.hasOwnProperty(a))return i[a]},d.getDefaultOptions=function(b){"use strict";return a(b)},d.subParser=function(a,b){"use strict";if(d.helper.isString(a)){if(void 0===b){if(e.hasOwnProperty(a))return e[a];throw Error("SubParser named "+a+" not registered!")}e[a]=b}},d.extension=function(a,c){"use strict";if(!d.helper.isString(a))throw Error("Extension 'name' must be a string");if(a=d.helper.stdExtName(a),d.helper.isUndefined(c)){if(!f.hasOwnProperty(a))throw Error("Extension named "+a+" is not registered!");return f[a]}"function"==typeof c&&(c=c()),d.helper.isArray(c)||(c=[c]);var e=b(c,a);if(!e.valid)throw Error(e.error);f[a]=c},d.getAllExtensions=function(){"use strict";return f},d.removeExtension=function(a){"use strict";delete f[a]},d.resetExtensions=function(){"use strict";f={}},d.validateExtension=function(a){"use strict";var c=b(a,null);return!!c.valid||(console.warn(c.error),!1)},d.hasOwnProperty("helper")||(d.helper={}),d.helper.isString=function(a){"use strict";return"string"==typeof a||a instanceof String},d.helper.isFunction=function(a){"use strict";var b={};return a&&"[object Function]"===b.toString.call(a)},d.helper.isArray=function(a){"use strict";return Array.isArray(a)},d.helper.isUndefined=function(a){"use strict";return void 0===a},d.helper.forEach=function(a,b){"use strict";if(d.helper.isUndefined(a))throw new Error("obj param is required");if(d.helper.isUndefined(b))throw new Error("callback param is required");if(!d.helper.isFunction(b))throw new Error("callback param must be a function/closure");if("function"==typeof a.forEach)a.forEach(b);else if(d.helper.isArray(a))for(var c=0;c<a.length;c++)b(a[c],c,a);else{if("object"!=typeof a)throw new Error("obj does not seem to be an array or an iterable object");for(var e in a)a.hasOwnProperty(e)&&b(a[e],e,a)}},d.helper.stdExtName=function(a){"use strict";return a.replace(/[_?*+\/\\.^-]/g,"").replace(/\s/g,"").toLowerCase()},d.helper.escapeCharactersCallback=c,d.helper.escapeCharacters=function(a,b,d){"use strict";var e="(["+b.replace(/([\[\]\\])/g,"\\$1")+"])";d&&(e="\\\\"+e);var f=new RegExp(e,"g");return a=a.replace(f,c)};var j=function(a,b,c,d){"use strict";var e,f,g,h,i,j=d||"",k=j.indexOf("g")>-1,l=new RegExp(b+"|"+c,"g"+j.replace(/g/g,"")),m=new RegExp(b,j.replace(/g/g,"")),n=[];do{for(e=0;g=l.exec(a);)if(m.test(g[0]))e++||(f=l.lastIndex,h=f-g[0].length);else if(e&&!--e){i=g.index+g[0].length;var o={left:{start:h,end:f},match:{start:f,end:g.index},right:{start:g.index,end:i},wholeMatch:{start:h,end:i}};if(n.push(o),!k)return n}}while(e&&(l.lastIndex=f));return n};d.helper.matchRecursiveRegExp=function(a,b,c,d){"use strict";for(var e=j(a,b,c,d),f=[],g=0;g<e.length;++g)f.push([a.slice(e[g].wholeMatch.start,e[g].wholeMatch.end),a.slice(e[g].match.start,e[g].match.end),a.slice(e[g].left.start,e[g].left.end),a.slice(e[g].right.start,e[g].right.end)]);return f},d.helper.replaceRecursiveRegExp=function(a,b,c,e,f){"use strict";if(!d.helper.isFunction(b)){var g=b;b=function(){return g}}var h=j(a,c,e,f),i=a,k=h.length;if(k>0){var l=[];0!==h[0].wholeMatch.start&&l.push(a.slice(0,h[0].wholeMatch.start));for(var m=0;m<k;++m)l.push(b(a.slice(h[m].wholeMatch.start,h[m].wholeMatch.end),a.slice(h[m].match.start,h[m].match.end),a.slice(h[m].left.start,h[m].left.end),a.slice(h[m].right.start,h[m].right.end))),m<k-1&&l.push(a.slice(h[m].wholeMatch.end,h[m+1].wholeMatch.start));h[k-1].wholeMatch.end<a.length&&l.push(a.slice(h[k-1].wholeMatch.end)),i=l.join("")}return i},d.helper.regexIndexOf=function(a,b,c){"use strict";if(!d.helper.isString(a))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";if(b instanceof RegExp==!1)throw"InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";var e=a.substring(c||0).search(b);return e>=0?e+(c||0):e},d.helper.splitAtIndex=function(a,b){"use strict";if(!d.helper.isString(a))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";return[a.substring(0,b),a.substring(b)]},d.helper.encodeEmailAddress=function(a){"use strict";var b=[function(a){return"&#"+a.charCodeAt(0)+";"},function(a){return"&#x"+a.charCodeAt(0).toString(16)+";"},function(a){return a}];return a=a.replace(/./g,function(a){if("@"===a)a=b[Math.floor(2*Math.random())](a);else{var c=Math.random();a=c>.9?b[2](a):c>.45?b[1](a):b[0](a)}return a})},"undefined"==typeof console&&(console={warn:function(a){"use strict";alert(a)},log:function(a){"use strict";alert(a)},error:function(a){"use strict";throw a}}),d.helper.regexes={asteriskAndDash:/([*_])/g},d.Converter=function(a){"use strict";function c(a,c){if(c=c||null,d.helper.isString(a)){if(a=d.helper.stdExtName(a),c=a,d.extensions[a])return console.warn("DEPRECATION WARNING: "+a+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),void e(d.extensions[a],a);if(d.helper.isUndefined(f[a]))throw Error('Extension "'+a+'" could not be loaded. It was either not found or is not a valid extension.');a=f[a]}"function"==typeof a&&(a=a()),d.helper.isArray(a)||(a=[a]);var g=b(a,c);if(!g.valid)throw Error(g.error);for(var h=0;h<a.length;++h){switch(a[h].type){case"lang":m.push(a[h]);break;case"output":n.push(a[h])}if(a[h].hasOwnProperty("listeners"))for(var i in a[h].listeners)a[h].listeners.hasOwnProperty(i)&&j(i,a[h].listeners[i])}}function e(a,c){"function"==typeof a&&(a=a(new d.Converter)),d.helper.isArray(a)||(a=[a]);var e=b(a,c);if(!e.valid)throw Error(e.error);for(var f=0;f<a.length;++f)switch(a[f].type){case"lang":m.push(a[f]);break;case"output":n.push(a[f]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function j(a,b){if(!d.helper.isString(a))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof a+" given");if("function"!=typeof b)throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof b+" given");o.hasOwnProperty(a)||(o[a]=[]),o[a].push(b)}function k(a){var b=a.match(/^\s*/)[0].length,c=new RegExp("^\\s{0,"+b+"}","gm");return a.replace(c,"")}var l={},m=[],n=[],o={},p=h;!function(){a=a||{};for(var b in g)g.hasOwnProperty(b)&&(l[b]=g[b]);if("object"!=typeof a)throw Error("Converter expects the passed parameter to be an object, but "+typeof a+" was passed instead.");for(var e in a)a.hasOwnProperty(e)&&(l[e]=a[e]);l.extensions&&d.helper.forEach(l.extensions,c)}(),this._dispatch=function(a,b,c,d){if(o.hasOwnProperty(a))for(var e=0;e<o[a].length;++e){var f=o[a][e](a,b,this,c,d);f&&void 0!==f&&(b=f)}return b},this.listen=function(a,b){return j(a,b),this},this.makeHtml=function(a){if(!a)return a;var b={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:m,outputModifiers:n,converter:this,ghCodeBlocks:[]};return a=a.replace(/¨/g,"¨T"),a=a.replace(/\$/g,"¨D"),a=a.replace(/\r\n/g,"\n"),a=a.replace(/\r/g,"\n"),a=a.replace(/\u00A0/g," "),l.smartIndentationFix&&(a=k(a)),a="\n\n"+a+"\n\n",a=d.subParser("detab")(a,l,b),a=a.replace(/^[ \t]+$/gm,""),d.helper.forEach(m,function(c){a=d.subParser("runExtension")(c,a,l,b)}),a=d.subParser("hashPreCodeTags")(a,l,b),a=d.subParser("githubCodeBlocks")(a,l,b),a=d.subParser("hashHTMLBlocks")(a,l,b),a=d.subParser("hashCodeTags")(a,l,b),a=d.subParser("stripLinkDefinitions")(a,l,b),a=d.subParser("blockGamut")(a,l,b),a=d.subParser("unhashHTMLSpans")(a,l,b),a=d.subParser("unescapeSpecialChars")(a,l,b),a=a.replace(/¨D/g,"$$"),a=a.replace(/¨T/g,"¨"),d.helper.forEach(n,function(c){a=d.subParser("runExtension")(c,a,l,b)}),a},this.setOption=function(a,b){l[a]=b},this.getOption=function(a){return l[a]},this.getOptions=function(){return l},this.addExtension=function(a,b){b=b||null,c(a,b)},this.useExtension=function(a){c(a)},this.setFlavor=function(a){if(!i.hasOwnProperty(a))throw Error(a+" flavor was not found");var b=i[a];p=a;for(var c in b)b.hasOwnProperty(c)&&(l[c]=b[c])},this.getFlavor=function(){return p},this.removeExtension=function(a){d.helper.isArray(a)||(a=[a]);for(var b=0;b<a.length;++b){for(var c=a[b],e=0;e<m.length;++e)m[e]===c&&m[e].splice(e,1);for(;0<n.length;++e)n[0]===c&&n[0].splice(e,1)}},this.getAllExtensions=function(){return{language:m,output:n}}},d.subParser("anchors",function(a,b,c){"use strict";a=c.converter._dispatch("anchors.before",a,b,c);var e=function(a,e,f,g,h,i,j){if(d.helper.isUndefined(j)&&(j=""),f=f.toLowerCase(),a.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)g="";else if(!g){if(f||(f=e.toLowerCase().replace(/ ?\n/g," ")),g="#"+f,d.helper.isUndefined(c.gUrls[f]))return a;g=c.gUrls[f],d.helper.isUndefined(c.gTitles[f])||(j=c.gTitles[f])}g=g.replace(d.helper.regexes.asteriskAndDash,d.helper.escapeCharactersCallback);var k='<a href="'+g+'"';return""!==j&&null!==j&&(j=j.replace(/"/g,"&quot;"),j=j.replace(d.helper.regexes.asteriskAndDash,d.helper.escapeCharactersCallback),k+=' title="'+j+'"'),b.openLinksInNewWindow&&(k+=' target="¨E95Eblank"'),k+=">"+e+"</a>"};return a=a.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,e),a=a.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,e),a=a.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,e),a=a.replace(/\[([^\[\]]+)]()()()()()/g,e),b.ghMentions&&(a=a.replace(/(^|\s)(\\)?(@([a-z\d\-]+))(?=[.!?;,[\]()]|\s|$)/gim,function(a,c,e,f,g){if("\\"===e)return c+f;if(!d.helper.isString(b.ghMentionsLink))throw new Error("ghMentionsLink option must be a string");var h=b.ghMentionsLink.replace(/\{u}/g,g),i="";return b.openLinksInNewWindow&&(i=' target="¨E95Eblank"'),c+'<a href="'+h+'"'+i+">"+f+"</a>"})),a=c.converter._dispatch("anchors.after",a,b,c)});var k=/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)()(?=\s|$)(?!["<>])/gi,l=/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]]?)(?=\s|$)(?!["<>])/gi,m=/<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>/gi,n=/(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-\/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,o=/<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,p=function(a){"use strict";return function(b,c,d,e,f){var g=c,h="",i="";return/^www\./i.test(c)&&(c=c.replace(/^www\./i,"http://www.")),a.excludeTrailingPunctuationFromURLs&&f&&(h=f),a.openLinksInNewWindow&&(i=' target="¨E95Eblank"'),'<a href="'+c+'"'+i+">"+g+"</a>"+h}},q=function(a,b){"use strict";return function(c,e,f){var g="mailto:";return e=e||"",f=d.subParser("unescapeSpecialChars")(f,a,b),a.encodeEmails?(g=d.helper.encodeEmailAddress(g+f),f=d.helper.encodeEmailAddress(f)):g+=f,e+'<a href="'+g+'">'+f+"</a>"}};d.subParser("autoLinks",function(a,b,c){"use strict";return a=c.converter._dispatch("autoLinks.before",a,b,c),a=a.replace(m,p(b)),a=a.replace(o,q(b,c)),a=c.converter._dispatch("autoLinks.after",a,b,c)}),d.subParser("simplifiedAutoLinks",function(a,b,c){"use strict";return b.simplifiedAutoLink?(a=c.converter._dispatch("simplifiedAutoLinks.before",a,b,c),a=b.excludeTrailingPunctuationFromURLs?a.replace(l,p(b)):a.replace(k,p(b)),a=a.replace(n,q(b,c)),a=c.converter._dispatch("simplifiedAutoLinks.after",a,b,c)):a}),d.subParser("blockGamut",function(a,b,c){"use strict";return a=c.converter._dispatch("blockGamut.before",a,b,c),a=d.subParser("blockQuotes")(a,b,c),a=d.subParser("headers")(a,b,c),a=d.subParser("horizontalRule")(a,b,c),a=d.subParser("lists")(a,b,c),a=d.subParser("codeBlocks")(a,b,c),a=d.subParser("tables")(a,b,c),a=d.subParser("hashHTMLBlocks")(a,b,c),a=d.subParser("paragraphs")(a,b,c),a=c.converter._dispatch("blockGamut.after",a,b,c)}),d.subParser("blockQuotes",function(a,b,c){"use strict";return a=c.converter._dispatch("blockQuotes.before",a,b,c),a=a.replace(/((^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(a,e){var f=e;return f=f.replace(/^[ \t]*>[ \t]?/gm,"¨0"),f=f.replace(/¨0/g,""),f=f.replace(/^[ \t]+$/gm,""),f=d.subParser("githubCodeBlocks")(f,b,c),f=d.subParser("blockGamut")(f,b,c),f=f.replace(/(^|\n)/g,"$1  "),f=f.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(a,b){var c=b;return c=c.replace(/^  /gm,"¨0"),c=c.replace(/¨0/g,"")}),d.subParser("hashBlock")("<blockquote>\n"+f+"\n</blockquote>",b,c)}),a=c.converter._dispatch("blockQuotes.after",a,b,c)}),d.subParser("codeBlocks",function(a,b,c){"use strict";a=c.converter._dispatch("codeBlocks.before",a,b,c),a+="¨0";var e=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;return a=a.replace(e,function(a,e,f){var g=e,h=f,i="\n";return g=d.subParser("outdent")(g,b,c),g=d.subParser("encodeCode")(g,b,c),g=d.subParser("detab")(g,b,c),g=g.replace(/^\n+/g,""),g=g.replace(/\n+$/g,""),b.omitExtraWLInCodeBlocks&&(i=""),g="<pre><code>"+g+i+"</code></pre>",d.subParser("hashBlock")(g,b,c)+h}),a=a.replace(/¨0/,""),a=c.converter._dispatch("codeBlocks.after",a,b,c)}),d.subParser("codeSpans",function(a,b,c){"use strict";return a=c.converter._dispatch("codeSpans.before",a,b,c),void 0===a&&(a=""),a=a.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(a,e,f,g){var h=g;return h=h.replace(/^([ \t]*)/g,""),h=h.replace(/[ \t]*$/g,""),h=d.subParser("encodeCode")(h,b,c),e+"<code>"+h+"</code>"}),a=c.converter._dispatch("codeSpans.after",a,b,c)}),d.subParser("detab",function(a,b,c){"use strict";return a=c.converter._dispatch("detab.before",a,b,c),a=a.replace(/\t(?=\t)/g,"    "),a=a.replace(/\t/g,"¨A¨B"),a=a.replace(/¨B(.+?)¨A/g,function(a,b){for(var c=b,d=4-c.length%4,e=0;e<d;e++)c+=" ";return c}),a=a.replace(/¨A/g,"    "),a=a.replace(/¨B/g,""),a=c.converter._dispatch("detab.after",a,b,c)}),d.subParser("encodeAmpsAndAngles",function(a,b,c){"use strict";return a=c.converter._dispatch("encodeAmpsAndAngles.before",a,b,c),a=a.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),a=a.replace(/<(?![a-z\/?$!])/gi,"&lt;"),a=a.replace(/</g,"&lt;"),a=a.replace(/>/g,"&gt;"),a=c.converter._dispatch("encodeAmpsAndAngles.after",a,b,c)}),d.subParser("encodeBackslashEscapes",function(a,b,c){"use strict";return a=c.converter._dispatch("encodeBackslashEscapes.before",a,b,c),a=a.replace(/\\(\\)/g,d.helper.escapeCharactersCallback),a=a.replace(/\\([`*_{}\[\]()>#+.!~=|-])/g,d.helper.escapeCharactersCallback),a=c.converter._dispatch("encodeBackslashEscapes.after",a,b,c)}),d.subParser("encodeCode",function(a,b,c){"use strict";return a=c.converter._dispatch("encodeCode.before",a,b,c),a=a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([*_{}\[\]\\=~-])/g,d.helper.escapeCharactersCallback),a=c.converter._dispatch("encodeCode.after",a,b,c)}),d.subParser("escapeSpecialCharsWithinTagAttributes",function(a,b,c){"use strict";a=c.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before",a,b,c);var e=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;return a=a.replace(e,function(a){return a.replace(/(.)<\/?code>(?=.)/g,"$1`").replace(/([\\`*_~=|])/g,d.helper.escapeCharactersCallback)}),a=c.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after",a,b,c)}),d.subParser("githubCodeBlocks",function(a,b,c){"use strict";return b.ghCodeBlocks?(a=c.converter._dispatch("githubCodeBlocks.before",a,b,c),a+="¨0",a=a.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,function(a,e,f){var g=b.omitExtraWLInCodeBlocks?"":"\n";return f=d.subParser("encodeCode")(f,b,c),f=d.subParser("detab")(f,b,c),f=f.replace(/^\n+/g,""),f=f.replace(/\n+$/g,""),f="<pre><code"+(e?' class="'+e+" language-"+e+'"':"")+">"+f+g+"</code></pre>",f=d.subParser("hashBlock")(f,b,c),"\n\n¨G"+(c.ghCodeBlocks.push({text:a,codeblock:f})-1)+"G\n\n"}),a=a.replace(/¨0/,""),c.converter._dispatch("githubCodeBlocks.after",a,b,c)):a}),d.subParser("hashBlock",function(a,b,c){"use strict";return a=c.converter._dispatch("hashBlock.before",a,b,c),a=a.replace(/(^\n+|\n+$)/g,""),a="\n\n¨K"+(c.gHtmlBlocks.push(a)-1)+"K\n\n",a=c.converter._dispatch("hashBlock.after",a,b,c)}),d.subParser("hashCodeTags",function(a,b,c){"use strict";a=c.converter._dispatch("hashCodeTags.before",a,b,c);var e=function(a,e,f,g){var h=f+d.subParser("encodeCode")(e,b,c)+g;return"¨C"+(c.gHtmlSpans.push(h)-1)+"C"};return a=d.helper.replaceRecursiveRegExp(a,e,"<code\\b[^>]*>","</code>","gim"),a=c.converter._dispatch("hashCodeTags.after",a,b,c)}),d.subParser("hashElement",function(a,b,c){"use strict";return function(a,b){var d=b;return d=d.replace(/\n\n/g,"\n"),d=d.replace(/^\n/,""),d=d.replace(/\n+$/g,""),d="\n\n¨K"+(c.gHtmlBlocks.push(d)-1)+"K\n\n"}}),d.subParser("hashHTMLBlocks",function(a,b,c){"use strict";a=c.converter._dispatch("hashHTMLBlocks.before",a,b,c);var e=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],f=function(a,b,d,e){var f=a;return-1!==d.search(/\bmarkdown\b/)&&(f=d+c.converter.makeHtml(b)+e),"\n\n¨K"+(c.gHtmlBlocks.push(f)-1)+"K\n\n"};b.backslashEscapesHTMLTags&&(a=a.replace(/\\<(\/?[^>]+?)>/g,function(a,b){return"&lt;"+b+"&gt;"}));for(var g=0;g<e.length;++g)for(var h,i=new RegExp("^ {0,3}(<"+e[g]+"\\b[^>]*>)","im"),j="<"+e[g]+"\\b[^>]*>",k="</"+e[g]+">";-1!==(h=d.helper.regexIndexOf(a,i));){var l=d.helper.splitAtIndex(a,h),m=d.helper.replaceRecursiveRegExp(l[1],f,j,k,"im");if(m===l[1])break;a=l[0].concat(m)}return a=a.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,d.subParser("hashElement")(a,b,c)),a=d.helper.replaceRecursiveRegExp(a,function(a){return"\n\n¨K"+(c.gHtmlBlocks.push(a)-1)+"K\n\n"},"^ {0,3}\x3c!--","--\x3e","gm"),a=a.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,d.subParser("hashElement")(a,b,c)),a=c.converter._dispatch("hashHTMLBlocks.after",a,b,c)}),d.subParser("hashHTMLSpans",function(a,b,c){"use strict";function d(a){return"¨C"+(c.gHtmlSpans.push(a)-1)+"C"}return a=c.converter._dispatch("hashHTMLSpans.before",a,b,c),a=a.replace(/<[^>]+?\/>/gi,function(a){return d(a)}),a=a.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g,function(a){return d(a)}),a=a.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,function(a){return d(a)}),a=a.replace(/<[^>]+?>/gi,function(a){return d(a)}),a=c.converter._dispatch("hashHTMLSpans.after",a,b,c)}),d.subParser("unhashHTMLSpans",function(a,b,c){"use strict";a=c.converter._dispatch("unhashHTMLSpans.before",a,b,c);for(var d=0;d<c.gHtmlSpans.length;++d){for(var e=c.gHtmlSpans[d],f=0;/¨C(\d+)C/.test(e);){var g=RegExp.$1;if(e=e.replace("¨C"+g+"C",c.gHtmlSpans[g]),10===f)break;++f}a=a.replace("¨C"+d+"C",e)}return a=c.converter._dispatch("unhashHTMLSpans.after",a,b,c)}),d.subParser("hashPreCodeTags",function(a,b,c){"use strict";a=c.converter._dispatch("hashPreCodeTags.before",a,b,c);var e=function(a,e,f,g){var h=f+d.subParser("encodeCode")(e,b,c)+g;return"\n\n¨G"+(c.ghCodeBlocks.push({text:a,codeblock:h})-1)+"G\n\n"};return a=d.helper.replaceRecursiveRegExp(a,e,"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim"),a=c.converter._dispatch("hashPreCodeTags.after",a,b,c)}),d.subParser("headers",function(a,b,c){"use strict";function e(a){var e,f;if(b.customizedHeaderId){var g=a.match(/\{([^{]+?)}\s*$/);g&&g[1]&&(a=g[1])}return e=a,f=d.helper.isString(b.prefixHeaderId)?b.prefixHeaderId:!0===b.prefixHeaderId?"section-":"",b.rawPrefixHeaderId||(e=f+e),e=b.ghCompatibleHeaderId?e.replace(/ /g,"-").replace(/&amp;/g,"").replace(/¨T/g,"").replace(/¨D/g,"").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g,"").toLowerCase():b.rawHeaderId?e.replace(/ /g,"-").replace(/&amp;/g,"&").replace(/¨T/g,"¨").replace(/¨D/g,"$").replace(/["']/g,"-").toLowerCase():e.replace(/[^\w]/g,"").toLowerCase(),b.rawPrefixHeaderId&&(e=f+e),c.hashLinkCounts[e]?e=e+"-"+c.hashLinkCounts[e]++:c.hashLinkCounts[e]=1,e}a=c.converter._dispatch("headers.before",a,b,c);var f=isNaN(parseInt(b.headerLevelStart))?1:parseInt(b.headerLevelStart),g=b.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,h=b.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;a=a.replace(g,function(a,g){var h=d.subParser("spanGamut")(g,b,c),i=b.noHeaderId?"":' id="'+e(g)+'"',j=f,k="<h"+j+i+">"+h+"</h"+j+">";return d.subParser("hashBlock")(k,b,c)}),a=a.replace(h,function(a,g){var h=d.subParser("spanGamut")(g,b,c),i=b.noHeaderId?"":' id="'+e(g)+'"',j=f+1,k="<h"+j+i+">"+h+"</h"+j+">";return d.subParser("hashBlock")(k,b,c)});var i=b.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;return a=a.replace(i,function(a,g,h){var i=h;b.customizedHeaderId&&(i=h.replace(/\s?\{([^{]+?)}\s*$/,""));var j=d.subParser("spanGamut")(i,b,c),k=b.noHeaderId?"":' id="'+e(h)+'"',l=f-1+g.length,m="<h"+l+k+">"+j+"</h"+l+">";return d.subParser("hashBlock")(m,b,c)}),a=c.converter._dispatch("headers.after",a,b,c)}),d.subParser("horizontalRule",function(a,b,c){"use strict";a=c.converter._dispatch("horizontalRule.before",a,b,c);var e=d.subParser("hashBlock")("<hr />",b,c);return a=a.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,e),a=a.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,e),a=a.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,e),a=c.converter._dispatch("horizontalRule.after",a,b,c)}),d.subParser("images",function(a,b,c){"use strict";function e(a,b,c,d,e,g,h,i){return d=d.replace(/\s/g,""),f(a,b,c,d,e,g,h,i)}function f(a,b,e,f,g,h,i,j){var k=c.gUrls,l=c.gTitles,m=c.gDimensions;if(e=e.toLowerCase(),j||(j=""),a.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)f="";else if(""===f||null===f){if(""!==e&&null!==e||(e=b.toLowerCase().replace(/ ?\n/g," ")),f="#"+e,d.helper.isUndefined(k[e]))return a;f=k[e],d.helper.isUndefined(l[e])||(j=l[e]),d.helper.isUndefined(m[e])||(g=m[e].width,h=m[e].height)}b=b.replace(/"/g,"&quot;").replace(d.helper.regexes.asteriskAndDash,d.helper.escapeCharactersCallback),f=f.replace(d.helper.regexes.asteriskAndDash,d.helper.escapeCharactersCallback);var n='<img src="'+f+'" alt="'+b+'"';return j&&(j=j.replace(/"/g,"&quot;").replace(d.helper.regexes.asteriskAndDash,d.helper.escapeCharactersCallback),n+=' title="'+j+'"'),g&&h&&(g="*"===g?"auto":g,h="*"===h?"auto":h,n+=' width="'+g+'"',n+=' height="'+h+'"'),n+=" />"}a=c.converter._dispatch("images.before",a,b,c);var g=/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,h=/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,i=/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+\/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,j=/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,k=/!\[([^\[\]]+)]()()()()()/g;return a=a.replace(j,f),a=a.replace(i,e),a=a.replace(h,f),a=a.replace(g,f),a=a.replace(k,f),a=c.converter._dispatch("images.after",a,b,c)}),d.subParser("italicsAndBold",function(a,b,c){"use strict";function e(a,e,f){return b.simplifiedAutoLink&&(a=d.subParser("simplifiedAutoLinks")(a,b,c)),e+a+f}return a=c.converter._dispatch("italicsAndBold.before",a,b,c),b.literalMidWordUnderscores?(a=a.replace(/\b___(\S[\s\S]*)___\b/g,function(a,b){return e(b,"<strong><em>","</em></strong>")}),a=a.replace(/\b__(\S[\s\S]*)__\b/g,function(a,b){return e(b,"<strong>","</strong>")}),a=a.replace(/\b_(\S[\s\S]*?)_\b/g,function(a,b){return e(b,"<em>","</em>")})):(a=a.replace(/___(\S[\s\S]*?)___/g,function(a,b){return/\S$/.test(b)?e(b,"<strong><em>","</em></strong>"):a}),a=a.replace(/__(\S[\s\S]*?)__/g,function(a,b){return/\S$/.test(b)?e(b,"<strong>","</strong>"):a}),a=a.replace(/_([^\s_][\s\S]*?)_/g,function(a,b){return/\S$/.test(b)?e(b,"<em>","</em>"):a})),b.literalMidWordAsterisks?(a=a.trim().replace(/(^| )\*{3}(\S[\s\S]*?)\*{3}([ ,;!?.]|$)/g,function(a,b,c,d){return e(c,b+"<strong><em>","</em></strong>"+d)}),a=a.trim().replace(/(^| )\*{2}(\S[\s\S]*?)\*{2}([ ,;!?.]|$)/g,function(a,b,c,d){return e(c,b+"<strong>","</strong>"+d)}),a=a.trim().replace(/(^| )\*(\S[\s\S]*?)\*([ ,;!?.]|$)/g,function(a,b,c,d){return e(c,b+"<em>","</em>"+d)})):(a=a.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g,function(a,b){return/\S$/.test(b)?e(b,"<strong><em>","</em></strong>"):a}),a=a.replace(/\*\*(\S[\s\S]*?)\*\*/g,function(a,b){return/\S$/.test(b)?e(b,"<strong>","</strong>"):a}),a=a.replace(/\*([^\s*][\s\S]*?)\*/g,function(a,b){return/\S$/.test(b)?e(b,"<em>","</em>"):a})),a=c.converter._dispatch("italicsAndBold.after",a,b,c)}),d.subParser("lists",function(a,b,c){"use strict";function e(a,e){c.gListLevel++,a=a.replace(/\n{2,}$/,"\n"),a+="¨0";var f=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,g=/\n[ \t]*\n(?!¨0)/.test(a);return b.disableForced4SpacesIndentedSublists&&(f=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),a=a.replace(f,function(a,e,f,h,i,j,k){k=k&&""!==k.trim()
;var l=d.subParser("outdent")(i,b,c),m="";return j&&b.tasklists&&(m=' class="task-list-item" style="list-style-type: none;"',l=l.replace(/^[ \t]*\[(x|X| )?]/m,function(){var a='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return k&&(a+=" checked"),a+=">"})),l=l.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,function(a){return"¨A"+a}),e||l.search(/\n{2,}/)>-1?(l=d.subParser("githubCodeBlocks")(l,b,c),l=d.subParser("blockGamut")(l,b,c)):(l=d.subParser("lists")(l,b,c),l=l.replace(/\n$/,""),l=d.subParser("hashHTMLBlocks")(l,b,c),l=l.replace(/\n\n+/g,"\n\n"),l=g?d.subParser("paragraphs")(l,b,c):d.subParser("spanGamut")(l,b,c)),l=l.replace("¨A",""),l="<li"+m+">"+l+"</li>\n"}),a=a.replace(/¨0/g,""),c.gListLevel--,e&&(a=a.replace(/\s+$/,"")),a}function f(a,c,d){var f=b.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,g=b.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,h="ul"===c?f:g,i="";return-1!==a.search(h)?function a(b){var j=b.search(h);-1!==j?(i+="\n<"+c+">\n"+e(b.slice(0,j),!!d)+"</"+c+">\n",c="ul"===c?"ol":"ul",h="ul"===c?f:g,a(b.slice(j))):i+="\n<"+c+">\n"+e(b,!!d)+"</"+c+">\n"}(a):i="\n<"+c+">\n"+e(a,!!d)+"</"+c+">\n",i}return a=c.converter._dispatch("lists.before",a,b,c),a+="¨0",a=c.gListLevel?a.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(a,b,c){return f(b,c.search(/[*+-]/g)>-1?"ul":"ol",!0)}):a.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(a,b,c,d){return f(c,d.search(/[*+-]/g)>-1?"ul":"ol",!1)}),a=a.replace(/¨0/,""),a=c.converter._dispatch("lists.after",a,b,c)}),d.subParser("outdent",function(a,b,c){"use strict";return a=c.converter._dispatch("outdent.before",a,b,c),a=a.replace(/^(\t|[ ]{1,4})/gm,"¨0"),a=a.replace(/¨0/g,""),a=c.converter._dispatch("outdent.after",a,b,c)}),d.subParser("paragraphs",function(a,b,c){"use strict";a=c.converter._dispatch("paragraphs.before",a,b,c),a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,"");for(var e=a.split(/\n{2,}/g),f=[],g=e.length,h=0;h<g;h++){var i=e[h];i.search(/¨(K|G)(\d+)\1/g)>=0?f.push(i):i.search(/\S/)>=0&&(i=d.subParser("spanGamut")(i,b,c),i=i.replace(/^([ \t]*)/g,"<p>"),i+="</p>",f.push(i))}for(g=f.length,h=0;h<g;h++){for(var j="",k=f[h],l=!1;/¨(K|G)(\d+)\1/.test(k);){var m=RegExp.$1,n=RegExp.$2;j="K"===m?c.gHtmlBlocks[n]:l?d.subParser("encodeCode")(c.ghCodeBlocks[n].text,b,c):c.ghCodeBlocks[n].codeblock,j=j.replace(/\$/g,"$$$$"),k=k.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/,j),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(k)&&(l=!0)}f[h]=k}return a=f.join("\n"),a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,""),c.converter._dispatch("paragraphs.after",a,b,c)}),d.subParser("runExtension",function(a,b,c,d){"use strict";if(a.filter)b=a.filter(b,d.converter,c);else if(a.regex){var e=a.regex;e instanceof RegExp||(e=new RegExp(e,"g")),b=b.replace(e,a.replace)}return b}),d.subParser("spanGamut",function(a,b,c){"use strict";return a=c.converter._dispatch("spanGamut.before",a,b,c),a=d.subParser("codeSpans")(a,b,c),a=d.subParser("escapeSpecialCharsWithinTagAttributes")(a,b,c),a=d.subParser("encodeBackslashEscapes")(a,b,c),a=d.subParser("images")(a,b,c),a=d.subParser("anchors")(a,b,c),a=d.subParser("autoLinks")(a,b,c),a=d.subParser("italicsAndBold")(a,b,c),a=d.subParser("strikethrough")(a,b,c),a=d.subParser("simplifiedAutoLinks")(a,b,c),a=d.subParser("hashHTMLSpans")(a,b,c),a=d.subParser("encodeAmpsAndAngles")(a,b,c),b.simpleLineBreaks?/\n\n¨K/.test(a)||(a=a.replace(/\n+/g,"<br />\n")):a=a.replace(/  +\n/g,"<br />\n"),a=c.converter._dispatch("spanGamut.after",a,b,c)}),d.subParser("strikethrough",function(a,b,c){"use strict";function e(a){return b.simplifiedAutoLink&&(a=d.subParser("simplifiedAutoLinks")(a,b,c)),"<del>"+a+"</del>"}return b.strikethrough&&(a=c.converter._dispatch("strikethrough.before",a,b,c),a=a.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,function(a,b){return e(b)}),a=c.converter._dispatch("strikethrough.after",a,b,c)),a}),d.subParser("stripLinkDefinitions",function(a,b,c){"use strict";var e=/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,f=/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+\/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;a+="¨0";var g=function(a,e,f,g,h,i,j){return e=e.toLowerCase(),f.match(/^data:.+?\/.+?;base64,/)?c.gUrls[e]=f.replace(/\s/g,""):c.gUrls[e]=d.subParser("encodeAmpsAndAngles")(f,b,c),i?i+j:(j&&(c.gTitles[e]=j.replace(/"|'/g,"&quot;")),b.parseImgDimensions&&g&&h&&(c.gDimensions[e]={width:g,height:h}),"")};return a=a.replace(f,g),a=a.replace(e,g),a=a.replace(/¨0/,"")}),d.subParser("tables",function(a,b,c){"use strict";function e(a){return/^:[ \t]*--*$/.test(a)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(a)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(a)?' style="text-align:center;"':""}function f(a,e){var f="";return a=a.trim(),(b.tablesHeaderId||b.tableHeaderId)&&(f=' id="'+a.replace(/ /g,"_").toLowerCase()+'"'),a=d.subParser("spanGamut")(a,b,c),"<th"+f+e+">"+a+"</th>\n"}function g(a,e){return"<td"+e+">"+d.subParser("spanGamut")(a,b,c)+"</td>\n"}function h(a,b){for(var c="<table>\n<thead>\n<tr>\n",d=a.length,e=0;e<d;++e)c+=a[e];for(c+="</tr>\n</thead>\n<tbody>\n",e=0;e<b.length;++e){c+="<tr>\n";for(var f=0;f<d;++f)c+=b[e][f];c+="</tr>\n"}return c+="</tbody>\n</table>\n"}function i(a){var b,c=a.split("\n");for(b=0;b<c.length;++b)/^ {0,3}\|/.test(c[b])&&(c[b]=c[b].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(c[b])&&(c[b]=c[b].replace(/\|[ \t]*$/,""));var i=c[0].split("|").map(function(a){return a.trim()}),j=c[1].split("|").map(function(a){return a.trim()}),k=[],l=[],m=[],n=[];for(c.shift(),c.shift(),b=0;b<c.length;++b)""!==c[b].trim()&&k.push(c[b].split("|").map(function(a){return a.trim()}));if(i.length<j.length)return a;for(b=0;b<j.length;++b)m.push(e(j[b]));for(b=0;b<i.length;++b)d.helper.isUndefined(m[b])&&(m[b]=""),l.push(f(i[b],m[b]));for(b=0;b<k.length;++b){for(var o=[],p=0;p<l.length;++p)d.helper.isUndefined(k[b][p]),o.push(g(k[b][p],m[p]));n.push(o)}return h(l,n)}if(!b.tables)return a;var j=/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,k=/^ {0,3}\|.+\|\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|\n( {0,3}\|.+\|\n)*(?:\n|¨0)/gm;return a=c.converter._dispatch("tables.before",a,b,c),a=a.replace(/\\(\|)/g,d.helper.escapeCharactersCallback),a=a.replace(j,i),a=a.replace(k,i),a=c.converter._dispatch("tables.after",a,b,c)}),d.subParser("unescapeSpecialChars",function(a,b,c){"use strict";return a=c.converter._dispatch("unescapeSpecialChars.before",a,b,c),a=a.replace(/¨E(\d+)E/g,function(a,b){var c=parseInt(b);return String.fromCharCode(c)}),a=c.converter._dispatch("unescapeSpecialChars.after",a,b,c)});var r=this;"function"==typeof define&&define.amd?define(function(){"use strict";return d}):"undefined"!=typeof module&&module.exports?module.exports=d:r.showdown=d}).call(this);
//# sourceMappingURL=showdown.min.js.map

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Siema",[],t):"object"==typeof exports?exports.Siema=t():e.Siema=t()}(this,function(){return function(e){function t(s){if(i[s])return i[s].exports;var r=i[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,s){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,i){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),o=function(){function e(t){var i=this;s(this,e),this.config=e.mergeSettings(t),this.selector="string"==typeof this.config.selector?document.querySelector(this.config.selector):this.config.selector,this.selectorWidth=this.selector.offsetWidth,this.innerElements=[].slice.call(this.selector.children),this.currentSlide=this.config.startIndex,this.transformProperty=e.webkitOrNot(),["resizeHandler","touchstartHandler","touchendHandler","touchmoveHandler","mousedownHandler","mouseupHandler","mouseleaveHandler","mousemoveHandler"].forEach(function(e){i[e]=i[e].bind(i)}),this.init()}return n(e,[{key:"init",value:function(){if(window.addEventListener("resize",this.resizeHandler),this.config.draggable&&(this.pointerDown=!1,this.drag={startX:0,endX:0,startY:0,letItGo:null},this.selector.addEventListener("touchstart",this.touchstartHandler),this.selector.addEventListener("touchend",this.touchendHandler),this.selector.addEventListener("touchmove",this.touchmoveHandler,{passive:!0}),this.selector.addEventListener("mousedown",this.mousedownHandler),this.selector.addEventListener("mouseup",this.mouseupHandler),this.selector.addEventListener("mouseleave",this.mouseleaveHandler),this.selector.addEventListener("mousemove",this.mousemoveHandler)),null===this.selector)throw new Error("Something wrong with your selector 😭");this.resolveSlidesNumber(),this.selector.style.overflow="hidden",this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.config.draggable&&(this.selector.style.cursor="-webkit-grab");for(var e=document.createDocumentFragment(),t=0;t<this.innerElements.length;t++){var i=document.createElement("div");i.style.cssFloat="left",i.style.float="left",i.style.width=100/this.innerElements.length+"%",i.appendChild(this.innerElements[t]),e.appendChild(i)}this.sliderFrame.appendChild(e),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent(),this.config.onInit.call(this)}},{key:"resolveSlidesNumber",value:function(){if("number"==typeof this.config.perPage)this.perPage=this.config.perPage;else if("object"===r(this.config.perPage)){this.perPage=1;for(var e in this.config.perPage)window.innerWidth>=e&&(this.perPage=this.config.perPage[e])}}},{key:"prev",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;0===this.currentSlide&&this.config.loop?this.currentSlide=this.innerElements.length-this.perPage:this.currentSlide=Math.max(this.currentSlide-e,0),i!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"next",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;this.currentSlide===this.innerElements.length-this.perPage&&this.config.loop?this.currentSlide=0:this.currentSlide=Math.min(this.currentSlide+e,this.innerElements.length-this.perPage),i!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"goTo",value:function(e,t){this.innerElements.length<=this.perPage||(this.currentSlide=Math.min(Math.max(e,0),this.innerElements.length-this.perPage),this.slideToCurrent(),t&&t.call(this))}},{key:"slideToCurrent",value:function(){this.sliderFrame.style[this.transformProperty]="translate3d(-"+this.currentSlide*(this.selectorWidth/this.perPage)+"px, 0, 0)"}},{key:"updateAfterDrag",value:function(){var e=this.drag.endX-this.drag.startX,t=Math.abs(e),i=Math.ceil(t/(this.selectorWidth/this.perPage));e>0&&t>this.config.threshold&&this.innerElements.length>this.perPage?this.prev(i):e<0&&t>this.config.threshold&&this.innerElements.length>this.perPage&&this.next(i),this.slideToCurrent()}},{key:"resizeHandler",value:function(){this.resolveSlidesNumber(),this.selectorWidth=this.selector.offsetWidth,this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.slideToCurrent()}},{key:"clearDrag",value:function(){this.drag={startX:0,endX:0,startY:0,letItGo:null}}},{key:"touchstartHandler",value:function(e){e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.touches[0].pageX,this.drag.startY=e.touches[0].pageY}},{key:"touchendHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"touchmoveHandler",value:function(e){e.stopPropagation(),null===this.drag.letItGo&&(this.drag.letItGo=Math.abs(this.drag.startY-e.touches[0].pageY)<Math.abs(this.drag.startX-e.touches[0].pageX)),this.pointerDown&&this.drag.letItGo&&(this.drag.endX=e.touches[0].pageX,this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing,this.sliderFrame.style[this.transformProperty]="translate3d("+(this.currentSlide*(this.selectorWidth/this.perPage)+(this.drag.startX-this.drag.endX))*-1+"px, 0, 0)")}},{key:"mousedownHandler",value:function(e){e.preventDefault(),e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.pageX}},{key:"mouseupHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"mousemoveHandler",value:function(e){e.preventDefault(),this.pointerDown&&(this.drag.endX=e.pageX,this.selector.style.cursor="-webkit-grabbing",this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing,this.sliderFrame.style[this.transformProperty]="translate3d("+(this.currentSlide*(this.selectorWidth/this.perPage)+(this.drag.startX-this.drag.endX))*-1+"px, 0, 0)")}},{key:"mouseleaveHandler",value:function(e){this.pointerDown&&(this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.drag.endX=e.pageX,this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.updateAfterDrag(),this.clearDrag())}},{key:"updateFrame",value:function(){this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.config.draggable&&(this.selector.style.cursor="-webkit-grab");for(var e=document.createDocumentFragment(),t=0;t<this.innerElements.length;t++){var i=document.createElement("div");i.style.cssFloat="left",i.style.float="left",i.style.width=100/this.innerElements.length+"%",i.appendChild(this.innerElements[t]),e.appendChild(i)}this.sliderFrame.appendChild(e),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent()}},{key:"remove",value:function(e,t){if(e<0||e>this.innerElements.length)throw new Error("Item to remove doesn't exist 😭");this.innerElements.splice(e,1),this.currentSlide=e<this.currentSlide?this.currentSlide-1:this.currentSlide,this.updateFrame(),t&&t.call(this)}},{key:"insert",value:function(e,t,i){if(t<0||t>this.innerElements.length+1)throw new Error("Unable to inset it at this index 😭");if(this.innerElements.indexOf(e)!==-1)throw new Error("The same item in a carousel? Really? Nope 😭");this.innerElements.splice(t,0,e),this.currentSlide=t<=this.currentSlide?this.currentSlide+1:this.currentSlide,this.updateFrame(),i&&i.call(this)}},{key:"prepend",value:function(e,t){this.insert(e,0),t&&t.call(this)}},{key:"append",value:function(e,t){this.insert(e,this.innerElements.length+1),t&&t.call(this)}},{key:"destroy",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments[1];if(window.removeEventListener("resize",this.resizeHandler),this.selector.style.cursor="auto",this.selector.removeEventListener("touchstart",this.touchstartHandler),this.selector.removeEventListener("touchend",this.touchendHandler),this.selector.removeEventListener("touchmove",this.touchmoveHandler),this.selector.removeEventListener("mousedown",this.mousedownHandler),this.selector.removeEventListener("mouseup",this.mouseupHandler),this.selector.removeEventListener("mouseleave",this.mouseleaveHandler),this.selector.removeEventListener("mousemove",this.mousemoveHandler),e){for(var i=document.createDocumentFragment(),s=0;s<this.innerElements.length;s++)i.appendChild(this.innerElements[s]);this.selector.innerHTML="",this.selector.appendChild(i),this.selector.removeAttribute("style")}t&&t.call(this)}}],[{key:"mergeSettings",value:function(e){var t={selector:".siema",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,threshold:20,loop:!1,onInit:function(){},onChange:function(){}},i=e;for(var s in i)t[s]=i[s];return t}},{key:"webkitOrNot",value:function(){var e=document.documentElement.style;return"string"==typeof e.transform?"transform":"WebkitTransform"}}]),e}();t.default=o,e.exports=t.default}])});
!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof module&&module.exports?module.exports=b():a.svg4everybody=b()}(this,function(){function a(a,b,c){if(c){var d=document.createDocumentFragment(),e=!b.hasAttribute("viewBox")&&c.getAttribute("viewBox");e&&b.setAttribute("viewBox",e);for(var f=c.cloneNode(!0);f.childNodes.length;)d.appendChild(f.firstChild);a.appendChild(d)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=b._cachedDocument;c||(c=b._cachedDocument=document.implementation.createHTMLDocument(""),c.body.innerHTML=b.responseText,b._cachedTarget={}),b._embeds.splice(0).map(function(d){var e=b._cachedTarget[d.id];e||(e=b._cachedTarget[d.id]=c.getElementById(d.id)),a(d.parent,d.svg,e)})}},b.onreadystatechange()}function c(c){function e(){for(var c=0;c<o.length;){var h=o[c],i=h.parentNode,j=d(i),k=h.getAttribute("xlink:href")||h.getAttribute("href");if(!k&&g.attributeName&&(k=h.getAttribute(g.attributeName)),j&&k){if(f)if(!g.validate||g.validate(k,j,h)){i.removeChild(h);var l=k.split("#"),q=l.shift(),r=l.join("#");if(q.length){var s=m[q];s||(s=m[q]=new XMLHttpRequest,s.open("GET",q),s.send(),s._embeds=[]),s._embeds.push({parent:i,svg:j,id:r}),b(s)}else a(i,j,document.getElementById(r))}else++c,++p}else++c}(!o.length||o.length-p>0)&&n(e,67)}var f,g=Object(c),h=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,i=/\bAppleWebKit\/(\d+)\b/,j=/\bEdge\/12\.(\d+)\b/,k=/\bEdge\/.(\d+)\b/,l=window.top!==window.self;f="polyfill"in g?g.polyfill:h.test(navigator.userAgent)||(navigator.userAgent.match(j)||[])[1]<10547||(navigator.userAgent.match(i)||[])[1]<537||k.test(navigator.userAgent)&&l;var m={},n=window.requestAnimationFrame||setTimeout,o=document.getElementsByTagName("use"),p=0;f&&e()}function d(a){for(var b=a;"svg"!==b.nodeName.toLowerCase()&&(b=b.parentNode););return b}return c});
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function openOverlay() {
	$('.js-overlay').addClass('is-open'); // Find element with the class 'js-menu-container' and apply an additional class of 'is-open'
}

function closeOverlay() {
	$('.js-overlay').removeClass('is-open'); // Find element with the class 'js-menu-container' and remove the class 'is-open'
}

function updateOverlayButton() {
	$('.js-overlay-button').find('.menu-icon').toggleClass('is-active');
}

function updateMenuButton() {
	$('.js-menu-button').find('.menu-icon').toggleClass('is-active');
}

svg4everybody();

$(document).ready(function () {

	// Select Menus
	$('select').niceSelect();

	// Accordions
	var accordion__title = '.js-accordion__title';
	var accordion__content = '.js-accordion__content';

	$(accordion__content).slideUp();
	$('.is-active').parent().find(accordion__content).slideDown();

	$(accordion__title).click(function () {
		$(this).toggleClass('is-active');
		$(this).next(accordion__content).slideToggle();
		return false;
	});

	// Carousels
	var carousels = $('.js-carousel');

	// Generate Slider Objects
	$(carousels).each(function () {

		var currentSlide = 0;

		// Init Sliders and set options
		var carousel = new Siema({
			selector: this,
			duration: 200,
			easing: 'ease-out',
			perPage: 1,
			startIndex: 0,
			draggable: true,
			threshold: 20,
			loop: true,
			onInit: activePagination,
			onChange: activePagination
		});

		// Slider autoplay
		setInterval(function () {
			return carousel.next();
		}, 5000);

		// Next and Previous Navigation
		var carousel_prev = $(this).parent().find('.js-carousel__prev');
		var carousel_next = $(this).parent().find('.js-carousel__next');

		$(carousel_prev).click(function () {
			carousel.prev();
		});

		$(carousel_next).click(function () {
			carousel.next();
		});

		// Pagiation
		Siema.prototype.addPagination = function () {
			var _this = this;

			var pagination_container = $(this).parent().find('.js-carousel-pagination');

			var _loop = function _loop(i) {
				var button = document.createElement('button');
				button.className = 'carousel__pagination-button carousel__pagination-button--' + i;
				button.textContent = i + 1;

				if (i === 0) {
					button.className = 'carousel__pagination-button carousel__pagination-button--' + i + ' is-active';
				}

				$(button).click(function () {
					carousel.goTo(i);
					currentSlide = i;
					$(this).parent().find('.carousel__pagination-button').removeClass('is-active');
					$(this).parent().find('.carousel__pagination-button--' + currentSlide).addClass('is-active');
				});

				_this.selector.parentElement.lastElementChild.appendChild(button);
			};

			for (var i = 0; i < carousel.innerElements.length; i++) {
				_loop(i);
			}
		};

		// Active States for Pagination
		function activePagination() {

			currentSlide = this.currentSlide;
			$(this.selector).parent().find('.carousel__pagination-button').removeClass('is-active');
			$(this.selector).parent().find('.carousel__pagination-button--' + currentSlide).addClass('is-active');
		}

		// Trigger pagination creator
		carousel.addPagination();
	});

	// Multi Carousel
	var multiCarousels = $('.js-multi-carousel');

	// Generate Slider Objects
	$(multiCarousels).each(function () {

		var currentSlide = 0;

		// Init Sliders and set options
		var carousel = new Siema(_defineProperty({
			selector: this,
			duration: 200,
			easing: 'ease-out',
			perPage: 1,
			startIndex: 0,
			draggable: true,
			threshold: 20,
			loop: true
		}, 'perPage', {
			800: 1,
			1200: 2,
			1600: 3
		}));

		// Next and Previous Navigation
		var carousel_prev = $(this).parent().find('.js-carousel__prev');
		var carousel_next = $(this).parent().find('.js-carousel__next');

		$(carousel_prev).click(function () {
			carousel.prev();
		});

		$(carousel_next).click(function () {
			carousel.next();
		});
	});

	// Menu Button
	$('.js-menu-button').click(function (e) {

		e.preventDefault();
		updateMenuButton();
	});

	// Overlay
	$('.js-overlay-open').click(function () {
		openOverlay();
		updateOverlayButton();
	});

	$('.js-overlay-close').click(function () {
		closeOverlay();
		updateOverlayButton();
	});

	// Smooth Scrolling
	$('#toc a').click(function () {
		console.log('clicked');
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 500);
	});
});