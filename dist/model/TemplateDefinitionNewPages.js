"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Component = _interopRequireDefault(require("./Component"));

var _TemplateDefinitionNewMargins = _interopRequireDefault(require("./TemplateDefinitionNewMargins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TemplateDefinitionNewPages model module.
 * @module model/TemplateDefinitionNewPages
 * @version 3.1.1
 */
var TemplateDefinitionNewPages = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateDefinitionNewPages</code>.
   * @alias module:model/TemplateDefinitionNewPages
   */
  function TemplateDefinitionNewPages() {
    _classCallCheck(this, TemplateDefinitionNewPages);

    TemplateDefinitionNewPages.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TemplateDefinitionNewPages, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TemplateDefinitionNewPages</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateDefinitionNewPages} obj Optional instance to populate.
     * @return {module:model/TemplateDefinitionNewPages} The populated <code>TemplateDefinitionNewPages</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateDefinitionNewPages();

        if (data.hasOwnProperty('width')) {
          obj['width'] = _ApiClient["default"].convertToType(data['width'], 'Number');
        }

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }

        if (data.hasOwnProperty('margins')) {
          obj['margins'] = _TemplateDefinitionNewMargins["default"].constructFromObject(data['margins']);
        }

        if (data.hasOwnProperty('components')) {
          obj['components'] = _ApiClient["default"].convertToType(data['components'], [_Component["default"]]);
        }
      }

      return obj;
    }
  }]);

  return TemplateDefinitionNewPages;
}();
/**
 * Page width in units
 * @member {Number} width
 */


TemplateDefinitionNewPages.prototype['width'] = undefined;
/**
 * Page height in units
 * @member {Number} height
 */

TemplateDefinitionNewPages.prototype['height'] = undefined;
/**
 * @member {module:model/TemplateDefinitionNewMargins} margins
 */

TemplateDefinitionNewPages.prototype['margins'] = undefined;
/**
 * @member {Array.<module:model/Component>} components
 */

TemplateDefinitionNewPages.prototype['components'] = undefined;
var _default = TemplateDefinitionNewPages;
exports["default"] = _default;