'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('rmwc/TextField');

var _reactAutosuggest = require('react-autosuggest');

var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);

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
      suggestions = _ref.suggestions,
      onSuggestionsFetchRequested = _ref.onSuggestionsFetchRequested,
      onSuggestionsClearRequested = _ref.onSuggestionsClearRequested,
      getSuggestionValue = _ref.getSuggestionValue,
      renderSuggestion = _ref.renderSuggestion,
      inputProps = _ref.inputProps,
      props = _objectWithoutProperties(_ref, ['disabled', 'error', 'errorMessage', 'id', 'helpertext', 'inputRef', 'label', 'name', 'onChange', 'placeholder', 'showInlineError', 'type', 'value', 'suggestions', 'onSuggestionsFetchRequested', 'onSuggestionsClearRequested', 'getSuggestionValue', 'renderSuggestion', 'inputProps']);

  var renderInput = function renderInput() {
    return _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement(_TextField.TextField, _extends({
        name: name,
        disabled: disabled,
        id: id,
        invalid: !!error,
        label: label,
        onChange: function onChange(event) {
          return _onChange(event.target.value);
        },
        placeholder: placeholder,
        ref: inputRef,
        type: type,
        value: value
      }, (0, _filterDOMProps2.default)(props)))
    );
  };
  var suggestion = [{
    text: 'Apple'
  }, {
    text: 'Banana'
  }, {
    text: 'Cherry'
  }, {
    text: 'Grapefruit'
  }, {
    text: 'Lemon'
  }];
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactAutosuggest2.default, {
      renderInputComponent: renderInput,
      suggestions: suggestion,
      onSuggestionsFetchRequested: onSuggestionsFetchRequested,
      onSuggestionsClearRequested: onSuggestionsClearRequested,
      getSuggestionValue: getSuggestionValue,
      renderSuggestion: renderSuggestion,
      inputProps: inputProps
    }),
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
Text.defaultProps = { type: 'text' };

exports.default = (0, _connectField2.default)(Text);