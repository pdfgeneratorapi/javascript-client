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
 * The TemplateDefinitionNewLayoutRepeatLayout model module.
 * @module model/TemplateDefinitionNewLayoutRepeatLayout
 * @version 3.1.1
 */
var TemplateDefinitionNewLayoutRepeatLayout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateDefinitionNewLayoutRepeatLayout</code>.
   * Defines page size if layout is repeated on the page e.g sheet labels
   * @alias module:model/TemplateDefinitionNewLayoutRepeatLayout
   */
  function TemplateDefinitionNewLayoutRepeatLayout() {
    _classCallCheck(this, TemplateDefinitionNewLayoutRepeatLayout);

    TemplateDefinitionNewLayoutRepeatLayout.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TemplateDefinitionNewLayoutRepeatLayout, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TemplateDefinitionNewLayoutRepeatLayout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateDefinitionNewLayoutRepeatLayout} obj Optional instance to populate.
     * @return {module:model/TemplateDefinitionNewLayoutRepeatLayout} The populated <code>TemplateDefinitionNewLayoutRepeatLayout</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateDefinitionNewLayoutRepeatLayout();

        if (data.hasOwnProperty('format')) {
          obj['format'] = _ApiClient["default"].convertToType(data['format'], 'String');
        }

        if (data.hasOwnProperty('width')) {
          obj['width'] = _ApiClient["default"].convertToType(data['width'], 'Number');
        }

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return TemplateDefinitionNewLayoutRepeatLayout;
}();
/**
 * Defines template page size
 * @member {module:model/TemplateDefinitionNewLayoutRepeatLayout.FormatEnum} format
 */


TemplateDefinitionNewLayoutRepeatLayout.prototype['format'] = undefined;
/**
 * Page width in units
 * @member {Number} width
 */

TemplateDefinitionNewLayoutRepeatLayout.prototype['width'] = undefined;
/**
 * Page height in units
 * @member {Number} height
 */

TemplateDefinitionNewLayoutRepeatLayout.prototype['height'] = undefined;
/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */

TemplateDefinitionNewLayoutRepeatLayout['FormatEnum'] = {
  /**
   * value: "A4"
   * @const
   */
  "A4": "A4",

  /**
   * value: "letter"
   * @const
   */
  "letter": "letter",

  /**
   * value: "custom"
   * @const
   */
  "custom": "custom"
};
var _default = TemplateDefinitionNewLayoutRepeatLayout;
exports["default"] = _default;