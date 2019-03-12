"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _global = _interopRequireDefault(require("global"));

var _configure = _interopRequireDefault(require("../configure"));

var _hasDependency = _interopRequireDefault(require("../hasDependency"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx h */
function test(options) {
  return options.framework === 'preact' || !options.framework && (0, _hasDependency.default)('@storybook/preact');
}

function load(options) {
  _global.default.STORYBOOK_ENV = 'preact';
  const {
    configPath,
    config
  } = options;

  const storybook = require.requireActual('@storybook/preact');

  (0, _configure.default)({
    configPath,
    config,
    storybook
  });
  return {
    framework: 'preact',
    renderTree: require.requireActual('./renderTree').default,
    renderShallowTree: () => {
      throw new Error('Shallow renderer is not supported for preact');
    },
    storybook
  };
}

var _default = {
  load,
  test
};
exports.default = _default;