'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _textfield = require('@rmwc/textfield');

var _connectField = require('uniforms/connectField');

var _connectField2 = _interopRequireDefault(_connectField);

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var dateFormat = function dateFormat(value) {
  return value && value.toISOString().slice(0, -8);
};
var dateParse = function dateParse(timestamp, onChange) {
  var time = new Date(timestamp);
  if (time) {
    onChange(time);
  } else if (isNaN(timestamp)) {
    onChange(undefined);
  }
};

var Time_ = function Time_(_ref) {
  var disabled = _ref.disabled,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      id = _ref.id,
      inputRef = _ref.inputRef,
      label = _ref.label,
      helpertext = _ref.helpertext,
      max = _ref.max,
      min = _ref.min,
      name = _ref.name,
      _onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ['disabled', 'error', 'errorMessage', 'id', 'inputRef', 'label', 'helpertext', 'max', 'min', 'name', 'onChange', 'placeholder', 'value']);

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_textfield.TextField, _extends({
      disabled: disabled,
      id: id,
      invalid: !!error,
      label: label,
      max: dateFormat(max),
      min: dateFormat(min),
      name: name,
      onChange: function onChange(event) {
        return dateParse(event.target.valueAsNumber, _onChange);
      },
      ref: inputRef,
      type: 'time'
    }, (0, _filterDOMProps2.default)(props))),
    !error ? _react2.default.createElement(
      _textfield.TextFieldHelperText,
      null,
      helpertext
    ) : _react2.default.createElement(
      _textfield.TextFieldHelperText,
      _extends({ persistent: true, validationMsg: true }, (0, _filterDOMProps2.default)(props)),
      errorMessage
    )
  );
};
Time_.displayName = 'Time';

exports.default = (0, _connectField2.default)(Time_);