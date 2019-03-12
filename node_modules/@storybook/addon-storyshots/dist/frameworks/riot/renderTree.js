"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _global = require("global");

const riotForStorybook = require.requireActual('@storybook/riot');

function bootstrapADocumentAndReturnANode() {
  const rootElement = _global.document.createElement('div');

  rootElement.id = 'root';
  _global.document.body = _global.document.createElement('body');

  _global.document.body.appendChild(rootElement);

  return rootElement;
}

function makeSureThatResultIsRenderedSomehow({
  context,
  result,
  rootElement
}) {
  if (!rootElement.firstChild) {
    riotForStorybook.render({
      storyFn: () => result,
      selectedKind: context.kind,
      selectedStory: context.name
    });
  }
}

function getRenderedTree(story, context) {
  const rootElement = bootstrapADocumentAndReturnANode();
  const result = story.render();
  makeSureThatResultIsRenderedSomehow({
    context,
    result,
    rootElement
  });
  return rootElement;
}

var _default = getRenderedTree;
exports.default = _default;