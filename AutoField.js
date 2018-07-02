'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseField2 = require('uniforms/BaseField');

var _BaseField3 = _interopRequireDefault(_BaseField2);

var _invariant = require('fbjs/lib/invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _react = require('react');

var _NumField = require('./NumField');

var _NumField2 = _interopRequireDefault(_NumField);

var _BoolField = require('./BoolField');

var _BoolField2 = _interopRequireDefault(_BoolField);

var _DateField = require('./DateField');

var _DateField2 = _interopRequireDefault(_DateField);

var _ListField = require('./ListField');

var _ListField2 = _interopRequireDefault(_ListField);

var _NestField = require('./NestField');

var _NestField2 = _interopRequireDefault(_NestField);

var _TextField = require('./TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _RadioField = require('./RadioField');

var _RadioField2 = _interopRequireDefault(_RadioField);

var _SelectField = require('./SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutoField = function (_BaseField) {
  _inherits(AutoField, _BaseField);

  function AutoField() {
    _classCallCheck(this, AutoField);

    return _possibleConstructorReturn(this, (AutoField.__proto__ || Object.getPrototypeOf(AutoField)).apply(this, arguments));
  }

  _createClass(AutoField, [{
    key: 'getChildContextName',
    value: function getChildContextName() {
      return this.context.uniforms.name;
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.getFieldProps(undefined, { ensureValue: false });

      if (props.component === undefined) {
        if (props.allowedValues) {
          if (props.checkboxes && props.fieldType !== Array) {
            props.component = _RadioField2.default;
          } else {
            props.component = _SelectField2.default;
          }
        } else {
          switch (props.fieldType) {
            case Date:
              props.component = _DateField2.default;break;
            case Array:
              props.component = _ListField2.default;break;
            case Number:
              props.component = _NumField2.default;break;
            case Object:
              props.component = _NestField2.default;break;
            case String:
              props.component = _TextField2.default;break;
            case Boolean:
              props.component = _BoolField2.default;break;
          }

          (0, _invariant2.default)(props.component, 'Unsupported field type: %s', props.fieldType.toString());
        }
      }

      return (0, _react.createElement)(props.component, this.props);
    }
  }]);

  return AutoField;
}(_BaseField3.default);

AutoField.displayName = 'AutoField';
exports.default = AutoField;