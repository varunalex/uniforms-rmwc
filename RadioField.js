'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radio = require('@rmwc/radio');

var _connectField = require('uniforms/connectField');

var _connectField2 = _interopRequireDefault(_connectField);

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Radio = function Radio(_ref) {
  var allowedValues = _ref.allowedValues,
      checkboxes = _ref.checkboxes,
      disabled = _ref.disabled,
      id = _ref.id,
      label = _ref.label,
      name = _ref.name,
      _onChange = _ref.onChange,
      transform = _ref.transform,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ['allowedValues', 'checkboxes', 'disabled', 'id', 'label', 'name', 'onChange', 'transform', 'value']);

  return _react2.default.createElement(
    'div',
    (0, _filterDOMProps2.default)(props),
    label && _react2.default.createElement(
      'label',
      null,
      label
    ),
    allowedValues.map(function (item) {
      return _react2.default.createElement(
        _radio.Radio,
        {
          key: item,
          checked: item === value,
          disabled: disabled,
          id: id + '-' + item,
          name: name,
          onChange: function onChange() {
            return _onChange(item);
          },
          type: 'radio'
        },
        transform ? transform(item) : item
      );
    })
  );
};
exports.default = (0, _connectField2.default)(Radio);