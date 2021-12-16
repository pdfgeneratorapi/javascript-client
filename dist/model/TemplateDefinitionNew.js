"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TemplateDefinitionNewLayout = _interopRequireDefault(require("./TemplateDefinitionNewLayout"));

var _TemplateDefinitionNewPages = _interopRequireDefault(require("./TemplateDefinitionNewPages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TemplateDefinitionNew model module.
 * @module model/TemplateDefinitionNew
 * @version 3.1.1
 */
var TemplateDefinitionNew = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateDefinitionNew</code>.
   * Template configuration
   * @alias module:model/TemplateDefinitionNew
   * @param name {String} Template name
   */
  function TemplateDefinitionNew(name) {
    _classCallCheck(this, TemplateDefinitionNew);

    TemplateDefinitionNew.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TemplateDefinitionNew, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>TemplateDefinitionNew</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateDefinitionNew} obj Optional instance to populate.
     * @return {module:model/TemplateDefinitionNew} The populated <code>TemplateDefinitionNew</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateDefinitionNew();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ApiClient["default"].convertToType(data['tags'], ['String']);
        }

        if (data.hasOwnProperty('isDraft')) {
          obj['isDraft'] = _ApiClient["default"].convertToType(data['isDraft'], 'Boolean');
        }

        if (data.hasOwnProperty('layout')) {
          obj['layout'] = _TemplateDefinitionNewLayout["default"].constructFromObject(data['layout']);
        }

        if (data.hasOwnProperty('pages')) {
          obj['pages'] = _ApiClient["default"].convertToType(data['pages'], [_TemplateDefinitionNewPages["default"]]);
        }
      }

      return obj;
    }
  }]);

  return TemplateDefinitionNew;
}();
/**
 * Template name
 * @member {String} name
 */


TemplateDefinitionNew.prototype['name'] = undefined;
/**
 * A list of tags assigned to a template
 * @member {Array.<String>} tags
 */

TemplateDefinitionNew.prototype['tags'] = undefined;
/**
 * Indicates if the template is a draft or published.
 * @member {Boolean} isDraft
 */

TemplateDefinitionNew.prototype['isDraft'] = undefined;
/**
 * @member {module:model/TemplateDefinitionNewLayout} layout
 */

TemplateDefinitionNew.prototype['layout'] = undefined;
/**
 * Defines page or label size, margins and components on page or label
 * @member {Array.<module:model/TemplateDefinitionNewPages>} pages
 */

TemplateDefinitionNew.prototype['pages'] = undefined;
var _default = TemplateDefinitionNew;
exports["default"] = _default;