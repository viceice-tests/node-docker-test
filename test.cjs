'use strict';
const assert = require('node:assert');
const { test } = require('node:test');

test('loads module', () => {
  assert.doesNotThrow(() => require('@swc/core-win32-x64-msvc'));
});
