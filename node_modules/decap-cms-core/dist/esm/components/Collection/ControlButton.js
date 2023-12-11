"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlButton = ControlButton;
var _base = _interopRequireDefault(require("@emotion/styled/base"));
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@emotion/react");
var _decapCmsUiDefault = require("decap-cms-ui-default");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Button = /*#__PURE__*/(0, _base.default)(_decapCmsUiDefault.StyledDropdownButton, {
  target: "e1obtllk0",
  label: "Button"
})(_decapCmsUiDefault.buttons.button, ";", _decapCmsUiDefault.buttons.medium, ";", _decapCmsUiDefault.buttons.grayText, ";font-size:14px;&:after{top:11px;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbGxlY3Rpb24vQ29udHJvbEJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLMkMiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ29sbGVjdGlvbi9Db250cm9sQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGJ1dHRvbnMsIFN0eWxlZERyb3Bkb3duQnV0dG9uLCBjb2xvcnMgfSBmcm9tICdkZWNhcC1jbXMtdWktZGVmYXVsdCc7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZChTdHlsZWREcm9wZG93bkJ1dHRvbilgXG4gICR7YnV0dG9ucy5idXR0b259O1xuICAke2J1dHRvbnMubWVkaXVtfTtcbiAgJHtidXR0b25zLmdyYXlUZXh0fTtcbiAgZm9udC1zaXplOiAxNHB4O1xuXG4gICY6YWZ0ZXIge1xuICAgIHRvcDogMTFweDtcbiAgfVxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIENvbnRyb2xCdXR0b24oeyBhY3RpdmUsIHRpdGxlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uXG4gICAgICBjc3M9e2Nzc2BcbiAgICAgICAgY29sb3I6ICR7YWN0aXZlID8gY29sb3JzLmFjdGl2ZSA6IHVuZGVmaW5lZH07XG4gICAgICBgfVxuICAgID5cbiAgICAgIHt0aXRsZX1cbiAgICA8L0J1dHRvbj5cbiAgKTtcbn1cbiJdfQ== */"));
function ControlButton({
  active,
  title
}) {
  return (0, _react2.jsx)(Button, {
    css: /*#__PURE__*/(0, _react2.css)("color:", active ? _decapCmsUiDefault.colors.active : undefined, ";;label:ControlButton;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbGxlY3Rpb24vQ29udHJvbEJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmMiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ29sbGVjdGlvbi9Db250cm9sQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGJ1dHRvbnMsIFN0eWxlZERyb3Bkb3duQnV0dG9uLCBjb2xvcnMgfSBmcm9tICdkZWNhcC1jbXMtdWktZGVmYXVsdCc7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZChTdHlsZWREcm9wZG93bkJ1dHRvbilgXG4gICR7YnV0dG9ucy5idXR0b259O1xuICAke2J1dHRvbnMubWVkaXVtfTtcbiAgJHtidXR0b25zLmdyYXlUZXh0fTtcbiAgZm9udC1zaXplOiAxNHB4O1xuXG4gICY6YWZ0ZXIge1xuICAgIHRvcDogMTFweDtcbiAgfVxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIENvbnRyb2xCdXR0b24oeyBhY3RpdmUsIHRpdGxlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uXG4gICAgICBjc3M9e2Nzc2BcbiAgICAgICAgY29sb3I6ICR7YWN0aXZlID8gY29sb3JzLmFjdGl2ZSA6IHVuZGVmaW5lZH07XG4gICAgICBgfVxuICAgID5cbiAgICAgIHt0aXRsZX1cbiAgICA8L0J1dHRvbj5cbiAgKTtcbn1cbiJdfQ== */"))
  }, title);
}