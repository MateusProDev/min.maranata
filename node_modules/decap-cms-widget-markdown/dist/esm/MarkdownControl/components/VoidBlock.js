"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@emotion/react");
var _decapCmsUiDefault = require("decap-cms-ui-default");
var _slateReact = require("slate-react");
var _slate = require("slate");
var _defaultEmptyBlock = _interopRequireDefault(require("../plugins/blocks/defaultEmptyBlock"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* eslint-disable react/prop-types */
function InsertionPoint(props) {
  return (0, _react2.jsx)("div", _extends({
    css: /*#__PURE__*/(0, _react2.css)("height:32px;cursor:text;position:relative;z-index:", _decapCmsUiDefault.zIndex.zIndex1, ";margin-top:-16px;;label:InsertionPoint;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9NYXJrZG93bkNvbnRyb2wvY29tcG9uZW50cy9Wb2lkQmxvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWMiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3JjL01hcmtkb3duQ29udHJvbC9jb21wb25lbnRzL1ZvaWRCbG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyB6SW5kZXggfSBmcm9tICdkZWNhcC1jbXMtdWktZGVmYXVsdCc7XG5pbXBvcnQgeyBSZWFjdEVkaXRvciwgdXNlU2xhdGUgfSBmcm9tICdzbGF0ZS1yZWFjdCc7XG5pbXBvcnQgeyBUcmFuc2Zvcm1zIH0gZnJvbSAnc2xhdGUnO1xuXG5pbXBvcnQgZGVmYXVsdEVtcHR5QmxvY2sgZnJvbSAnLi4vcGx1Z2lucy9ibG9ja3MvZGVmYXVsdEVtcHR5QmxvY2snO1xuXG5mdW5jdGlvbiBJbnNlcnRpb25Qb2ludChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17Y3NzYFxuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIGN1cnNvcjogdGV4dDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAke3pJbmRleC56SW5kZXgxfTtcbiAgICAgICAgbWFyZ2luLXRvcDogLTE2cHg7XG4gICAgICBgfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFZvaWRCbG9jayh7IGF0dHJpYnV0ZXMsIGNoaWxkcmVuLCBlbGVtZW50IH0pIHtcbiAgY29uc3QgZWRpdG9yID0gdXNlU2xhdGUoKTtcbiAgY29uc3QgcGF0aCA9IFJlYWN0RWRpdG9yLmZpbmRQYXRoKGVkaXRvciwgZWxlbWVudCk7XG5cbiAgZnVuY3Rpb24gaW5zZXJ0QXRQYXRoKGF0KSB7XG4gICAgVHJhbnNmb3Jtcy5pbnNlcnROb2RlcyhlZGl0b3IsIGRlZmF1bHRFbXB0eUJsb2NrKCksIHsgc2VsZWN0OiB0cnVlLCBhdCB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVJbnNlcnRCZWZvcmUoKSB7XG4gICAgaW5zZXJ0QXRQYXRoKHBhdGgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlSW5zZXJ0QWZ0ZXIoKSB7XG4gICAgaW5zZXJ0QXRQYXRoKFsuLi5wYXRoLnNsaWNlKDAsIC0xKSwgcGF0aFtwYXRoLmxlbmd0aCAtIDFdICsgMV0pO1xuICB9XG5cbiAgY29uc3QgaW5zZXJ0QmVmb3JlID0gcGF0aFswXSA9PT0gMDtcbiAgY29uc3QgbmV4dEVsZW1lbnQgPSBlZGl0b3IuY2hpbGRyZW5bcGF0aFswXSArIDFdO1xuICBjb25zdCBpbnNlcnRBZnRlciA9IHBhdGhbMF0gPT09IGVkaXRvci5jaGlsZHJlbi5sZW5ndGggLSAxIHx8IGVkaXRvci5pc1ZvaWQobmV4dEVsZW1lbnQpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiB7Li4uYXR0cmlidXRlc30gb25DbGljaz17aGFuZGxlQ2xpY2t9IGNvbnRlbnRFZGl0YWJsZT17ZmFsc2V9PlxuICAgICAge2luc2VydEJlZm9yZSAmJiA8SW5zZXJ0aW9uUG9pbnQgb25DbGljaz17aGFuZGxlSW5zZXJ0QmVmb3JlfSAvPn1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIHtpbnNlcnRBZnRlciAmJiA8SW5zZXJ0aW9uUG9pbnQgb25DbGljaz17aGFuZGxlSW5zZXJ0QWZ0ZXJ9IC8+fVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBWb2lkQmxvY2s7XG4iXX0= */"))
  }, props));
}
function VoidBlock({
  attributes,
  children,
  element
}) {
  const editor = (0, _slateReact.useSlate)();
  const path = _slateReact.ReactEditor.findPath(editor, element);
  function insertAtPath(at) {
    _slate.Transforms.insertNodes(editor, (0, _defaultEmptyBlock.default)(), {
      select: true,
      at
    });
  }
  function handleClick(event) {
    event.stopPropagation();
  }
  function handleInsertBefore() {
    insertAtPath(path);
  }
  function handleInsertAfter() {
    insertAtPath([...path.slice(0, -1), path[path.length - 1] + 1]);
  }
  const insertBefore = path[0] === 0;
  const nextElement = editor.children[path[0] + 1];
  const insertAfter = path[0] === editor.children.length - 1 || editor.isVoid(nextElement);
  return (0, _react2.jsx)("div", _extends({}, attributes, {
    onClick: handleClick,
    contentEditable: false
  }), insertBefore && (0, _react2.jsx)(InsertionPoint, {
    onClick: handleInsertBefore
  }), children, insertAfter && (0, _react2.jsx)(InsertionPoint, {
    onClick: handleInsertAfter
  }));
}
var _default = exports.default = VoidBlock;