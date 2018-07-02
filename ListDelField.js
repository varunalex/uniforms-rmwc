'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('rmwc/Button');

var _connectField = require('uniforms/connectField');

var _connectField2 = _interopRequireDefault(_connectField);

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ListDel = function ListDel(_ref) {
  var buttonIcon = _ref.buttonIcon,
      disabled = _ref.disabled,
      name = _ref.name,
      parent = _ref.parent,
      placeholder = _ref.placeholder,
      props = _objectWithoutProperties(_ref, ['buttonIcon', 'disabled', 'name', 'parent', 'placeholder']);

  var fieldIndex = +name.slice(1 + name.lastIndexOf('.'));
  var limitNotReached = !disabled && !(parent.minCount >= parent.value.length);

  return _react2.default.createElement(
    _Button.Button,
    _extends({
      type: 'button',
      disabled: !limitNotReached,
      onClick: function onClick() {
        return limitNotReached && parent.onChange([].concat(parent.value.slice(0, fieldIndex)).concat(parent.value.slice(1 + fieldIndex)));
      }
    }, (0, _filterDOMProps2.default)(props)),
    _react2.default.createElement(_Button.ButtonIcon, { use: buttonIcon || 'remove_circle' }),
    placeholder || 'Remove'
  );
};

exports.default = (0, _connectField2.default)(ListDel, { includeParent: true, initialValue: false });