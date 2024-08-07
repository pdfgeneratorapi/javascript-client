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
 * The Component model module.
 * @module model/Component
 * @version 4.0.3
 */
var Component = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Component</code>.
   * Template component definition
   * @alias module:model/Component
   */
  function Component() {
    _classCallCheck(this, Component);

    Component.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Component, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Component</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Component} obj Optional instance to populate.
     * @return {module:model/Component} The populated <code>Component</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Component();

        if (data.hasOwnProperty('cls')) {
          obj['cls'] = _ApiClient["default"].convertToType(data['cls'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('width')) {
          obj['width'] = _ApiClient["default"].convertToType(data['width'], 'Number');
        }

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }

        if (data.hasOwnProperty('top')) {
          obj['top'] = _ApiClient["default"].convertToType(data['top'], 'Number');
        }

        if (data.hasOwnProperty('left')) {
          obj['left'] = _ApiClient["default"].convertToType(data['left'], 'Number');
        }

        if (data.hasOwnProperty('zindex')) {
          obj['zindex'] = _ApiClient["default"].convertToType(data['zindex'], 'Number');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }

        if (data.hasOwnProperty('dataIndex')) {
          obj['dataIndex'] = _ApiClient["default"].convertToType(data['dataIndex'], 'String');
        }
      }

      return obj;
    }
    /**
     * Validates the JSON data with respect to <code>Component</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Component</code>.
     */

  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['cls'] && !(typeof data['cls'] === 'string' || data['cls'] instanceof String)) {
        throw new Error("Expected the field `cls` to be a primitive type in the JSON string but got " + data['cls']);
      } // ensure the json data is a string


      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      } // ensure the json data is a string


      if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
        throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
      } // ensure the json data is a string


      if (data['dataIndex'] && !(typeof data['dataIndex'] === 'string' || data['dataIndex'] instanceof String)) {
        throw new Error("Expected the field `dataIndex` to be a primitive type in the JSON string but got " + data['dataIndex']);
      }

      return true;
    }
  }]);

  return Component;
}();
/**
 * Defines component class/type
 * @member {module:model/Component.ClsEnum} cls
 */


Component.prototype['cls'] = undefined;
/**
 * Component id
 * @member {String} id
 */

Component.prototype['id'] = undefined;
/**
 * Width in units
 * @member {Number} width
 */

Component.prototype['width'] = undefined;
/**
 * Height in units
 * @member {Number} height
 */

Component.prototype['height'] = undefined;
/**
 * Position from the page top in units
 * @member {Number} top
 */

Component.prototype['top'] = undefined;
/**
 * Position from the page left in units
 * @member {Number} left
 */

Component.prototype['left'] = undefined;
/**
 * Defines the rendering order on page. Components with smaller zindex are rendered before
 * @member {Number} zindex
 */

Component.prototype['zindex'] = undefined;
/**
 * Component value
 * @member {String} value
 */

Component.prototype['value'] = undefined;
/**
 * Defines data field for Table and Container components which are used to iterate over list of items
 * @member {String} dataIndex
 */

Component.prototype['dataIndex'] = undefined;
/**
 * Allowed values for the <code>cls</code> property.
 * @enum {String}
 * @readonly
 */

Component['ClsEnum'] = {
  /**
   * value: "labelComponent"
   * @const
   */
  "labelComponent": "labelComponent",

  /**
   * value: "textComponent"
   * @const
   */
  "textComponent": "textComponent",

  /**
   * value: "dateComponent"
   * @const
   */
  "dateComponent": "dateComponent",

  /**
   * value: "numberComponent"
   * @const
   */
  "numberComponent": "numberComponent",

  /**
   * value: "htmlblockComponent"
   * @const
   */
  "htmlblockComponent": "htmlblockComponent",

  /**
   * value: "tableComponent"
   * @const
   */
  "tableComponent": "tableComponent",

  /**
   * value: "compositeComponent"
   * @const
   */
  "compositeComponent": "compositeComponent",

  /**
   * value: "chartComponent"
   * @const
   */
  "chartComponent": "chartComponent",

  /**
   * value: "barcodeComponent"
   * @const
   */
  "barcodeComponent": "barcodeComponent",

  /**
   * value: "qrcodeComponent"
   * @const
   */
  "qrcodeComponent": "qrcodeComponent",

  /**
   * value: "imageComponent"
   * @const
   */
  "imageComponent": "imageComponent",

  /**
   * value: "headerComponent"
   * @const
   */
  "headerComponent": "headerComponent",

  /**
   * value: "footerComponent"
   * @const
   */
  "footerComponent": "footerComponent",

  /**
   * value: "rectangleComponent"
   * @const
   */
  "rectangleComponent": "rectangleComponent",

  /**
   * value: "vlineComponent"
   * @const
   */
  "vlineComponent": "vlineComponent",

  /**
   * value: "hlineComponent"
   * @const
   */
  "hlineComponent": "hlineComponent",

  /**
   * value: "pagenumberComponent"
   * @const
   */
  "pagenumberComponent": "pagenumberComponent",

  /**
   * value: "symbolComponent"
   * @const
   */
  "symbolComponent": "symbolComponent",

  /**
   * value: "checkboxComponent"
   * @const
   */
  "checkboxComponent": "checkboxComponent",

  /**
   * value: "radioComponent"
   * @const
   */
  "radioComponent": "radioComponent",

  /**
   * value: "signatureComponent"
   * @const
   */
  "signatureComponent": "signatureComponent"
};
var _default = Component;
exports["default"] = _default;