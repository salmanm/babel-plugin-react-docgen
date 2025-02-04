"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButton = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: ", ";\n  height: 40px;\n  max-width: 254px;\n  text-transform: uppercase;\n  text-decoration: none;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 2px;\n  background-color: ", ";\n\n  &:hover {\n    background: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = _styledComponents["default"].button(_templateObject(), function (props) {
  return props.margin ? props.margin : '10px';
}, function (props) {
  return props.bgColor ? props.bgColor : 'rgb(255, 168, 39)';
}, function (props) {
  return props.hoverColor ? props.hoverColor : '#81A2CA';
});

exports.StyledButton = StyledButton;