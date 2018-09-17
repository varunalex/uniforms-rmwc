'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _textfield = require('@rmwc/textfield');

var _connectField = require('uniforms/connectField');

var _connectField2 = _interopRequireDefault(_connectField);

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var noneIfNaN = function noneIfNaN(x) {
  return isNaN(x) ? undefined : x;
};

var Num_ = function Num_(_ref) {
  var decimal = _ref.decimal,
      disabled = _ref.disabled,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      id = _ref.id,
      helpertext = _ref.helpertext,
      inputProps = _ref.inputProps,
      inputRef = _ref.inputRef,
      label = _ref.label,
      max = _ref.max,
      min = _ref.min,
      name = _ref.name,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      showInlineError = _ref.showInlineError,
      step = _ref.step,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ['decimal', 'disabled', 'error', 'errorMessage', 'id', 'helpertext', 'inputProps', 'inputRef', 'label', 'max', 'min', 'name', 'onChange', 'placeholder', 'showInlineError', 'step', 'value']);

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_textfield.TextField, _extends({
      disabled: disabled,
      id: id,
      invalid: !!error,
      max: max,
      min: min,
      name: name,
      label: label,
      onChange: onChange,
      placeholder: placeholder,
      ref: inputRef,
      type: 'number',
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

// NOTE: React < 16 workaround. Make it optional?

var Num = function (_Component) {
  _inherits(Num, _Component);

  function Num() {
    _classCallCheck(this, Num);

    var _this = _possibleConstructorReturn(this, (Num.__proto__ || Object.getPrototypeOf(Num)).apply(this, arguments));

    _this.state = { value: '' + _this.props.value };

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Num, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref2) {
      var decimal = _ref2.decimal,
          value = _ref2.value;

      var parse = decimal ? parseFloat : parseInt;

      if (noneIfNaN(parse(value)) !== noneIfNaN(parse(this.state.value.replace(/[.,]+$/, '')))) {
        this.setState({ value: value === undefined || value === '' ? '' : '' + value });
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(_ref3) {
      var value = _ref3.target.value;

      var change = value.replace(/[^\d.,-]/g, '');

      this.setState({ value: change });
      this.props.onChange(noneIfNaN((this.props.decimal ? parseFloat : parseInt)(change)));
    }
  }, {
    key: 'render',
    value: function render() {
      return Num_(_extends({}, this.props, { onChange: this.onChange, value: this.state.value }));
    }
  }]);

  return Num;
}(_react.Component);

exports.default = (0, _connectField2.default)(Num);