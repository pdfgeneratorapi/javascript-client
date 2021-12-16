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
 * The InlineResponse401 model module.
 * @module model/InlineResponse401
 * @version 3.1.1
 */
var InlineResponse401 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse401</code>.
   * @alias module:model/InlineResponse401
   */
  function InlineResponse401() {
    _classCallCheck(this, InlineResponse401);

    InlineResponse401.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse401, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse401</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse401} obj Optional instance to populate.
     * @return {module:model/InlineResponse401} The populated <code>InlineResponse401</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse401();

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

  return InlineResponse401;
}();
/**
 * Error description
 * @member {module:model/InlineResponse401.ErrorEnum} error
 */


InlineResponse401.prototype['error'] = undefined;
/**
 * HTTP Error code
 * @member {Number} status
 */

InlineResponse401.prototype['status'] = undefined;
/**
 * Allowed values for the <code>error</code> property.
 * @enum {String}
 * @readonly
 */

InlineResponse401['ErrorEnum'] = {
  /**
   * value: "Authentication failed: request expired"
   * @const
   */
  "failed: request expired": "Authentication failed: request expired",

  /**
   * value: "Authentication failed: signature or secret missing"
   * @const
   */
  "failed: signature or secret missing": "Authentication failed: signature or secret missing",

  /**
   * value: "Authentication failed: workspace missing"
   * @const
   */
  "failed: workspace missing": "Authentication failed: workspace missing",

  /**
   * value: "Authentication failed: key missing"
   * @const
   */
  "failed: key missing": "Authentication failed: key missing",

  /**
   * value: "Authentication failed: property 'iss' (issuer) missing in JWT"
   * @const
   */
  "failed: property &#39;iss&#39; (issuer) missing in JWT": "Authentication failed: property 'iss' (issuer) missing in JWT",

  /**
   * value: "Authentication failed: property 'sub' (subject) missing in JWT"
   * @const
   */
  "failed: property &#39;sub&#39; (subject) missing in JWT": "Authentication failed: property 'sub' (subject) missing in JWT",

  /**
   * value: "Authentication failed: property 'exp' (expiration time) missing in JWT"
   * @const
   */
  "failed: property &#39;exp&#39; (expiration time) missing in JWT": "Authentication failed: property 'exp' (expiration time) missing in JWT",

  /**
   * value: "Authentication failed: invalid 'iss' (issuer)"
   * @const
   */
  "failed: invalid &#39;iss&#39; (issuer)": "Authentication failed: invalid 'iss' (issuer)",

  /**
   * value: "Authentication failed: incorrect signature"
   * @const
   */
  "failed: incorrect signature": "Authentication failed: incorrect signature",

  /**
   * value: "Authentication failed"
   * @const
   */
  "failed": "Authentication failed"
};
var _default = InlineResponse401;
exports["default"] = _default;