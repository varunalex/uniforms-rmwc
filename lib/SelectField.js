'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('rmwc/Checkbox');

var _Select = require('rmwc/Select');

var _TextField = require('rmwc/TextField');

var _connectField = require('uniforms/connectField');

var _connectField2 = _interopRequireDefault(_connectField);

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var xor = function xor(item, array) {
  var index = array.indexOf(item);
  if (index === -1) {
    return array.concat([item]);
  }

  return array.slice(0, index).concat(array.slice(index + 1));
};

var renderCheckboxes = function renderCheckboxes(_ref) {
  var allowedValues = _ref.allowedValues,
      appearance = _ref.appearance,
      disabled = _ref.disabled,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      fieldType = _ref.fieldType,
      fullWidth = _ref.fullWidth,
      helpertext = _ref.helpertext,
      id = _ref.id,
      inputRef = _ref.inputRef,
      label = _ref.label,
      margin = _ref.margin,
      name = _ref.name,
      _onChange = _ref.onChange,
      required = _ref.required,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ['allowedValues', 'appearance', 'disabled', 'error', 'errorMessage', 'fieldType', 'fullWidth', 'helpertext', 'id', 'inputRef', 'label', 'margin', 'name', 'onChange', 'required', 'value']);

  return allowedValues.map(function (item) {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { key: item },
        _react2.default.createElement(_Checkbox.Checkbox, _extends({
          checked: fieldType === Array ? value.includes(item) : value === item,
          disabled: disabled,
          id: id + '-' + item,
          label: label,
          indeterminate: indeterminate,
          name: name,
          onChange: function onChange() {
            return _onChange(fieldType === Array ? xor(item, value) : item);
          },
          type: 'checkbox'
        }, (0, _filterDOMProps2.default)(props)))
      ),
      !error ? _react2.default.createElement(
        _TextField.TextFieldHelperText,
        null,
        helpertext
      ) : _react2.default.createElement(
        _TextField.TextFieldHelperText,
        _extends({ persistent: true, validationMsg: true }, (0, _filterDOMProps2.default)(props)),
        errorMessage
      )
    );
  });
};
var renderSelect = function renderSelect(_ref2) {
  var allowedValues = _ref2.allowedValues,
      disabled = _ref2.disabled,
      error = _ref2.error,
      errorMessage = _ref2.errorMessage,
      fieldType = _ref2.fieldType,
      fullWidth = _ref2.fullWidth,
      helpertext = _ref2.helpertext,
      id = _ref2.id,
      inputProps = _ref2.inputProps,
      inputRef = _ref2.inputRef,
      label = _ref2.label,
      margin = _ref2.margin,
      name = _ref2.name,
      native = _ref2.native,
      _onChange2 = _ref2.onChange,
      placeholder = _ref2.placeholder,
      required = _ref2.required,
      showInlineError = _ref2.showInlineError,
      transform = _ref2.transform,
      value = _ref2.value,
      outlined = _ref2.outlined,
      props = _objectWithoutProperties(_ref2, ['allowedValues', 'disabled', 'error', 'errorMessage', 'fieldType', 'fullWidth', 'helpertext', 'id', 'inputProps', 'inputRef', 'label', 'margin', 'name', 'native', 'onChange', 'placeholder', 'required', 'showInlineError', 'transform', 'value', 'outlined']);

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Select.Select, _extends({
      disabled: disabled,
      id: id,
      name: name,
      label: label,
      onChange: function onChange(event) {
        return _onChange2(event.target.value);
      },
      ref: inputRef,
      value: value,
      placeholder: placeholder,
      options: allowedValues,
      outlined: outlined
    }, (0, _filterDOMProps2.default)(props))),
    !error ? _react2.default.createElement(
      _TextField.TextFieldHelperText,
      null,
      helpertext
    ) : _react2.default.createElement(
      _TextField.TextFieldHelperText,
      _extends({ persistent: true, validationMsg: true }, (0, _filterDOMProps2.default)(props)),
      errorMessage
    )
  );
};
var Selectbox = function Selectbox(_ref3) {
  var allowedValues = _ref3.allowedValues,
      checkboxes = _ref3.checkboxes,
      disabled = _ref3.disabled,
      fieldType = _ref3.fieldType,
      id = _ref3.id,
      inputRef = _ref3.inputRef,
      label = _ref3.label,
      name = _ref3.name,
      onChange = _ref3.onChange,
      placeholder = _ref3.placeholder,
      required = _ref3.required,
      transform = _ref3.transform,
      value = _ref3.value,
      props = _objectWithoutProperties(_ref3, ['allowedValues', 'checkboxes', 'disabled', 'fieldType', 'id', 'inputRef', 'label', 'name', 'onChange', 'placeholder', 'required', 'transform', 'value']);

  return _react2.default.createElement(
    'div',
    null,
    checkboxes ? renderCheckboxes(_extends({
      allowedValues: allowedValues, disabled: disabled, id: id, name: name, onChange: onChange, transform: transform, value: value, fieldType: fieldType }, (0, _filterDOMProps2.default)(props))) : renderSelect(_extends({
      allowedValues: allowedValues, disabled: disabled, id: id, name: name, onChange: onChange, transform: transform, value: value, inputRef: inputRef, label: label, placeholder: placeholder, required: required }, (0, _filterDOMProps2.default)(props)))
  );
};
exports.default = (0, _connectField2.default)(Selectbox);