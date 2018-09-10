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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var dateFormat = function dateFormat(value) {
  return value && value.toISOString().slice(0, -8);
};
var dateParse = function dateParse(timestamp, onChange) {
  var date = new Date(timestamp);
  if (date.getFullYear() < 10000) {
    onChange(date);
  } else if (isNaN(timestamp)) {
    onChange(undefined);
  }
};

var Date_ = function Date_(_ref) {
  var disabled = _ref.disabled,
      error = _ref.error,
      id = _ref.id,
      inputRef = _ref.inputRef,
      label = _ref.label,
      max = _ref.max,
      min = _ref.min,
      name = _ref.name,
      _onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      value = _ref.value,
      withLeadingIcon = _ref.withLeadingIcon,
      props = _objectWithoutProperties(_ref, ['disabled', 'error', 'id', 'inputRef', 'label', 'max', 'min', 'name', 'onChange', 'placeholder', 'value', 'withLeadingIcon']);

  return _react2.default.createElement(_TextField.TextField, _extends({
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
    type: 'datetime-local',
    value: dateFormat(value)
  }, (0, _filterDOMProps2.default)(props)));
};
Date_.displayName = 'Date';

exports.default = (0, _connectField2.default)(Date_);