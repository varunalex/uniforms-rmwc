'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _checkbox = require('@rmwc/checkbox');

var _connectField = require('uniforms/connectField');

var _connectField2 = _interopRequireDefault(_connectField);

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Bool = function Bool(_ref) {
  var disabled = _ref.disabled,
      id = _ref.id,
      inputRef = _ref.inputRef,
      indeterminate = _ref.indeterminate,
      label = _ref.label,
      name = _ref.name,
      _onChange = _ref.onChange,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ['disabled', 'id', 'inputRef', 'indeterminate', 'label', 'name', 'onChange', 'value']);

  return _react2.default.createElement(
    'div',
    (0, _filterDOMProps2.default)(props),
    _react2.default.createElement(_checkbox.Checkbox, {
      checked: value,
      disabled: disabled,
      id: id,
      label: label,
      indeterminate: indeterminate,
      name: name,
      onChange: function onChange() {
        return disabled || _onChange(!value);
      },
      ref: inputRef,
      type: 'checkbox'
    })
  );
};
exports.default = (0, _connectField2.default)(Bool);