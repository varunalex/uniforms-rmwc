'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _QuickForm = require('uniforms/QuickForm');

var _QuickForm2 = _interopRequireDefault(_QuickForm);

var _BaseForm = require('./BaseForm');

var _BaseForm2 = _interopRequireDefault(_BaseForm);

var _AutoField = require('./AutoField');

var _AutoField2 = _interopRequireDefault(_AutoField);

var _ErrorsField = require('./ErrorsField');

var _ErrorsField2 = _interopRequireDefault(_ErrorsField);

var _SubmitField = require('./SubmitField');

var _SubmitField2 = _interopRequireDefault(_SubmitField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Quick = function Quick(parent) {
    var _class, _temp;

    return _temp = _class = function (_QuickForm$Quick) {
        _inherits(_class, _QuickForm$Quick);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
            key: 'getAutoField',
            value: function getAutoField() {
                return _AutoField2.default;
            }
        }, {
            key: 'getErrorsField',
            value: function getErrorsField() {
                return _ErrorsField2.default;
            }
        }, {
            key: 'getSubmitField',
            value: function getSubmitField() {
                return _SubmitField2.default;
            }
        }]);

        return _class;
    }(_QuickForm2.default.Quick(parent)), _class.Quick = Quick, _temp;
};

exports.default = Quick(_BaseForm2.default);