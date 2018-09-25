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

var Text = function Text(_ref) {
  var disabled = _ref.disabled,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      id = _ref.id,
      helpertext = _ref.helpertext,
      inputRef = _ref.inputRef,
      label = _ref.label,
      name = _ref.name,
      _onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      showInlineError = _ref.showInlineError,
      type = _ref.type,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ['disabled', 'error', 'errorMessage', 'id', 'helpertext', 'inputRef', 'label', 'name', 'onChange', 'placeholder', 'showInlineError', 'type', 'value']);

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_textfield.TextField, _extends({
      disabled: disabled,
      id: id,
      invalid: !!error,
      label: label,
      name: name,
      onChange: function onChange(event) {
        return _onChange(event.target.value);
      },
      placeholder: placeholder,
      ref: inputRef,
      type: type,
      value: value
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
Text.defaultProps = { type: 'text' };

exports.default = (0, _connectField2.default)(Text);