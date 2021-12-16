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
 * The TemplateDefinitionNewLayout model module.
 * @module model/TemplateDefinitionNewLayout
 * @version 3.1.1
 */
var TemplateDefinitionNewLayout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateDefinitionNewLayout</code>.
   * Defines template layout (e.g page format, margins).
   * @alias module:model/TemplateDefinitionNewLayout
   */
  function TemplateDefinitionNewLayout() {
    _classCallCheck(this, TemplateDefinitionNewLayout);

    TemplateDefinitionNewLayout.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TemplateDefinitionNewLayout, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TemplateDefinitionNewLayout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateDefinitionNewLayout} obj Optional instance to populate.
     * @return {module:model/TemplateDefinitionNewLayout} The populated <code>TemplateDefinitionNewLayout</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateDefinitionNewLayout();

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

        if (data.hasOwnProperty('rotaion')) {
          obj['rotaion'] = _ApiClient["default"].convertToType(data['rotaion'], 'Number');
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

  return TemplateDefinitionNewLayout;
}();
/**
 * Defines template page size
 * @member {module:model/TemplateDefinitionNewLayout.FormatEnum} format
 */


TemplateDefinitionNewLayout.prototype['format'] = undefined;
/**
 * Page width in units
 * @member {Number} width
 */

TemplateDefinitionNewLayout.prototype['width'] = undefined;
/**
 * Page height in units
 * @member {Number} height
 */

TemplateDefinitionNewLayout.prototype['height'] = undefined;
/**
 * Measure unit
 * @member {module:model/TemplateDefinitionNewLayout.UnitEnum} unit
 */

TemplateDefinitionNewLayout.prototype['unit'] = undefined;
/**
 * Page orientation
 * @member {module:model/TemplateDefinitionNewLayout.OrientationEnum} orientation
 */

TemplateDefinitionNewLayout.prototype['orientation'] = undefined;
/**
 * Page rotation in degrees
 * @member {module:model/TemplateDefinitionNewLayout.RotaionEnum} rotaion
 */

TemplateDefinitionNewLayout.prototype['rotaion'] = undefined;
/**
 * @member {module:model/TemplateDefinitionNewLayoutMargins} margins
 */

TemplateDefinitionNewLayout.prototype['margins'] = undefined;
/**
 * @member {module:model/TemplateDefinitionNewLayoutRepeatLayout} repeatLayout
 */

TemplateDefinitionNewLayout.prototype['repeatLayout'] = undefined;
/**
 * Defines how many pages or labels should be empty
 * @member {Number} emptyLabels
 */

TemplateDefinitionNewLayout.prototype['emptyLabels'] = undefined;
/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */

TemplateDefinitionNewLayout['FormatEnum'] = {
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

TemplateDefinitionNewLayout['UnitEnum'] = {
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

TemplateDefinitionNewLayout['OrientationEnum'] = {
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
 * Allowed values for the <code>rotaion</code> property.
 * @enum {Number}
 * @readonly
 */

TemplateDefinitionNewLayout['RotaionEnum'] = {
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
var _default = TemplateDefinitionNewLayout;
exports["default"] = _default;