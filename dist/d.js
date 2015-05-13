(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _objectAssign;

function _objectAssign(target, source) {
  var keys = Object.keys(source);
  keys.forEach(function (key) {
    return target[key] = source[key];
  });
}

module.exports = exports["default"];

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _toArray;

function _toArray(arrayLike) {
  return [].slice.call(arrayLike);
}

module.exports = exports["default"];

},{}],3:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _utilToArray = require('./util/toArray');

var _utilToArray2 = _interopRequireDefault(_utilToArray);

var _utilObjectAssign = require('./util/objectAssign');

var _utilObjectAssign2 = _interopRequireDefault(_utilObjectAssign);

var DOM = (function () {
  function DOM(selector) {
    _classCallCheck(this, DOM);

    var elements = document.querySelectorAll(selector);
    this.length = elements.length;
    _utilObjectAssign2['default'](this, elements);
  }

  _createClass(DOM, [{
    key: 'map',
    value: function map(fn) {
      _utilToArray2['default'](this).map(function (el) {
        return fn.call(el, el);
      });
      return this;
    }
  }, {
    key: 'each',
    value: function each(fn) {
      _utilToArray2['default'](this).forEach(function (el) {
        return fn.call(el, el);
      });
      return this;
    }
  }, {
    key: 'reduce',
    value: function reduce(fn) {
      _utilToArray2['default'](this).forEach(function (el) {
        return fn.call(el, el);
      });
      return this;
    }
  }, {
    key: 'addClass',
    value: function addClass(classNames) {
      var classes = classNames.split(' ');
      return this.map(function (el) {
        var _el$classList;

        return (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classes));
      });
    }
  }, {
    key: 'removeClass',
    value: function removeClass(classNames) {
      var classes = classNames.split(' ');
      return this.map(function (el) {
        var _el$classList2;

        return (_el$classList2 = el.classList).add.apply(_el$classList2, _toConsumableArray(classes));
      });
    }
  }, {
    key: 'toggleClass',
    value: function toggleClass(classNames) {
      var classes = classNames.split(' ');
      return this.map(function (el) {
        var _el$classList3;

        return (_el$classList3 = el.classList).toggle.apply(_el$classList3, _toConsumableArray(classes));
      });
    }
  }, {
    key: 'hasClass',
    value: function hasClass(className) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _utilToArray2['default'](this)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var el = _step.value;

          if (el.classList.contains(className)) {
            return true;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return false;
    }
  }, {
    key: 'on',
    value: function on(eventNames, callback) {
      var _this = this;

      var events = eventNames.split(' ');
      events.forEach(function (event) {
        return _this.map(function (el) {
          return el.addEventListener(event, callback, false);
        });
      });
      return this;
    }
  }, {
    key: 'attr',
    value: function attr(attributeName) {
      var value = arguments[1] === undefined ? null : arguments[1];

      if (value == null) {
        return this[0][attributeName];
      } else {
        return this.each(function (el) {
          return el[attributeName] = value;
        });
      }
    }
  }, {
    key: 'val',
    value: function val() {
      var value = arguments[0] === undefined ? null : arguments[0];

      if (value == null) {
        return this.attr('value');
      } else {
        this.attr('value', value);
      }
    }
  }, {
    key: 'text',
    value: function text() {
      var value = arguments[0] === undefined ? null : arguments[0];

      if (value == null) {
        return this.attr('textContent');
      } else {
        this.attr('textContent', value);
      }
    }
  }, {
    key: 'show',
    value: function show() {
      return this.each(function (el) {
        return el.style.display = '';
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      return this.each(function (el) {
        return el.style.display = 'none';
      });
    }
  }]);

  return DOM;
})();

window.$ = window.d = function (selector) {
  return new DOM(selector);
};

},{"./util/objectAssign":1,"./util/toArray":2}]},{},[3]);
