'use strict';

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = MockData;

var _stripJsonComments = require('strip-json-comments');

var _stripJsonComments2 = _interopRequireDefault(_stripJsonComments);

var _ParsersParser = require('./Parsers/Parser');

var _ParsersParser2 = _interopRequireDefault(_ParsersParser);

var parser = new _ParsersParser2['default']();

function MockData(definition, configMock) {
  var schema = definition.schema;

  if (!schema) return null;

  var mock = null;

  if (configMock.useExamples) {
    if (configMock.useExamples && definition.examples) {
      var keys = _Object$keys(definition.examples);
      var key = keys.find(function (obj) {
        return obj.includes('json');
      });
      if (key) {
        mock = definition.examples[key];
        if (typeof mock === 'string') {
          mock = (0, _stripJsonComments2['default'])(mock);
          mock = JSON.parse(mock);
        }
      }
      if (configMock.extendExamples) {
        mock = _Object$assign(parser.parse(schema), mock);
      }
    }
  }

  if (!mock) {
    mock = parser.parse(schema);
  }

  return mock;
}

;
module.exports = exports['default'];