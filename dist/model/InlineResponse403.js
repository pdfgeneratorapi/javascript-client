"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse403 model module.
 * @module model/InlineResponse403
 * @version 3.1.1
 */
var InlineResponse403 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse403</code>.
   * @alias module:model/InlineResponse403
   */
  function InlineResponse403() {
    _classCallCheck(this, InlineResponse403);

    InlineResponse403.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse403, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse403</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse403} obj Optional instance to populate.
     * @return {module:model/InlineResponse403} The populated <code>InlineResponse403</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse403();

        if (data.hasOwnProperty('error')) {
          obj['error'] = _ApiClient["default"].convertToType(data['error'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse403;
}();
/**
 * Error description
 * @member {module:model/InlineResponse403.ErrorEnum} error
 */


InlineResponse403.prototype['error'] = undefined;
/**
 * HTTP Error code
 * @member {Number} status
 */

InlineResponse403.prototype['status'] = undefined;
/**
 * Allowed values for the <code>error</code> property.
 * @enum {String}
 * @readonly
 */

InlineResponse403['ErrorEnum'] = {
  /**
   * value: "Your account has exceeded the monthly document generation limit."
   * @const
   */
  "Your account has exceeded the monthly document generation limit.": "Your account has exceeded the monthly document generation limit."
};
var _default = InlineResponse403;
exports["default"] = _default;