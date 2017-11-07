/**
 *                                                               _
 *   _____  _                           ____  _                 |_|
 *  |  _  |/ \   ____  ____ __ ___     / ___\/ \   __   _  ____  _
 *  | |_| || |  / __ \/ __ \\ '_  \ _ / /    | |___\ \ | |/ __ \| |
 *  |  _  || |__. ___/. ___/| | | ||_|\ \___ |  _  | |_| |. ___/| |
 *  |_/ \_|\___/\____|\____||_| |_|    \____/|_| |_|_____|\____||_|
 *
 *  ===============================================================
 *             More than a coder, More than a designer
 *  ===============================================================
 *
 *  - Document: index.js
 *  - Author: aleen42
 *  - Description: The main entry of this plugin
 *  - Create Time: Nov, 7th, 2017
 *  - Update Time: Nov, 7th, 2017
 *
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        type: 's2t'
    };

    return new ConvertChinese(options);
};

var _stream = require('stream');

var _nodeOpencc = require('node-opencc');

var _nodeOpencc2 = _interopRequireDefault(_nodeOpencc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConvertChinese = function (_Transform) {
    (0, _inherits3.default)(ConvertChinese, _Transform);

    function ConvertChinese(options) {
        (0, _classCallCheck3.default)(this, ConvertChinese);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ConvertChinese.__proto__ || (0, _getPrototypeOf2.default)(ConvertChinese)).call(this, {
            objectMode: true
        }));

        _this.options = options;
        return _this;
    }

    /**
     * transform input and produce output
     * @param file
     * @param encoding
     * @param callback
     * @returns {*}
     * @private
     */


    (0, _createClass3.default)(ConvertChinese, [{
        key: '_transform',
        value: function _transform(file, encoding, callback) {
            /** @namespace file.isNull */
            if (file.isNull()) {
                /** check whether file is empty */
                callback(null, file);
                return;
            }

            var functionsMap = {
                's2t': _nodeOpencc2.default.simplifiedToTraditional,
                't2s': _nodeOpencc2.default.traditionalToSimplified,
                's2tw': _nodeOpencc2.default.simplifiedToTaiwan,
                'tw2s': _nodeOpencc2.default.taiwanToSimplified,
                's2hk': _nodeOpencc2.default.simplifiedToHongKong,
                'hk2s': _nodeOpencc2.default.hongKongToSimplified,
                's2twp': _nodeOpencc2.default.simplifiedToTaiwanWithPhrases,
                'tw2sp': _nodeOpencc2.default.taiwanToSimplifiedWithPhrases,
                't2tw': _nodeOpencc2.default.traditionalToTaiwan,
                't2hk': _nodeOpencc2.default.traditionalToHongKong
            };

            file.contents = new Buffer(functionsMap[this.options.type](String(file.contents)));
            callback(null, file);
        }
    }]);
    return ConvertChinese;
}(_stream.Transform);

/**
 * an instance for the gulp plugin
 * @param options
 * @returns {ConvertChinese}
 */