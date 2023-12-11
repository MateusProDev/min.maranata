"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactImmutableProptypes = _interopRequireDefault(require("react-immutable-proptypes"));
var _react2 = require("@emotion/react");
var _decapCmsUiDefault = require("decap-cms-ui-default");
const _excluded = ["isActive"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function BooleanBackground(_ref) {
  let {
      isActive
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return (0, _react2.jsx)(_decapCmsUiDefault.ToggleBackground, _extends({
    css: /*#__PURE__*/(0, _react2.css)("background-color:", isActive ? _decapCmsUiDefault.colors.active : _decapCmsUiDefault.colors.textFieldBorder, ";;label:BooleanBackground;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Cb29sZWFuQ29udHJvbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTYyIsImZpbGUiOiIuLi8uLi9zcmMvQm9vbGVhbkNvbnRyb2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyBUb2dnbGUsIFRvZ2dsZUJhY2tncm91bmQsIGNvbG9ycyB9IGZyb20gJ2RlY2FwLWNtcy11aS1kZWZhdWx0JztcblxuZnVuY3Rpb24gQm9vbGVhbkJhY2tncm91bmQoeyBpc0FjdGl2ZSwgLi4ucHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxUb2dnbGVCYWNrZ3JvdW5kXG4gICAgICBjc3M9e2Nzc2BcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtpc0FjdGl2ZSA/IGNvbG9ycy5hY3RpdmUgOiBjb2xvcnMudGV4dEZpZWxkQm9yZGVyfTtcbiAgICAgIGB9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9vbGVhbkNvbnRyb2wgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgZm9ySUQsIG9uQ2hhbmdlLCBjbGFzc05hbWVXcmFwcGVyLCBzZXRBY3RpdmVTdHlsZSwgc2V0SW5hY3RpdmVTdHlsZSB9ID1cbiAgICAgIHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVXcmFwcGVyfT5cbiAgICAgICAgPFRvZ2dsZVxuICAgICAgICAgIGlkPXtmb3JJRH1cbiAgICAgICAgICBhY3RpdmU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICBvbkZvY3VzPXtzZXRBY3RpdmVTdHlsZX1cbiAgICAgICAgICBvbkJsdXI9e3NldEluYWN0aXZlU3R5bGV9XG4gICAgICAgICAgQmFja2dyb3VuZD17Qm9vbGVhbkJhY2tncm91bmR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkJvb2xlYW5Db250cm9sLnByb3BUeXBlcyA9IHtcbiAgZmllbGQ6IEltbXV0YWJsZVByb3BUeXBlcy5tYXAuaXNSZXF1aXJlZCxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZVdyYXBwZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2V0QWN0aXZlU3R5bGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNldEluYWN0aXZlU3R5bGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGZvcklEOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5Cb29sZWFuQ29udHJvbC5kZWZhdWx0UHJvcHMgPSB7XG4gIHZhbHVlOiBmYWxzZSxcbn07XG4iXX0= */"))
  }, props));
}
class BooleanControl extends _react.default.Component {
  render() {
    const {
      value,
      forID,
      onChange,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle
    } = this.props;
    return (0, _react2.jsx)("div", {
      className: classNameWrapper
    }, (0, _react2.jsx)(_decapCmsUiDefault.Toggle, {
      id: forID,
      active: value,
      onChange: onChange,
      onFocus: setActiveStyle,
      onBlur: setInactiveStyle,
      Background: BooleanBackground
    }));
  }
}
exports.default = BooleanControl;
BooleanControl.propTypes = {
  field: _reactImmutableProptypes.default.map.isRequired,
  onChange: _propTypes.default.func.isRequired,
  classNameWrapper: _propTypes.default.string.isRequired,
  setActiveStyle: _propTypes.default.func.isRequired,
  setInactiveStyle: _propTypes.default.func.isRequired,
  forID: _propTypes.default.string,
  value: _propTypes.default.bool
};
BooleanControl.defaultProps = {
  value: false
};