(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.CardMove = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.cardmove = mod.exports;
  }
})(this, function (module) {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var CardMove = function () {
    function CardMove(selector, options) {
      _classCallCheck(this, CardMove);

      this.resolveOptions(options);
      this.listenMove(selector);
    }

    _createClass(CardMove, [{
      key: 'resolveOptions',
      value: function resolveOptions() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        this.angle = typeof options.angle === 'number' ? options.angle : 30;
        this.perspective = typeof options.perspective === 'number' ? options.perspective : 300;
        this.horizontal = typeof options.horizontal === 'boolean' ? options.horizontal : true;
        this.vertical = typeof options.vertical === 'boolean' ? options.vertical : true;
        this.speed = typeof options.speed === 'number' ? options.speed : 500;
      }
    }, {
      key: 'listenMove',
      value: function listenMove(selector) {
        var elements = document.querySelectorAll(selector);
        for (var i = 0; i < elements.length; i++) {
          this.onMove(elements[i]);
        }
      }
    }, {
      key: 'onMove',
      value: function onMove(panel) {
        var content = panel.querySelector('.card-content');

        var angle = typeof this.getAttr(panel, 'angle') === 'number' ? this.getAttr(panel, 'angle') : this.angle;
        var perspective = typeof this.getAttr(panel, 'perspective') === 'number' ? this.getAttr(panel, 'perspective') : this.perspective;
        var horizontal = typeof this.getAttr(panel, 'horizontal') === 'boolean' ? this.getAttr(panel, 'horizontal') : this.horizontal;
        var vertical = typeof this.getAttr(panel, 'vertical') === 'boolean' ? this.getAttr(panel, 'vertical') : this.vertical;
        var speed = typeof this.getAttr(panel, 'speed') === 'number' ? this.getAttr(panel, 'speed') : this.speed;

        content.style.transition = 'all ' + speed + 'ms cubic-bezier(.40, .575, .565, 1)';

        panel.addEventListener('mouseout', function (e) {
          content.style.transform = 'perspective(' + perspective + 'px)\n                                 rotateY(0deg)\n                                 rotateX(0deg)';
        });

        panel.addEventListener('mousemove', function (e) {
          var w = panel.clientWidth;
          var h = panel.clientHeight;

          var x = vertical ? (1 - (e.offsetY - h * 0.5)) / h * angle : 0;
          var y = horizontal ? (e.offsetX - w * 0.5) / w * angle : 0;

          content.style.transform = 'perspective(' + perspective + 'px)\n                                 rotateX(' + x + 'deg)\n                                 rotateY(' + y + 'deg)';
        });
      }
    }, {
      key: 'getAttr',
      value: function getAttr(selector, attr) {
        attr = 'data-card-' + attr;

        if (selector.hasAttribute(attr)) {
          return JSON.parse(selector.getAttribute(attr));
        }
      }
    }]);

    return CardMove;
  }();

  module.exports = CardMove;
});

},{}]},{},[1])(1)
});