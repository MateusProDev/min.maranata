"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  fromFile(content) {
    return JSON.parse(content);
  },
  toFile(data) {
    return JSON.stringify(data, null, 2);
  }
};