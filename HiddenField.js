'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseField2 = require('uniforms/BaseField');

var _BaseField3 = _interopRequireDefault(_BaseField2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

var _nothing = require('uniforms/nothing');

var _nothing2 = _interopRequireDefault(_nothing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HiddenField = function (_BaseField) {
  _inherits(HiddenField, _BaseField);

  function HiddenField() {
    _classCallCheck(this, HiddenField);

    var _this = _possibleConstructorReturn(this, (HiddenField.__proto__ || Object.getPrototypeOf(HiddenField)).apply(this, arguments));

    _this.options = {
      ensureValue: true,
      overrideValue: true
    };
    return _this;
  }

  _createClass(HiddenField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var valueDesired = _ref.value;

      if (valueDesired === undefined) {
        return;
      }

      var props = this.getFieldProps();
      if (props.value !== valueDesired) {
        props.onChange(valueDesired);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.getFieldProps();

      return props.noDOM ? _nothing2.default : _react2.default.createElement('input', _extends({
        disabled: props.disabled,
        id: props.id,
        name: props.name,
        ref: props.inputRef,
        type: 'hidden',
        value: props.value
      }, (0, _filterDOMProps2.default)(props)));
    }
  }]);

  return HiddenField;
}(_BaseField3.default);

HiddenField.displayName = 'HiddenField';
exports.default = HiddenField;