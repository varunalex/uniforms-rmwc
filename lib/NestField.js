'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _connectField = require('uniforms/connectField');

var _connectField2 = _interopRequireDefault(_connectField);

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

var _injectName = require('uniforms/injectName');

var _injectName2 = _interopRequireDefault(_injectName);

var _joinName = require('uniforms/joinName');

var _joinName2 = _interopRequireDefault(_joinName);

var _AutoField = require('./AutoField');

var _AutoField2 = _interopRequireDefault(_AutoField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Nest = function Nest(_ref) {
  var children = _ref.children,
      fields = _ref.fields,
      itemProps = _ref.itemProps,
      label = _ref.label,
      name = _ref.name,
      props = _objectWithoutProperties(_ref, ['children', 'fields', 'itemProps', 'label', 'name']);

  return _react2.default.createElement(
    'div',
    (0, _filterDOMProps2.default)(props),
    label && _react2.default.createElement(
      'label',
      null,
      label
    ),
    children ? (0, _injectName2.default)(name, children) : fields.map(function (key) {
      return _react2.default.createElement(_AutoField2.default, _extends({ key: key, name: (0, _joinName2.default)(name, key) }, itemProps));
    })
  );
};
exports.default = (0, _connectField2.default)(Nest, { ensureValue: false, includeInChain: false });