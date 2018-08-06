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

var _joinName = require('uniforms/joinName');

var _joinName2 = _interopRequireDefault(_joinName);

var _List = require('rmwc/List');

var _ListAddField = require('./ListAddField');

var _ListAddField2 = _interopRequireDefault(_ListAddField);

var _ListItemField = require('./ListItemField');

var _ListItemField2 = _interopRequireDefault(_ListItemField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var List = function List(_ref) {
  var children = _ref.children,
      initialCount = _ref.initialCount,
      itemProps = _ref.itemProps,
      label = _ref.label,
      name = _ref.name,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ['children', 'initialCount', 'itemProps', 'label', 'name', 'value']);

  return _react2.default.createElement(
    _List.List,
    (0, _filterDOMProps2.default)(props),
    children ? value.map(function (item, index) {
      return _react.Children.map(children, function (child) {
        return _react2.default.cloneElement(child, {
          key: index,
          label: null,
          name: (0, _joinName2.default)(name, child.props.name && child.props.name.replace('$', index))
        });
      });
    }) : value.map(function (item, index) {
      return _react2.default.createElement(_ListItemField2.default, _extends({ key: index, label: null, name: (0, _joinName2.default)(name, index) }, itemProps));
    }),
    _react2.default.createElement(_ListAddField2.default, { name: name + '.$', initialCount: initialCount })
  );
};
exports.default = (0, _connectField2.default)(List, { ensureValue: true, includeInChain: false });