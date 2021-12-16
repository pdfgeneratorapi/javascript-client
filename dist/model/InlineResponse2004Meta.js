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
 * The InlineResponse2004Meta model module.
 * @module model/InlineResponse2004Meta
 * @version 3.1.1
 */
var InlineResponse2004Meta = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2004Meta</code>.
   * @alias module:model/InlineResponse2004Meta
   */
  function InlineResponse2004Meta() {
    _classCallCheck(this, InlineResponse2004Meta);

    InlineResponse2004Meta.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2004Meta, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse2004Meta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004Meta} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004Meta} The populated <code>InlineResponse2004Meta</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2004Meta();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('display_name')) {
          obj['display_name'] = _ApiClient["default"].convertToType(data['display_name'], 'String');
        }

        if (data.hasOwnProperty('encoding')) {
          obj['encoding'] = _ApiClient["default"].convertToType(data['encoding'], 'String');
        }

        if (data.hasOwnProperty('content-type')) {
          obj['content-type'] = _ApiClient["default"].convertToType(data['content-type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2004Meta;
}();
/**
 * Document name. This value is automatically generated if name attribute is not defined in request.
 * @member {String} name
 */


InlineResponse2004Meta.prototype['name'] = undefined;
/**
 * Document name without the file extension.
 * @member {String} display_name
 */

InlineResponse2004Meta.prototype['display_name'] = undefined;
/**
 * Document encoding
 * @member {String} encoding
 */

InlineResponse2004Meta.prototype['encoding'] = undefined;
/**
 * Document content type.
 * @member {String} content-type
 */

InlineResponse2004Meta.prototype['content-type'] = undefined;
var _default = InlineResponse2004Meta;
exports["default"] = _default;