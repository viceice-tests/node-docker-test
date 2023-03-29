'use strict';
const assert = require('node:assert');
const { test } = require('node:test');
const fs = require('node:fs');
const { dlopen, arch, platform } = require('node:process');
const { constants } = require('node:os');

test('uses right node arch and platform', () => {
  assert.equal(platform, 'win32');
  assert.equal(arch, 'x64');
});

test('module exists', () => {
  const f = require.resolve('@swc/core-win32-x64-msvc');
  assert.ok(f);
  console.log(f);
  assert.ok(fs.existsSync(f));
});

test('loads module with require', () => {
  assert.doesNotThrow(() => require('@swc/core-win32-x64-msvc'));
});

test('loads module with require', () => {
  const module = { exports: {} };
  const f = require.resolve('@swc/core-win32-x64-msvc');
  dlopen(module, f, constants.dlopen.RTLD_NOW);
  assert.ok(module.exports.minify);
});
