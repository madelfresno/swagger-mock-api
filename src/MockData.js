'use strict';

import stripJsonComments from 'strip-json-comments';

import Parser from './Parsers/Parser'

let parser = new Parser();

export default function MockData(definition, configMock) {
  let schema = definition.schema;

  if (!schema) return null;

  let mock = null;

  if (configMock.useExamples) {
    if (configMock.useExamples && typeof(definition.examples) === 'object') {
      mock = definition.examples;
      if (configMock.extendExamples) {
        mock = Object.assign(parser.parse(schema), mock);
      }
    }
  }

  if (!mock) {
    mock = parser.parse(schema);
  }

  return mock;
};
