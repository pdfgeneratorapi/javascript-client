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
 * The TemplateDefinitionNewMargins model module.
 * @module model/TemplateDefinitionNewMargins
 * @version 3.1.1
 */
var TemplateDefinitionNewMargins = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateDefinitionNewMargins</code>.
   * @alias module:model/TemplateDefinitionNewMargins
   */
  function TemplateDefinitionNewMargins() {
    _classCallCheck(this, TemplateDefinitionNewMargins);

    TemplateDefinitionNewMargins.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TemplateDefinitionNewMargins, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TemplateDefinitionNewMargins</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateDefinitionNewMargins} obj Optional instance to populate.
     * @return {module:model/TemplateDefinitionNewMargins} The populated <code>TemplateDefinitionNewMargins</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateDefinitionNewMargins();

        if (data.hasOwnProperty('right')) {
          obj['right'] = _ApiClient["default"].convertToType(data['right'], 'Number');
        }

        if (data.hasOwnProperty('bottom')) {
          obj['bottom'] = _ApiClient["default"].convertToType(data['bottom'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return TemplateDefinitionNewMargins;
}();
/**
 * Page or label margin from right
 * @member {Number} right
 */


TemplateDefinitionNewMargins.prototype['right'] = undefined;
/**
 * Page or label margin from bottom
 * @member {Number} bottom
 */

TemplateDefinitionNewMargins.prototype['bottom'] = undefined;
var _default = TemplateDefinitionNewMargins;
exports["default"] = _default;