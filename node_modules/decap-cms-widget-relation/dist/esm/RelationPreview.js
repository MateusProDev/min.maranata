"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _decapCmsUiDefault = require("decap-cms-ui-default");
var _react2 = require("@emotion/react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function RelationPreview({
  value
}) {
  return (0, _react2.jsx)(_decapCmsUiDefault.WidgetPreviewContainer, null, value);
}
RelationPreview.propTypes = {
  value: _propTypes.default.node
};
var _default = exports.default = RelationPreview;