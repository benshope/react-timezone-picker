"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-extraneous-dependencies
function getRenderedTree(story) {
  const component = story.render();
  const vm = new _vue.default({
    render(h) {
      return h(component);
    }

  });
  return vm.$mount().$el;
}

var _default = getRenderedTree;
exports.default = _default;