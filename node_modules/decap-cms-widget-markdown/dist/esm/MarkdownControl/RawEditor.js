"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _base = _interopRequireDefault(require("@emotion/styled/base"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactImmutableProptypes = _interopRequireDefault(require("react-immutable-proptypes"));
var _react2 = require("@emotion/react");
var _decapCmsUiDefault = require("decap-cms-ui-default");
var _slate = require("slate");
var _slateReact = require("slate-react");
var _slateHistory = require("slate-history");
var _styles = require("../styles");
var _Toolbar = _interopRequireDefault(require("./Toolbar"));
var _defaultEmptyBlock = _interopRequireDefault(require("./plugins/blocks/defaultEmptyBlock"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
function rawEditorStyles({
  minimal
}) {
  return `
  position: relative;
  overflow: hidden;
  overflow-x: auto;
  min-height: ${minimal ? 'auto' : _decapCmsUiDefault.lengths.richTextEditorMinHeight};
  font-family: ${_decapCmsUiDefault.fonts.mono};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: 0;
  margin-top: -${_styles.editorStyleVars.stickyDistanceBottom};
`;
}
const RawEditorContainer = /*#__PURE__*/(0, _base.default)("div", {
  target: "e12tj7710",
  label: "RawEditorContainer"
})(process.env.NODE_ENV === "production" ? {
  name: "bjn8wh",
  styles: "position:relative"
} : {
  name: "bjn8wh",
  styles: "position:relative",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9NYXJrZG93bkNvbnRyb2wvUmF3RWRpdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCcUMiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL01hcmtkb3duQ29udHJvbC9SYXdFZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSW1tdXRhYmxlUHJvcFR5cGVzIGZyb20gJ3JlYWN0LWltbXV0YWJsZS1wcm9wdHlwZXMnO1xuaW1wb3J0IHsgQ2xhc3NOYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGxlbmd0aHMsIGZvbnRzIH0gZnJvbSAnZGVjYXAtY21zLXVpLWRlZmF1bHQnO1xuaW1wb3J0IHsgY3JlYXRlRWRpdG9yIH0gZnJvbSAnc2xhdGUnO1xuaW1wb3J0IHsgRWRpdGFibGUsIFJlYWN0RWRpdG9yLCBTbGF0ZSwgd2l0aFJlYWN0IH0gZnJvbSAnc2xhdGUtcmVhY3QnO1xuaW1wb3J0IHsgd2l0aEhpc3RvcnkgfSBmcm9tICdzbGF0ZS1oaXN0b3J5JztcblxuaW1wb3J0IHsgZWRpdG9yU3R5bGVWYXJzLCBFZGl0b3JDb250cm9sQmFyIH0gZnJvbSAnLi4vc3R5bGVzJztcbmltcG9ydCBUb29sYmFyIGZyb20gJy4vVG9vbGJhcic7XG5pbXBvcnQgZGVmYXVsdEVtcHR5QmxvY2sgZnJvbSAnLi9wbHVnaW5zL2Jsb2Nrcy9kZWZhdWx0RW1wdHlCbG9jayc7XG5cbmZ1bmN0aW9uIHJhd0VkaXRvclN0eWxlcyh7IG1pbmltYWwgfSkge1xuICByZXR1cm4gYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG1pbi1oZWlnaHQ6ICR7bWluaW1hbCA/ICdhdXRvJyA6IGxlbmd0aHMucmljaFRleHRFZGl0b3JNaW5IZWlnaHR9O1xuICBmb250LWZhbWlseTogJHtmb250cy5tb25vfTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3A6IDA7XG4gIG1hcmdpbi10b3A6IC0ke2VkaXRvclN0eWxlVmFycy5zdGlja3lEaXN0YW5jZUJvdHRvbX07XG5gO1xufVxuXG5jb25zdCBSYXdFZGl0b3JDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuZnVuY3Rpb24gUmF3RWRpdG9yKHByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBmaWVsZCwgaXNTaG93TW9kZVRvZ2dsZSwgdCwgb25DaGFuZ2UgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGVkaXRvciA9IHVzZU1lbW8oKCkgPT4gd2l0aFJlYWN0KHdpdGhIaXN0b3J5KGNyZWF0ZUVkaXRvcigpKSksIFtdKTtcblxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFxuICAgIHByb3BzLnZhbHVlXG4gICAgICA/IHByb3BzLnZhbHVlLnNwbGl0KCdcXG4nKS5tYXAobGluZSA9PiBkZWZhdWx0RW1wdHlCbG9jayhsaW5lKSlcbiAgICAgIDogW2RlZmF1bHRFbXB0eUJsb2NrKCldLFxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLnBlbmRpbmdGb2N1cykge1xuICAgICAgUmVhY3RFZGl0b3IuZm9jdXMoZWRpdG9yKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVUb2dnbGVNb2RlKCkge1xuICAgIHByb3BzLm9uTW9kZSgncmljaF90ZXh0Jyk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UodmFsdWUpIHtcbiAgICBvbkNoYW5nZSh2YWx1ZS5tYXAobGluZSA9PiBsaW5lLmNoaWxkcmVuWzBdLnRleHQpLmpvaW4oJ1xcbicpKTtcbiAgICBzZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxTbGF0ZSBlZGl0b3I9e2VkaXRvcn0gdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cbiAgICAgIDxSYXdFZGl0b3JDb250YWluZXI+XG4gICAgICAgIDxFZGl0b3JDb250cm9sQmFyPlxuICAgICAgICAgIDxUb29sYmFyXG4gICAgICAgICAgICBvblRvZ2dsZU1vZGU9e2hhbmRsZVRvZ2dsZU1vZGV9XG4gICAgICAgICAgICBidXR0b25zPXtmaWVsZC5nZXQoJ2J1dHRvbnMnKX1cbiAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICByYXdNb2RlXG4gICAgICAgICAgICBpc1Nob3dNb2RlVG9nZ2xlPXtpc1Nob3dNb2RlVG9nZ2xlfVxuICAgICAgICAgICAgdD17dH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0VkaXRvckNvbnRyb2xCYXI+XG4gICAgICAgIDxDbGFzc05hbWVzPlxuICAgICAgICAgIHsoeyBjc3MsIGN4IH0pID0+IChcbiAgICAgICAgICAgIDxFZGl0YWJsZVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBjc3NgXG4gICAgICAgICAgICAgICAgICAke3Jhd0VkaXRvclN0eWxlcyh7IG1pbmltYWw6IGZpZWxkLmdldCgnbWluaW1hbCcpIH0pfVxuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9DbGFzc05hbWVzPlxuICAgICAgPC9SYXdFZGl0b3JDb250YWluZXI+XG4gICAgPC9TbGF0ZT5cbiAgKTtcbn1cblxuUmF3RWRpdG9yLnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uTW9kZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmaWVsZDogSW1tdXRhYmxlUHJvcFR5cGVzLm1hcC5pc1JlcXVpcmVkLFxuICBpc1Nob3dNb2RlVG9nZ2xlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmF3RWRpdG9yO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
function RawEditor(props) {
  const {
    className,
    field,
    isShowModeToggle,
    t,
    onChange
  } = props;
  const editor = (0, _react.useMemo)(() => (0, _slateReact.withReact)((0, _slateHistory.withHistory)((0, _slate.createEditor)())), []);
  const [value, setValue] = (0, _react.useState)(props.value ? props.value.split('\n').map(line => (0, _defaultEmptyBlock.default)(line)) : [(0, _defaultEmptyBlock.default)()]);
  (0, _react.useEffect)(() => {
    if (props.pendingFocus) {
      _slateReact.ReactEditor.focus(editor);
    }
  }, []);
  function handleToggleMode() {
    props.onMode('rich_text');
  }
  function handleChange(value) {
    onChange(value.map(line => line.children[0].text).join('\n'));
    setValue(value);
  }
  return (0, _react2.jsx)(_slateReact.Slate, {
    editor: editor,
    value: value,
    onChange: handleChange
  }, (0, _react2.jsx)(RawEditorContainer, null, (0, _react2.jsx)(_styles.EditorControlBar, null, (0, _react2.jsx)(_Toolbar.default, {
    onToggleMode: handleToggleMode,
    buttons: field.get('buttons'),
    disabled: true,
    rawMode: true,
    isShowModeToggle: isShowModeToggle,
    t: t
  })), (0, _react2.jsx)(_react2.ClassNames, null, ({
    css,
    cx
  }) => (0, _react2.jsx)(_slateReact.Editable, {
    className: cx(className, css`
                  ${rawEditorStyles({
      minimal: field.get('minimal')
    })}
                `),
    value: value,
    onChange: handleChange
  }))));
}
RawEditor.propTypes = {
  onChange: _propTypes.default.func.isRequired,
  onMode: _propTypes.default.func.isRequired,
  className: _propTypes.default.string.isRequired,
  value: _propTypes.default.string,
  field: _reactImmutableProptypes.default.map.isRequired,
  isShowModeToggle: _propTypes.default.bool.isRequired,
  t: _propTypes.default.func.isRequired
};
var _default = exports.default = RawEditor;