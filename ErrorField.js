'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('rmwc/TextField');

var _connectField = require('uniforms/connectField');

var _connectField2 = _interopRequireDefault(_connectField);

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

var _nothing = require('uniforms/nothing');

var _nothing2 = _interopRequireDefault(_nothing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Error = function Error(_ref) {
  var children = _ref.children,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      helperText = _ref.helperText,
      props = _objectWithoutProperties(_ref, ['children', 'error', 'errorMessage', 'helperText']);

  return !error ? _react2.default.createElement(
    _TextField.TextFieldHelperText,
    null,
    children || helperText
  ) : _react2.default.createElement(
    _TextField.TextFieldHelperText,
    _extends({ persistent: true, validationMsg: true }, (0, _filterDOMProps2.default)(props)),
    children || errorMessage
  );
};
exports.default = (0, _connectField2.default)(Error, { initialValue: false });