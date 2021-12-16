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
 * The TemplateDefinitionNewLayoutMargins model module.
 * @module model/TemplateDefinitionNewLayoutMargins
 * @version 3.1.1
 */
var TemplateDefinitionNewLayoutMargins = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateDefinitionNewLayoutMargins</code>.
   * Page margins in units
   * @alias module:model/TemplateDefinitionNewLayoutMargins
   */
  function TemplateDefinitionNewLayoutMargins() {
    _classCallCheck(this, TemplateDefinitionNewLayoutMargins);

    TemplateDefinitionNewLayoutMargins.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TemplateDefinitionNewLayoutMargins, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TemplateDefinitionNewLayoutMargins</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateDefinitionNewLayoutMargins} obj Optional instance to populate.
     * @return {module:model/TemplateDefinitionNewLayoutMargins} The populated <code>TemplateDefinitionNewLayoutMargins</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateDefinitionNewLayoutMargins();

        if (data.hasOwnProperty('top')) {
          obj['top'] = _ApiClient["default"].convertToType(data['top'], 'Number');
        }

        if (data.hasOwnProperty('right')) {
          obj['right'] = _ApiClient["default"].convertToType(data['right'], 'Number');
        }

        if (data.hasOwnProperty('bottom')) {
          obj['bottom'] = _ApiClient["default"].convertToType(data['bottom'], 'Number');
        }

        if (data.hasOwnProperty('left')) {
          obj['left'] = _ApiClient["default"].convertToType(data['left'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return TemplateDefinitionNewLayoutMargins;
}();
/**
 * @member {Number} top
 */


TemplateDefinitionNewLayoutMargins.prototype['top'] = undefined;
/**
 * @member {Number} right
 */

TemplateDefinitionNewLayoutMargins.prototype['right'] = undefined;
/**
 * @member {Number} bottom
 */

TemplateDefinitionNewLayoutMargins.prototype['bottom'] = undefined;
/**
 * @member {Number} left
 */

TemplateDefinitionNewLayoutMargins.prototype['left'] = undefined;
var _default = TemplateDefinitionNewLayoutMargins;
exports["default"] = _default;