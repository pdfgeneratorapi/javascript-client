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
 * The TemplateDefinitionDataSettings model module.
 * @module model/TemplateDefinitionDataSettings
 * @version 3.1.1
 */
var TemplateDefinitionDataSettings = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateDefinitionDataSettings</code>.
   * Defines filter and sort option for root data set.
   * @alias module:model/TemplateDefinitionDataSettings
   */
  function TemplateDefinitionDataSettings() {
    _classCallCheck(this, TemplateDefinitionDataSettings);

    TemplateDefinitionDataSettings.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TemplateDefinitionDataSettings, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TemplateDefinitionDataSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateDefinitionDataSettings} obj Optional instance to populate.
     * @return {module:model/TemplateDefinitionDataSettings} The populated <code>TemplateDefinitionDataSettings</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateDefinitionDataSettings();

        if (data.hasOwnProperty('sortBy')) {
          obj['sortBy'] = _ApiClient["default"].convertToType(data['sortBy'], [Object]);
        }

        if (data.hasOwnProperty('filterBy')) {
          obj['filterBy'] = _ApiClient["default"].convertToType(data['filterBy'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return TemplateDefinitionDataSettings;
}();
/**
 * @member {Array.<Object>} sortBy
 */


TemplateDefinitionDataSettings.prototype['sortBy'] = undefined;
/**
 * @member {Array.<Object>} filterBy
 */

TemplateDefinitionDataSettings.prototype['filterBy'] = undefined;
var _default = TemplateDefinitionDataSettings;
exports["default"] = _default;