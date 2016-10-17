'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _chance = require('chance');

var _chance2 = _interopRequireDefault(_chance);

var chance = new _chance2['default']();

var isDate = RegExp.prototype.test.bind(/^date$/);

var DateParser = (function () {
  function DateParser() {
    _classCallCheck(this, DateParser);
  }

  _createClass(DateParser, [{
    key: 'canParse',
    value: function canParse(node) {
      return isDate(node.type) || isDate(node.format);
    }
  }, {
    key: 'parse',
    value: function parse(node) {
      return chance.date(_Object$assign({
        string: true
      }, node['x-type-options']));
    }
  }]);

  return DateParser;
})();

exports['default'] = DateParser;
module.exports = exports['default'];