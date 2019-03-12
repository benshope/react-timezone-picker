"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _global = require("global");

function getRenderedTree(story) {
  const component = story.render();

  if (component instanceof _global.Node) {
    return component;
  }

  const section = _global.document.createElement('section');

  section.innerHTML = component;

  if (section.childElementCount > 1) {
    return section;
  }

  return section.firstChild;
}

var _default = getRenderedTree;
exports.default = _default;