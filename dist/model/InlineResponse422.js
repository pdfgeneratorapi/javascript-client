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
 * The InlineResponse422 model module.
 * @module model/InlineResponse422
 * @version 3.1.1
 */
var InlineResponse422 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse422</code>.
   * @alias module:model/InlineResponse422
   */
  function InlineResponse422() {
    _classCallCheck(this, InlineResponse422);

    InlineResponse422.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse422, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse422</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse422} obj Optional instance to populate.
     * @return {module:model/InlineResponse422} The populated <code>InlineResponse422</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse422();

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

  return InlineResponse422;
}();
/**
 * Error description
 * @member {module:model/InlineResponse422.ErrorEnum} error
 */


InlineResponse422.prototype['error'] = undefined;
/**
 * HTTP Error code
 * @member {Number} status
 */

InlineResponse422.prototype['status'] = undefined;
/**
 * Allowed values for the <code>error</code> property.
 * @enum {String}
 * @readonly
 */

InlineResponse422['ErrorEnum'] = {
  /**
   * value: "Unable to parse JSON, please check formatting"
   * @const
   */
  "Unable to parse JSON, please check formatting": "Unable to parse JSON, please check formatting",

  /**
   * value: "Required parameter missing"
   * @const
   */
  "Required parameter missing": "Required parameter missing",

  /**
   * value: "Required parameter missing: template definition not defined"
   * @const
   */
  "Required parameter missing: template definition not defined": "Required parameter missing: template definition not defined",

  /**
   * value: "Required parameter missing: template not defined"
   * @const
   */
  "Required parameter missing: template not defined": "Required parameter missing: template not defined"
};
var _default = InlineResponse422;
exports["default"] = _default;