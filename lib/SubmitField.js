'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _BaseField = require('uniforms/BaseField');

var _BaseField2 = _interopRequireDefault(_BaseField);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('@rmwc/button');

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SubmitField = function SubmitField(_ref, _ref2) {
  var _ref2$uniforms = _ref2.uniforms,
      error = _ref2$uniforms.error,
      state = _ref2$uniforms.state;

  var disabled = _ref.disabled,
      inputRef = _ref.inputRef,
      value = _ref.value,
      buttonIcon = _ref.buttonIcon,
      props = _objectWithoutProperties(_ref, ['disabled', 'inputRef', 'value', 'buttonIcon']);

  return _react2.default.createElement(
    _button.Button,
    _extends({
      disabled: disabled === undefined ? !!(error || state.disabled) : disabled,
      ref: inputRef,
      type: 'submit'
    }, (0, _filterDOMProps2.default)(props)),
    buttonIcon ? _react2.default.createElement(_button.ButtonIcon, { use: buttonIcon }) : '',
    value || 'Button'
  );
};
SubmitField.contextTypes = _BaseField2.default.contextTypes;

exports.default = SubmitField;