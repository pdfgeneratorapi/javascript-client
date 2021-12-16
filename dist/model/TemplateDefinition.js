"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TemplateDefinitionDataSettings = _interopRequireDefault(require("./TemplateDefinitionDataSettings"));

var _TemplateDefinitionEditor = _interopRequireDefault(require("./TemplateDefinitionEditor"));

var _TemplateDefinitionLayout = _interopRequireDefault(require("./TemplateDefinitionLayout"));

var _TemplateDefinitionNewPages = _interopRequireDefault(require("./TemplateDefinitionNewPages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TemplateDefinition model module.
 * @module model/TemplateDefinition
 * @version 3.1.1
 */
var TemplateDefinition = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateDefinition</code>.
   * @alias module:model/TemplateDefinition
   */
  function TemplateDefinition() {
    _classCallCheck(this, TemplateDefinition);

    TemplateDefinition.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TemplateDefinition, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TemplateDefinition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateDefinition} obj Optional instance to populate.
     * @return {module:model/TemplateDefinition} The populated <code>TemplateDefinition</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateDefinition();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

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
          obj['layout'] = _TemplateDefinitionLayout["default"].constructFromObject(data['layout']);
        }

        if (data.hasOwnProperty('pages')) {
          obj['pages'] = _ApiClient["default"].convertToType(data['pages'], [_TemplateDefinitionNewPages["default"]]);
        }

        if (data.hasOwnProperty('dataSettings')) {
          obj['dataSettings'] = _TemplateDefinitionDataSettings["default"].constructFromObject(data['dataSettings']);
        }

        if (data.hasOwnProperty('editor')) {
          obj['editor'] = _TemplateDefinitionEditor["default"].constructFromObject(data['editor']);
        }
      }

      return obj;
    }
  }]);

  return TemplateDefinition;
}();
/**
 * Unique identifier
 * @member {Number} id
 */


TemplateDefinition.prototype['id'] = undefined;
/**
 * Template name
 * @member {String} name
 */

TemplateDefinition.prototype['name'] = undefined;
/**
 * A list of tags assigned to a template
 * @member {Array.<String>} tags
 */

TemplateDefinition.prototype['tags'] = undefined;
/**
 * Indicates if the template is a draft or published.
 * @member {Boolean} isDraft
 */

TemplateDefinition.prototype['isDraft'] = undefined;
/**
 * @member {module:model/TemplateDefinitionLayout} layout
 */

TemplateDefinition.prototype['layout'] = undefined;
/**
 * Defines page or label size, margins and components on page or label
 * @member {Array.<module:model/TemplateDefinitionNewPages>} pages
 */

TemplateDefinition.prototype['pages'] = undefined;
/**
 * @member {module:model/TemplateDefinitionDataSettings} dataSettings
 */

TemplateDefinition.prototype['dataSettings'] = undefined;
/**
 * @member {module:model/TemplateDefinitionEditor} editor
 */

TemplateDefinition.prototype['editor'] = undefined;
var _default = TemplateDefinition;
exports["default"] = _default;