"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TemplateDefinitionNewLayoutMargins = _interopRequireDefault(require("./TemplateDefinitionNewLayoutMargins"));

var _TemplateDefinitionNewLayoutRepeatLayout = _interopRequireDefault(require("./TemplateDefinitionNewLayoutRepeatLayout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TemplateDefinitionLayout model module.
 * @module model/TemplateDefinitionLayout
 * @version 3.1.1
 */
var TemplateDefinitionLayout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateDefinitionLayout</code>.
   * Defines template layout (e.g page format, margins).
   * @alias module:model/TemplateDefinitionLayout
   */
  function TemplateDefinitionLayout() {
    _classCallCheck(this, TemplateDefinitionLayout);

    TemplateDefinitionLayout.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TemplateDefinitionLayout, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TemplateDefinitionLayout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateDefinitionLayout} obj Optional instance to populate.
     * @return {module:model/TemplateDefinitionLayout} The populated <code>TemplateDefinitionLayout</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateDefinitionLayout();

        if (data.hasOwnProperty('format')) {
          obj['format'] = _ApiClient["default"].convertToType(data['format'], 'String');
        }

        if (data.hasOwnProperty('width')) {
          obj['width'] = _ApiClient["default"].convertToType(data['width'], 'Number');
        }

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }

        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }

        if (data.hasOwnProperty('orientation')) {
          obj['orientation'] = _ApiClient["default"].convertToType(data['orientation'], 'String');
        }

        if (data.hasOwnProperty('rotation')) {
          obj['rotation'] = _ApiClient["default"].convertToType(data['rotation'], 'Number');
        }

        if (data.hasOwnProperty('margins')) {
          obj['margins'] = _TemplateDefinitionNewLayoutMargins["default"].constructFromObject(data['margins']);
        }

        if (data.hasOwnProperty('repeatLayout')) {
          obj['repeatLayout'] = _TemplateDefinitionNewLayoutRepeatLayout["default"].constructFromObject(data['repeatLayout']);
        }

        if (data.hasOwnProperty('emptyLabels')) {
          obj['emptyLabels'] = _ApiClient["default"].convertToType(data['emptyLabels'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return TemplateDefinitionLayout;
}();
/**
 * Defines template page size
 * @member {module:model/TemplateDefinitionLayout.FormatEnum} format
 */


TemplateDefinitionLayout.prototype['format'] = undefined;
/**
 * Page width in units
 * @member {Number} width
 */

TemplateDefinitionLayout.prototype['width'] = undefined;
/**
 * Page height in units
 * @member {Number} height
 */

TemplateDefinitionLayout.prototype['height'] = undefined;
/**
 * Measure unit
 * @member {module:model/TemplateDefinitionLayout.UnitEnum} unit
 */

TemplateDefinitionLayout.prototype['unit'] = undefined;
/**
 * Page orientation
 * @member {module:model/TemplateDefinitionLayout.OrientationEnum} orientation
 */

TemplateDefinitionLayout.prototype['orientation'] = undefined;
/**
 * Page rotation in degrees
 * @member {module:model/TemplateDefinitionLayout.RotationEnum} rotation
 */

TemplateDefinitionLayout.prototype['rotation'] = undefined;
/**
 * @member {module:model/TemplateDefinitionNewLayoutMargins} margins
 */

TemplateDefinitionLayout.prototype['margins'] = undefined;
/**
 * @member {module:model/TemplateDefinitionNewLayoutRepeatLayout} repeatLayout
 */

TemplateDefinitionLayout.prototype['repeatLayout'] = undefined;
/**
 * Defines how many pages or labels should be empty
 * @member {Number} emptyLabels
 */

TemplateDefinitionLayout.prototype['emptyLabels'] = undefined;
/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */

TemplateDefinitionLayout['FormatEnum'] = {
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
/**
 * Allowed values for the <code>unit</code> property.
 * @enum {String}
 * @readonly
 */

TemplateDefinitionLayout['UnitEnum'] = {
  /**
   * value: "cm"
   * @const
   */
  "cm": "cm",

  /**
   * value: "in"
   * @const
   */
  "in": "in"
};
/**
 * Allowed values for the <code>orientation</code> property.
 * @enum {String}
 * @readonly
 */

TemplateDefinitionLayout['OrientationEnum'] = {
  /**
   * value: "portrait"
   * @const
   */
  "portrait": "portrait",

  /**
   * value: "landscape"
   * @const
   */
  "landscape": "landscape"
};
/**
 * Allowed values for the <code>rotation</code> property.
 * @enum {Number}
 * @readonly
 */

TemplateDefinitionLayout['RotationEnum'] = {
  /**
   * value: 0
   * @const
   */
  "0": 0,

  /**
   * value: 90
   * @const
   */
  "90": 90,

  /**
   * value: 180
   * @const
   */
  "180": 180,

  /**
   * value: 270
   * @const
   */
  "270": 270
};
var _default = TemplateDefinitionLayout;
exports["default"] = _default;