'use strict';
const assert = require('node:assert');
const { test } = require('node:test');
const fs = require('node:fs');

test('module exists', () => {
  const f = require.resolve('@swc/core-win32-x64-msvc');
  assert.ok(f);
  console.log(f);
  assert.ok(fs.existsSync(f));
});

test('loads module', () => {
  assert.doesNotThrow(() => require('@swc/core-win32-x64-msvc'));
});
